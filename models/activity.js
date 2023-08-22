const mongoose = require("mongoose");

const ActivitySchema = new mongoose.Schema(
    {
        date: {
            type: String,
            default: Date.now()
        },
        activity: {
            type: String,
        },
        activityminutes: {
            type: Number,
        },
        sun: {
            type: Number,
        },
        sleep: {
            type: Number,
        },
        social: {
            type: Number,
        },
        socialMedia: {
            type: Number,
        },
        walking: {
            type: Number,
        },
        happy_begin: {
            type: String,
        },
        happy_done: {
            type: String,
        },
        sad_begin: {
            type: String,
        },
        sad_done: {
            type: String,
        },
        mad_begin: {
            type: String,
        },
        mad_done: {
            type: String,
        },
        scared_begin: {
            type: String,
        },
        scared_done: {
            type: String,
        },
        excited_begin: {
            type: String,
        },
        excited_done: {
            type: String,
        },
        apathy_begin: {
            type: String,
        },
        apathy_done: {
            type: String,
        },
        determined_done: {
            type: String,
        },
        determined_begin: {
            type: String,
        },
        satisfied_done: {
            type: String,
        },
        satisfied_begin: {
            type: String,
        },
        note: {
            type: String,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("activitie", ActivitySchema);