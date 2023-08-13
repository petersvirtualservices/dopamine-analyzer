const express = require('express');
const app = express();
const mongoose = require("mongoose");
const path = require('path');
const entriesRouter = require('./routes/entries');
const Entries = require('./models/food');
var methodOverride = require('method-override');


var MongoClient = require('mongodb').MongoClient;
const db = "mongodb+srv://cpeters:FunnyG0y@analysis.roepm1h.mongodb.net/?retryWrites=true&w=majority";

app.use(express.urlencoded({extended:false}));
app.use('/entries',entriesRouter);
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

const Food = require("./models/food");

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
  const entries = await Entries.find().sort({ date: 'desc' })
  res.render('entries/index', { entries: entries })
})

app.listen(8000, () => {
    console.log("server started on port 8000");
});