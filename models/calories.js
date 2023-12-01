const mongoose = require("mongoose");

const CalorieSchema = new mongoose.Schema(
    {
        date: {
            type: String,
            default: Date.now()
        },
        food: {
            type: String,
        },
        foodLength: {
            type: String,
        },
        water: {
            type: String,
        },
        servings: {
            type: String,
        },
        activityminutes: {
            type: String,
        },
        bodyRelease: {
            type: String,
        },
        sun: {
            type: String,
        },
        sleep: {
            type: String,
        },
        activity: {
            type: String,
        },
        activityIntensity: {
            type: String,
        },
        note: {
            type: String,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("calorie", CalorieSchema);