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
        water: {
            type: String,
        },
        servings: {
            type: String,
        },
        activityminutes: {
            type: String,
        },
        bodilyGas: {
            type: String,
        },
        deficate: {
            type: String,
        },
        sun: {
            type: String,
        },
        fatTan: {
            type: String,
        },
        sleep: {
            type: String,
        },
        social: {
            type: String,
        },
        socialMedia: {
            type: String,
        },
        selfTalk: {
            type:String,
        },
        walking: {
            type: String,
        },
        work: {
            type: String,
        },
        note: {
            type: String,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("calorie", CalorieSchema);