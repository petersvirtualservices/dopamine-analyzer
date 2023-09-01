//https://www.youtube.com/watch?v=1NrHkjlWVhM

const express = require('express');
const router = express.Router();
const Food = require('../models/food');

router.get('/new', (req, res) => {
  res.render('entries/newfood', { food: new Food() });
});


router.get('/:id', async (req, res, next) => {
  const food = await Food.findById(req.params.id);
  if (food == null) res.redirect('/');
  res.render('entries/index');
  //, { food: food })
})

router.post('/', async (req, res) => {
  let food = new Food({
    food: req.body.food,
    water: req.body.water,
    ounces: req.body.ounces,
    date: req.body.date,
    note: req.body.note,
  })
  try {
    food = await food.save();
    res.redirect(`/food/${food.id}`);
  } catch (e) {
    res.render('food/newfood', { food: food });
  }
});

router.post('/', async (req, res, next) => {
  req.food = new Food();
  next();
})
//}, savefoodAndRedirect('new'));

router.delete('/:id', async (req, res) => {
  await Food.findByIdAndDelete(req.params.id);
  res.redirect('/');
})

router.put('/:id', async (req, res, next) => {
  req.food = await Food.findById(req.params.id);
})
/*
router.get('/edit/:id', async (req, res, next) => {
  const food = await Food.findById(req.params.id);
  if (food == null) res.redirect('/');
  res.render('entries/edit', { food: food });
})
*/
function savefoodAndRedirect(path) {
  return async (req, res) => {
    let food = req.food
    food.id = req.body.title
    food.food = req.body.food
    food.water = req.body.water
    food.ounces = req.body.ounces
    food.happy = req.body.happy
    food.sad = req.body.sad
    food.mad = req.body.mad
    food.scared = req.body.scared
    food.excited = req.body.excited
    food.apathy = req.body.apathy
    try {
      food = await food.save();
      res.redirect(`/entries/${food.id}`);
    } catch (e) {
      res.render(`entries/${path}`, { food: food });
    }
  }
}
module.exports = router;
