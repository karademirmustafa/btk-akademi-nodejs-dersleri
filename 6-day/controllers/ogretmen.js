const Ogretmen = require("../models/ogretmen");

const fetchAllOgretmen = async (req, res, next) => {
  const ogretmenler = await Ogretmen.find();
  res.status(200).json(ogretmenler);
};

const fetchByIdOgretmen = async (req,res,next) => {
    const id = req.params.ogretmen_id; 

    const ogretmen = await Ogretmen.findById(id);
    res.status(200).json(ogretmen);
}
const insertOgretmen = async (req,res,next) => {
    const body = req.body;
    const yeniOgretmen = await Ogretmen.create(body);
    res.status(200).json(yeniOgretmen);
}
module.exports ={
    fetchAllOgretmen,
    fetchByIdOgretmen,
    insertOgretmen
}