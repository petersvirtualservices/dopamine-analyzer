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
        emotionEnergy_Head: {
            type: String,
        }, 
        emotionEnergy_ShoulderTorsoBack: {
            type: String,
        },
        emotionEnergy_Arm: {
            type: String,
        },
        emotionEnergy_StomachButtGenital: {
            type: String,
        },
        emotionEnergy_Leg: {
            type: String,
        },
        bodyRelease: {
            type: String,
        },
        activityminutes: {
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

module.exports = mongoose.model("entrie", EntrySchema);