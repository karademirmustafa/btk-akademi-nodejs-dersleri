const mongoose = require("mongoose");

const OgretmenSchema = new mongoose.Schema({
    adi: { type: String },
    alani: { type: String },
    tel_no: { type: String },
  });

const Ogretmen = mongoose.model("Ogretmen", OgretmenSchema);


module.exports=Ogretmen;