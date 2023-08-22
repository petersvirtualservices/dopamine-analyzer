//https://www.youtube.com/watch?v=1NrHkjlWVhM

const express = require('express');
const router = express.Router();
const Activity = require('../models/activity');

router.get('/new', (req, res) => {
  res.render('entries/newactivity', { activity: new Activity() });
});

router.get('/:id', async (req, res, next) => {
  const activity = await Activity.findById(req.params.id);
  if (activity == null) res.redirect('/');
  res.render('entries/index');
  //, { activity: activity })
})

router.post('/', async (req, res) => {
  let activity = new Activity({
  date: req.body.date,
  activity: req.body.activity,
  activityminutes: req.body.activityminutes,
  sun: req.body.sun,
  sleep: req.body.sleep,
  social: req.body.social,
  socialMedia: req.body.socialMedia,
  walking: req.body.walking,
  happy_begin: req.body.happy_begin,
  happy_done: req.body.happy_done,
  sad_begin: req.body.sad_begin,
  sad_done: req.body.sad_done,
  mad_begin: req.body.mad_begin,
  mad_done: req.body.mad_done,
  scared_begin: req.body.scared_begin,
  scared_done: req.body.scared_done,
  excited_begin: req.body.excited_begin,
  excited_done: req.body.excited_done,
  apathy_begin: req.body.apathy_begin,
  apathy_done: req.body.apathy_done,
  determined_done: req.body.determined_done,
  determined_begin: req.body.determined_begin,
  satisfied_done: req.body.satisfied_done,
  satisfied_begin: req.body.satisfied_begin,
  note: req.body.note    
  })
  try {
    activity = await activity.save();
    res.redirect(`/activity/${activity.id}`);
  } catch (e) {
    res.render('activity/newactivity', { activity: activity });
  }
});

router.post('/', async (req, res, next) => {
  req.activity = new Activity();
  next();
}),

router.put('/:id', async (req, res, next) => {
  req.activity = await Activity.findById(req.params.id);
})


module.exports = router;
