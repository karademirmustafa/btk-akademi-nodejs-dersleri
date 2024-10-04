const mongoose = require("mongoose");

const OgrenciSchema = new mongoose.Schema({
  adi: { type: String },
  numarasi: { type: Number },
  telefon_numarasi: { type: String },
});

const Ogrenci = mongoose.model("Ogrenci", OgrenciSchema);


module.exports=Ogrenci;