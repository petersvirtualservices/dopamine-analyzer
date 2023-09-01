const mongoose = require("mongoose");

const MeasurementSchema = new mongoose.Schema(
    {
        weight: {
            type: String,
        },
        bloodsugar: {
            type: Number,
        },
        systolicbp: {
            type: Number,
        },
        dystolicbp: {
            type: Number,
        },
        oxygen: {
            type: Number,
        },
        pulse: {
            type: Number,
        },
        hip: {
            type: Number,
        },
        waist: {
            type: Number,
        },
        chest: {
            type: Number,
        },        
        date: {
            type: String,
        },
        note: {
            type: String,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Measurement", MeasurementSchema);