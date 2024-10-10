const mongoose = require("mongoose");

const RestaurantSchema = new mongoose.Schema({
  adi: { type: String },
  adres: { type: String },
  kategori: { type: String },
});

const Restaurant = mongoose.model("Restaurant", RestaurantSchema);

module.exports = Restaurant;
