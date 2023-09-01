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
  work: req.body.work,

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
