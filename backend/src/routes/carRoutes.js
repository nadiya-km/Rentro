const express = require("express");
const { addCar,getRecentCars, getAllCars , deleteCar, updateCar} = require("../controllers/carController");

const router = express.Router();

router.get("/", getAllCars); // GET ALL CARS

router.post("/add", addCar);

router.get("/recent", getRecentCars); // ⭐ ADD THIS

router.delete("/:id", deleteCar);

router.put("/:id", updateCar);

module.exports = router;
