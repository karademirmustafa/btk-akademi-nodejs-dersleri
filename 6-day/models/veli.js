const mongoose = require("mongoose");

const VeliSchema = new mongoose.Schema({
    adi: { type: String },
    ogrenci_adi: { type: String },
  });
  

  const Veli = mongoose.model("Veli", VeliSchema);


module.exports=Veli;