const Ogretmen = require("../models/ogretmen");
const getAllOgretmen = async () => {
  const ogretmenler = await Ogretmen.find();
  return ogretmenler;
};
const getByIdOgretmen = async (id) => {
  const ogretmen = await Ogretmen.findById(id);
  return ogretmen;
};

const createOgretmen = async (body) => {

    const yeniOgretmen = await Ogretmen.create(body);
    return yeniOgretmen;
}
module.exports = {
    getAllOgretmen,
  getByIdOgretmen,
  createOgretmen
};
