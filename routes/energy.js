//https://www.youtube.com/watch?v=1NrHkjlWVhM

const express = require('express');
const router = express.Router();
const Energy = require('../models/energy');

router.get('/new', (req, res) => {
  res.render('entries/newenergy', { energy: new Energy() });
});

router.get('/:id', async (req, res, next) => {
  const energy = await Energy.findById(req.params.id);
  if (energy == null) res.redirect('/');
  res.render('entries/index');
  //, { energy: energy })
})

router.post('/', async (req, res) => {
  let energy = new Energy({
  date: req.body.date,
  positive: req.body.positive,
  negative: req.body.negative,
  laugh: req.body.laugh,
  physicalEmotion: req.body.physicalEmotion,
  note: req.body.note    
  })
  try {
    energy = await energy.save();
    res.redirect(`/energy/${energy.id}`);
  } catch (e) {
    res.render('energy/newenergy', { energy: energy });
  }
});

router.post('/', async (req, res, next) => {
  req.energy = new Energy();
  next();
}),

router.put('/:id', async (req, res, next) => {
  req.energy = await Energy.findById(req.params.id);
})


module.exports = router;
