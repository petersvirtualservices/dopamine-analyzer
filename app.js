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
const add_foodRouter = require('./routes/add_food');
const Add_Food = require('./models/add_food');
const energyRouter = require('./routes/energy');
const Energy = require('./models/energy');
var methodOverride = require('method-override');


var MongoClient = require('mongodb').MongoClient;
const db = process.env.DATABASE || "mongodb+srv://cpeters:FunnyG0y@analysis.roepm1h.mongodb.net/?retryWrites=true&w=majority";

app.use(express.urlencoded({extended:false}));
app.use('/food',foodRouter);
app.use('/activity',activitiesRouter);
app.use('/measurements',measurementRouter);
app.use('/add_food',add_foodRouter);
app.use('/energy',energyRouter);
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

app.get('/add_food', async (req, res) => {
  const add_foods = await Add_Food.find().sort({ date: 'desc' });
  res.render('entries/add_foodindex', { add_foods: add_foods })
})

app.get('/energy', async (req, res) => {
  const energies = await Energy.find().sort({ date: 'desc' });
  res.render('entries/energyindex', { energies:energies })
})

var port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log("Server started.");
});