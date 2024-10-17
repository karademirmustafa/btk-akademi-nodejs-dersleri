const {getCarById,getAllCar,createCar,updateCar,deleteCar} = require("../services/carService");
// pascal case
const getCar = async (req,res) =>{
    const params = req.params;
    const car = await getCarById(params.id);

    res.status(200).json(car);
}

const fetchAllCar = async (req,res) => {
    const cars = await getAllCar();

    res.status(200).json(cars);
}
const insertCar = async (req,res) => {
    const newCar = await createCar(req.body);
    res.status(201).json(newCar);
}

const changeCar = async (req,res) => {
    const updatedCar = await updateCar(req.params.id,req.body);
    res.status(200).json(updatedCar);
}

const removeCar = async (req,res) => {
    const deletedCar = await deleteCar(req.params.id);
    res.status(200).json(deletedCar);
}
module.exports={
    getCar,
    fetchAllCar,
    insertCar,
    changeCar,
    removeCar
}