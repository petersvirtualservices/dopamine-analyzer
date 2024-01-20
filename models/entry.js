const mongoose = require("mongoose");

const EntrySchema = new mongoose.Schema(
    {
        date: {
            type: String,
            default: Date.now()
        },
        measurementType: {
            type: String,
        },
        measurementAmount: {
            type: String,
        },
        excretion: {
            type: String,
        }, 
        bodySignals: {
            type: String,
        }, 
        sleep: {
            type: String,
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
        note: {
            type: String,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("01192024entrie", EntrySchema);