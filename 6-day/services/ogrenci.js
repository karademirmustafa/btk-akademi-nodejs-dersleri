const Ogrenci = require("../models/ogrenci");
const getAllOgrenci = async () => {
  const ogrenciler = await Ogrenci.find();
  return ogrenciler;
};
const getByIdOgrenci = async (id) => {
  const ogrenci = await Ogrenci.findById(id);
  return ogrenci;
};
module.exports = {
  getAllOgrenci,
  getByIdOgrenci,
};
