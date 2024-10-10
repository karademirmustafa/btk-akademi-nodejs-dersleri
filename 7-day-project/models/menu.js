const mongoose = require("mongoose");

const MenuSchema = new mongoose.Schema({
fiyat:{type:Number},
adi:{type:String},
icerikler:{type:Array},
restaurant_adi:{type:String}
});

const Menu = mongoose.model("Menu", MenuSchema);

module.exports = Menu;
