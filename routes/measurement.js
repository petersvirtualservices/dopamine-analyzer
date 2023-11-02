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
  router.put('/:id', async (req, res, next) => {
    req.measurement = await Measurement.findById(req.params.id);
  })


module.exports = router;
