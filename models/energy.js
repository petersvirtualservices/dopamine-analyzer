const mongoose = require("mongoose");

const EnergySchema = new mongoose.Schema(
    {
        date: {
            type: String,
            default: Date.now()
        },
        positive: {
            type: String,
        },
        negative: {
            type: String,
        },
        strength: {
            type:String,
        },
        note: {
            type: String,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("energie", EnergySchema);