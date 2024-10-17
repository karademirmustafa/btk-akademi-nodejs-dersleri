const mongoose = require("mongoose");

const CarSchema =new  mongoose.Schema(
    {
        plate_no:String,
        color:String,
        price:Number
    }
   
)
module.exports= mongoose.model("Car",CarSchema);