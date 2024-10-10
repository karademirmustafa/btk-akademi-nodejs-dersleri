const mongoose = require("mongoose");

const SiparisSchema = new mongoose.Schema({
siparis_veren_musteri:{type:String},
siparis_verilen_menuler:{type:Array},
restaurant_adi:{type:String}});

const Masa = mongoose.model("Masa", SiparisSchema);

module.exports = Masa;
