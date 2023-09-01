const mongoose = require("mongoose");

const EnergySchema = new mongoose.Schema(
    {
        date: {
            type: String,
            default: Date.now()
        },
        positive: {
            type: Number,
        },
        negative: {
            type: Number,
        },
        note: {
            type: String,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("energie", EnergySchema);