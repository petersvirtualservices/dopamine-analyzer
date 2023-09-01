const mongoose = require("mongoose");

const FoodSchema = new mongoose.Schema(
  {
    date: {
      type: String,
      default: Date.now()
    },
    food: {
      type: String,
    },
    water: {
      type: String,
    },
    ounces: {
      type: Number,
    },    
    note: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Food", FoodSchema);