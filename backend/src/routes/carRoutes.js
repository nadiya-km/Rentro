const express = require("express");
const { addCar,getRecentCars, getAllCars , deleteCar, updateCar, getSingleCar , getCarStats} = require("../controllers/carController");

const router = express.Router();
// STATIC ROUTES FIRST
router.get("/stats", getCarStats);
router.get("/recent", getRecentCars);

//  COLLECTION ROUTE
router.get("/", getAllCars);

//  DYNAMIC ROUTES LAST
router.get("/:id", getSingleCar);
router.put("/:id", updateCar);
router.delete("/:id", deleteCar);

router.post("/add", addCar);
module.exports = router;
