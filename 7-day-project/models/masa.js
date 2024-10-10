const mongoose = require("mongoose");

const MasaSchema = new mongoose.Schema({
numarasi:{type:String},
kapasite:{type:Number},
musteriler:{type:Array}
});

const Masa = mongoose.model("Masa", MasaSchema);

module.exports = Masa;
