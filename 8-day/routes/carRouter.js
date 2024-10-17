const express = require("express");
const router = express.Router();
const {
  getCar,
  fetchAllCar,
  insertCar,
  changeCar,
  removeCar,
} = require("../controllers/carController");
router.route("/").get(fetchAllCar);
router.route("/:id").get(getCar);
router.route("/").post(insertCar);
router.route('/:id').put(changeCar);
router.route('/:id').delete(removeCar);

module.exports = router;
