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
        work: {
            type: Number,
        },
        
        note: {
            type: String,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("activitie", ActivitySchema);