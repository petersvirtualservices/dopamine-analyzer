const express = require('express');
const app = express();
const mongoose = require("mongoose");
const path = require('path');
const foodRouter = require('./routes/food');
const Food = require('./models/food');
const activitiesRouter = require('./routes/activity');
const Activity = require('./models/activity');
const measurementRouter = require('./routes/measurement');
const Measurement = require('./models/measurements');
var methodOverride = require('method-override');


var MongoClient = require('mongodb').MongoClient;
const db = process.env.DATABASE;

app.use(express.urlencoded({extended:false}));
app.use('/food',foodRouter);
app.use('/activity',activitiesRouter);
app.use('/measurements',measurementRouter);
app.use(methodOverride('_method'));

// DB Config
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB successfully connected"))
  .catch((err) => console.log(err));
mongoose.set("strictQuery", false);

//const Food = require("./models/food");

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
  res.render('entries/index')
})

app.get('/food', async (req, res) => {
  const foods = await Food.find().sort({ date: 'desc' })
  res.render('entries/foodindex', { foods: foods })
})

app.get('/activity', async (req, res) => {
  const activities = await Activity.find().sort({ date: 'desc' })
  res.render('entries/activityindex', { activities: activities })
})

app.get('/measurements', async (req, res) => {
  const measurements = await Measurement.find().sort({ date: 'desc' })
  res.render('entries/measurementindex', { measurements: measurements })
})

app.listen(8000 || process.env.PORT, () => {
    console.log("server started on port 8000");
});