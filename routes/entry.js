//https://www.youtube.com/watch?v=1NrHkjlWVhM

const express = require('express');
const router = express.Router();
const Calories = require('../models/entry');

router.get('/new', (req, res) => {
  res.render('entries/newcalories', { calorie: new Calories() });
});

router.get('/measurement', (req, res) => {
  res.render('entries/newmeasurement', { calorie: new Calories() });
});

router.get('/:id', async (req, res, next) => {
  const calorie = await Calories.findById(req.params.id);
  if (calorie == null) res.redirect('/');
  res.render('entries/index');
  //, { calorie: calorie })
})

//https://www.pnas.org/doi/10.1073/pnas.1321664111
router.post('/', async (req, res) => {
  let calorie = new Calories({
    date: req.body.date,
    measurementType: req.body.measurementType, 
    measurementAmount: req.body.measurementAmount,
    bodyRelease: req.body.bodyRelease,
    emotionEnergy_Head: req.body.emotionEnergy_Head,
    emotionEnergy_ShoulderTorsoBack: req.body.emotionEnergy_ShoulderTorsoBack,
    emotionEnergy_Arm: req.body.emotionEnergy_Arm,
    emotionEnergy_StomachButtGenital: req.body.emotionEnergy_StomachButtGenital,
    emotionEnergy_Leg: req.body.emotionEnergy_Leg,   
    activityminutes: req.body.activityminutes, 
    clothing: req.body.clothing,    
    LifeConnection: req.body.LifeConnection,
    ComfortableStretching: req.body.ComfortableStretching,
    UVRays: req.body.UVRays,
    UnconsciousMovement: req.body.UnconsciousMovement,
    food: req.body.food,
    water: req.body.water,
    servings: req.body.servings,
    foodLength: req.body.foodLength,
    note: req.body.note,  
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