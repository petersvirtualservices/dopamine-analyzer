const mongoose = require("mongoose");

const FoodSchema = new mongoose.Schema(
  {
    food: {
      type: String,
    },
    ounces: {
      type: Number,
    },
    happy: {
      type: String,
    },
    sad: {
      type: String,
    },
    mad: {
      type: String,
    },
    excited: {
      type: String,
    },
    apathy: {
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