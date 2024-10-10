const {getAllOgretmen,getByIdOgretmen,createOgretmen} = require("../services/ogretmen");
const fetchAllOgretmen = async (req, res, next) => {
  const ogretmenler = await getAllOgretmen();
  res.status(200).json(ogretmenler);
};

const fetchByIdOgretmen = async (req,res,next) => {
    const id = req.params.ogretmen_id; 

    const ogretmen = await getByIdOgretmen(id);
    res.status(200).json(ogretmen);
}
const insertOgretmen = async (req,res,next) => {
    const body = req.body;
    const yeniOgretmen = await createOgretmen(body)
    res.status(200).json(yeniOgretmen);
}
module.exports ={
    fetchAllOgretmen,
    fetchByIdOgretmen,
    insertOgretmen
}