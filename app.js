const express = require('express');
const app = express();
const mongoose = require("mongoose");
const path = require('path');
const caloriesRouter = require('./routes/calories');
const Calorie = require('./models/calories');
const measurementRouter = require('./routes/measurement');
const Measurement = require('./models/measurements');
const add_foodRouter = require('./routes/add_food');
const Add_Food = require('./models/add_food');
var methodOverride = require('method-override');


var MongoClient = require('mongodb').MongoClient;
const db = process.env.DATABASE || "mongodb+srv://cpeters:FunnyG0y@analysis.roepm1h.mongodb.net/?retryWrites=true&w=majority";

app.use(express.urlencoded({extended:false}));
app.use('/calories',caloriesRouter);
app.use('/measurement',measurementRouter);
app.use('/add_food',add_foodRouter);
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

// app.get('/calories', async (req, res) => {
//   const activities = await Activity.find().sort({ date: 'desc' })
//   //res.render('entries/index', { calories: calories })
// })

// app.get('/measurements', async (req, res) => {
//   const measurements = await Measurement.find().sort({ date: 'desc' })
//   res.render('entries/measurementindex', { measurements: measurements })
// })

// app.get('/add_food', async (req, res) => {
//   const add_foods = await Add_Food.find().sort({ date: 'desc' });
//   res.render('entries/add_foodindex', { add_foods: add_foods })
// })


var port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log("Server started.");
});