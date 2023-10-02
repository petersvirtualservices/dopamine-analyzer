//https://www.youtube.com/watch?v=1NrHkjlWVhM

const express = require('express');
const router = express.Router();
const Measurement = require('../models/measurements');

router.get('/new', (req, res) => {
  res.render('entries/newmeasurement', { measurement: new Measurement() });
});

router.get('/:id', async (req, res, next) => {
  const measurement = await Measurement.findById(req.params.id);
  if (measurement == null) res.redirect('/');
  res.render('entries/index');
  //, { measurement: measurement })
})

router.post('/', async (req, res) => {
  let measurement = new Measurement({
    date: req.body.date,
    weight: req.body.weight,
    bloodsugar: req.body.bloodsugar,
    systolicbp: req.body.systolicbp,
    dystolicbp: req.body.dystolicbp,
    oxygen: req.body.oxygen,
    pulse: req.body.pulse,
    hip: req.body.hip,
    waist: req.body.waist,
    chest: req.body.chest,
    note: req.body.note
  })
  try {
    measurement = await measurement.save();
    res.redirect(`/measurement/${measurement.id}`);
  } catch (e) {
    res.render('entries/index');
  }
});

router.post('/', async (req, res, next) => {
  req.measurement = new Measurement();
  next();
}),
  //}, savemeasurementAndRedirect('new'));
  /*
  router.delete('/:id', async (req, res) => {
    await Food.findByIdAndDelete(req.params.id);
    res.redirect('/');
  })
  */
  router.put('/:id', async (req, res, next) => {
    req.measurement = await Measurement.findById(req.params.id);
  })
/*
router.get('/edit/:id', async (req, res, next) => {
  const measurement = await Food.findById(req.params.id);
  if (measurement == null) res.redirect('/');
  res.render('Food/edit', { measurement: measurement });
})

function savemeasurementAndRedirect(path) {
  return async (req, res) => {
    let measurement = req.measurement
    measurement.id = req.body.title
    measurement.food = req.body.food
    measurement.water = req.body.water
    measurement.ounces = req.body.ounces
    measurement.happy = req.body.happy
    measurement.sad = req.body.sad
    measurement.mad = req.body.mad
    measurement.scared = req.body.scared
    measurement.excited = req.body.excited
    measurement.apathy = req.body.apathy
    try {
      measurement = await measurement.save();
      res.redirect(`/entries/${measurement.id}`);
    } catch (e) {
      res.render(`entries/${path}`, { measurement: measurement });
    }    
  }  
}
*/

module.exports = router;
