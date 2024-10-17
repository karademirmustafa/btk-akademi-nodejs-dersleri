const Car = require("../models/carModel");

const getCarById = async (id) => {
  const car = await Car.findById(id);
  return car;
};

const getAllCar = async () => {
  const allCar = await Car.find();
  return allCar;
};

const createCar = async (body) => {
  const newCar = await Car.create(body);
  return newCar;
};
const updateCar = async (id, body) => {
  const updatedCar = await Car.findByIdAndUpdate(id, body, { new: true });
  return updatedCar;
};
const deleteCar =async (id) => {
    const deletedCar = await Car.findByIdAndDelete(id);
    return deletedCar;
}

module.exports = {
  getCarById,
  getAllCar,
  createCar,
  updateCar,
  deleteCar
};
