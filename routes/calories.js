//https://www.youtube.com/watch?v=1NrHkjlWVhM

const express = require('express');
const router = express.Router();
const Calories = require('../models/calories');

router.get('/new', (req, res) => {
  res.render('entries/newcalories', { calorie: new Calories() });
});

router.get('/:id', async (req, res, next) => {
  const calorie = await Calories.findById(req.params.id);
  if (calorie == null) res.redirect('/');
  res.render('entries/index');
  //, { calorie: calorie })
})

router.post('/', async (req, res) => {
  let calorie = new Calories({
    date: req.body.date,
    food: req.body.food,
    water: req.body.water,
    servings: req.body.servings,
    foodLength: req.body.foodLength,
    activityminutes: req.body.activityminutes,
    sun: req.body.sun,
    social: req.body.social,
    cardio: req.body.cardio,
    rest: req.body.rest,
    bodyRelease: req.body.bodyRelease,
    craving: req.body.craving,
    feelingBefore: req.body.feelingBefore,
    feelingAfter: req.body.feelingAfter,
    note: req.body.note
  })
  try {
    calorie = await calorie.save();
    res.redirect(`/calories/${calorie.id}`);
  } catch (e) {
    res.render('entries/index');
  }
});

router.post('/', async (req, res, next) => {
  req.calorie = new Calories();
  next();
}),
  router.put('/:id', async (req, res, next) => {
    req.calorie = await Calories.findById(req.params.id);
  })


module.exports = router;