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
  res.render('entries/foodshow', { food: food })
})

router.post('/', async (req, res) => {
  let food = new Food({
    food: req.body.food,
    water:req.body.water,
    ounces: req.body.ounces,
    happy_begin: req.body.happy_begin,
    sad_begin: req.body.sad_begin,
    mad_begin: req.body.mad_begin,
    scared_begin: req.body.scared_begin,
    excited_begin: req.body.excited_begin,
    apathy_begin: req.body.apathy_begin,
    happy_done: req.body.happy_done,
    sad_done: req.body.sad_done,
    mad_done: req.body.mad_done,
    scared_done: req.body.scared_done,
    excited_done: req.body.excited_done,
    apathy_done: req.body.apathy_done,
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
