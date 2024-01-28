const express = require('express');
const app = express();
const mongoose = require("mongoose");
const path = require('path');
const entryRouter = require('./routes/entry');
const Entry = require('./models/entry');
const add_foodRouter = require('./routes/add_food');
const Add_Food = require('./models/add_food');
var methodOverride = require('method-override');


var MongoClient = require('mongodb').MongoClient;
const db = process.env.DATABASE;

app.use(express.urlencoded({extended:false}));
app.use('/calories',entryRouter);
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
});

// app.get('/add_food', async (req, res) => {
//   const add_foods = await Add_Food.find().sort({ date: 'desc' });
//   res.render('entries/add_foodindex', { add_foods: add_foods })
// })


var port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server started on port ${port}.`);
});
