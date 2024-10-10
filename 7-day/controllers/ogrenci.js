const {getAllOgrenci,getByIdOgrenci} = require("../services/ogrenci");
const fetchAllOgrenci = async (req,res,next) => {
    const ogrenciler = await getAllOgrenci();
    return res.status(200).json(ogrenciler);
}

module.exports={
    fetchAllOgrenci
}
