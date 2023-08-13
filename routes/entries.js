//https://www.youtube.com/watch?v=1NrHkjlWVhM

const express = require('express');
const router = express.Router();
const Entries = require('../models/food');

router.get('/new', (req, res) => {
  res.render('entries/new', { entry: new Entries() });
});


router.get('/:id', async (req, res, next) => {
  const entry = await Entries.findById(req.params.id);
  if (entry == null) res.redirect('/');
  res.render('entries/show', { entry: entry })
})

router.post('/', async (req, res) => {
  let entry = new Entries({
    food: req.body.food,
    ounces: req.body.ounces,
    happy: req.body.happy,
    sad: req.body.sad,
    mad: req.body.mad,
    excited: req.body.excited,
    apathy: req.body.apathy,
    date: req.body.date,
    note: req.body.note,
  })
  try {
    entry = await entry.save();
    res.redirect(`/entries/${entry.id}`);
  } catch (e) {
    res.render('entries/new', { entry: entry });
  }
});

router.post('/', async (req, res, next) => {
  req.entry = new Entries();
  next();
}, saveEntryAndRedirect('new'));

router.delete('/:id', async (req, res) => {
  await Entries.findByIdAndDelete(req.params.id);
  res.redirect('/');
})

router.put('/:id', async (req, res, next) => {
  req.entry = await Entries.findById(req.params.id);
})

router.get('/edit/:id', async (req, res, next) => {
  const entry = await Entries.findById(req.params.id);
  if (entry == null) res.redirect('/');
  res.render('entries/edit', { entry: entry });
})

function saveEntryAndRedirect(path) {
  return async (req, res) => {
    let entry = req.entry
    entry.id = req.body.title
    entry.food = req.body.food
    entry.ounces = req.body.ounces
    entry.happy = req.body.happy
    entry.sad = req.body.sad
    entry.mad = req.body.mad
    entry.excited = req.body.excited
    entry.apathy = req.body.apathy
    try {
      entry = await entry.save();
      res.redirect(`/entries/${entry.id}`);
    } catch (e) {
      res.render(`entries/${path}`, { entry: entry });
    }
  }
}
module.exports = router;
