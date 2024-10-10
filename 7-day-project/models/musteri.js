const mongoose = require("mongoose");

const MusteriSchema = new mongoose.Schema({
   adi:{type:String},
   para:{type:Number}
  });

const Musteri = mongoose.model("Musteri", MusteriSchema);


module.exports=Musteri;