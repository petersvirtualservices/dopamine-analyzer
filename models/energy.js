const mongoose = require("mongoose");

const EnergySchema = new mongoose.Schema(
    {
        date: {
            type: String,
            default: Date.now()
        },
        feeling: {
            type: Number,
        },
        laugh: {
            type: String,
        },
        physicalEmotion: {
            type: String,
        },
        craving: {
            type: String,
        },
        note: {
            type: String,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("energie", EnergySchema);