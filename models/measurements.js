const mongoose = require("mongoose");

const MeasurementSchema = new mongoose.Schema(
    {
        weight: {
            type: Number,
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
        bmi: {
            type: String,
        },
        totalBodyWater: {
            type: String,
        },
        dryLeanMass: {
            type: String,
        },
        bodyFatMass: {
            type: String,
        },
        skeletalMuscleMass: {
            type: String,
        },
        percentBodyMass: {
            type: String,
        },
        slaLeftArmLb: {
            type: String,
        },
        slaRightArmLb: {
            type: String,
        },
        slaLeftLegLb: {
            type: String,
        },
        slaRightLegLb: {
            type: String,
        },
        slaTrunkLb: {
            type: String,
        },
        slaLeftArmPercent: {
            type: String,
        },
        slaRightArmPercent: {
            type: String,
        },
        slaLeftLegPercent: {
            type: String,
        },
        slaRightLegPercent: {
            type: String,
        },
        slaTrunkPercent: {
            type: String,
        },
        leanBodyMass: {
            type: String,
        },
        bodyFatMass: {
            type: String,
        },
        impedanceLeftArmTwenty: {
            type: String,
        },
        impedanceRightArmTwenty: {
            type: String,
        },
        impedanceLeftLegTwenty: {
            type: String,
        },
        impedanceRightLegTwenty: {
            type: String,
        },
        impedanceTrunkTwenty: {
            type: String,
        },
        impedanceLeftArmHundred: {
            type: String,
        },
        impedanceRightArmHundred: {
            type: String,
        },
        impedanceLeftLegHundred: {
            type: String,
        },
        impedanceRightLegHundred: {
            type: String,
        },
        impedanceTrunkHundred: {
            type: String,
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