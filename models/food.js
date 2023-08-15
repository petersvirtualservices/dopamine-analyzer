const mongoose = require("mongoose");

const FoodSchema = new mongoose.Schema(
  {
    food: {
      type: String,
    },
    water: {
      type: String,
    },
    ounces: {
      type: Number,
    },
    happy_begin: {
      type: String,
    },
    sad_begin: {
      type: String,
    },
    mad_begin: {
      type: String,
    },
    scared_begin: {
      type: String,
    },
    excited_begin: {
      type: String,
    },
    apathy_begin: {
      type: String,
    },
    happy_done: {
      type: String,
    },
    sad_done: {
      type: String,
    },
    mad_done: {
      type: String,
    },
    scared_done: {
      type: String,
    },
    excited_done: {
      type: String,
    },
    apathy_done: {
      type: String,
    },
    date: {
      type: String,
      default: Date.now()
    },
    note: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Food", FoodSchema);