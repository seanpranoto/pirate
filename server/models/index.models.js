const mongoose = require("mongoose");
const uniquieValidator=require("mongoose-unique-validator");

const PirateSchema = new mongoose.Schema({
    name: { type: String, required: [true, "Pirate Name is required"]},
    url: { type: String, required: [true, "Image Url is required"]},
    treasures: { type: String, required: [true, "# of treasure chest is required"]},
    phrases: { type: String, required: [true, "Pirate catch phrases is required"] },
    position: { type: String, required: [true, "Crew position is required"] },
    pegLeg: { type: Boolean, required: [true] },
    eyePatch: { type: Boolean, required: [true] },
    hookHand: { type: Boolean, required: [true] }
}, { timestamps: true });

PirateSchema.plugin(uniquieValidator);

module.exports = mongoose.model("Pirate", PirateSchema);