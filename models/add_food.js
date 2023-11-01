const mongoose = require("mongoose");

const AddFoodSchema = new mongoose.Schema(
    {
        food: {
            type: String,
        },
        serving: {
            type: String,
        },
        calories: {
            type: String,
        },
        totalFat: {
            type: String,
        },
        satFat: {
            type: String,
        },
        transFat: {
            type: String,
        },
        cholesterol: {
            type: String,
        },
        sodium: {
            type: String,
        },
        carbohydrates: {
            type: String,
        },
        fiber: {
            type: String,
        },
        sugars: {
            type: String,
        },
        protein: {
            type: String,
        },
        vitD: {
            type: String,
        },
        calcium: {
            type: String,
        },
        iron: {
            type: String,
        },
        potassium: {
            type: String,
        },
        note: {
            type: String,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("add_food", AddFoodSchema);