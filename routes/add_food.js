//https://www.youtube.com/watch?v=1NrHkjlWVhM

const express = require('express');
const router = express.Router();
const Add_Food = require('../models/add_food');

router.get('/new', (req, res) => {
  res.render('entries/newadd_food', { add_food: new Add_Food() });
});

router.get('/:id', async (req, res, next) => {
  const add_food = await Add_Food.findById(req.params.id);
  if (add_food == null) res.redirect('/');
  res.render('entries/index');
  //, { add_food: add_food })
})

router.post('/', async (req, res) => {
  let add_food = new Add_Food({

    food: req.body.food,
    serving: req.body.serving,
    calories: req.body.calories,
    totalFat: req.body.totalFat,
    satFat: req.body.satFat,
    transFat: req.body.transFat,
    cholesterol: req.body.cholesterol,
    sodium: req.body.sodium,
    carbohydrates: req.body.carbohydrates,
    fiber: req.body.fiber,
    sugars: req.body.sugars,
    protein: req.body.protein,
    vitD: req.body.vitD,
    calcium: req.body.calcium,
    iron: req.body.iron,
    potassium: req.body.potassium,
    note: req.body.note
  })
  try {
    add_food = await add_food.save();
    res.redirect(`/add_food/${add_food.id}`);
  } catch (e) {
    res.render('add_food/newadd_food', { add_food: add_food });
  }
});

router.post('/', async (req, res, next) => {
  req.add_food = new Add_Food();
  next();
}),
  //saveadd_foodAndRedirect('new'));
  /*
  router.delete('/:id', async (req, res) => {
    await Food.findByIdAndDelete(req.params.id);
    res.redirect('/');
  })
  */
  router.put('/:id', async (req, res, next) => {
    req.add_food = await Add_Food.findById(req.params.id);
  })
/*
router.get('/edit/:id', async (req, res, next) => {
  const add_food = await Food.findById(req.params.id);
  if (add_food == null) res.redirect('/');
  res.render('Food/edit', { add_food: add_food });
})

function saveadd_foodAndRedirect(path) {
  return async (req, res) => {
    let add_food = req.add_food
    add_food.id = req.body.title
    add_food.food = req.body.food
    add_food.water = req.body.water
    add_food.ounces = req.body.ounces
    add_food.happy = req.body.happy
    add_food.sad = req.body.sad
    add_food.mad = req.body.mad
    add_food.scared = req.body.scared
    add_food.excited = req.body.excited
    add_food.apathy = req.body.apathy
    try {
      add_food = await add_food.save();
      res.redirect(`/entries/${add_food.id}`);
    } catch (e) {
      res.render(`entries/${path}`, { add_food: add_food });
    }    
  }  
}
*/

module.exports = router;
