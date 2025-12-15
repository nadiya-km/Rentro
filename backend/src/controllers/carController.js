const Car = require("../models/Car");
const cloudinary = require("../config/cloudinary");
exports.addCar = async (req, res) => {
  try {
    

    const {
      name,
      year,
      category,
      seats,
      fuel,
      transmission,
      price,
      status,
      description,
      features,
    } = req.body;

    if (!req.files || !req.files.image) {
      return res.status(400).json({ message: "Image is required" });
    }

    const imageFile = req.files.image;

    const result = await cloudinary.uploader.upload(
      imageFile.tempFilePath,
      { folder: "rentro/cars" }
    );

    const parsedFeatures = Array.isArray(features)
      ? features
      : features
      ? [features]
      : [];

    const car = await Car.create({
      name,
      year,
      category,
      seats,
      fuel,
      transmission,
      price,
      status,
      description,
      features: parsedFeatures,
      image: {
        url: result.secure_url,
        public_id: result.public_id,
      },
    });

    res.status(201).json({
      success: true,
      message: "Car added successfully",
      car,
    });
  } catch (error) {
    console.error("ADD CAR ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};

// GET recently added cars
exports.getRecentCars = async (req, res) => {
  try {
    const cars = await Car.find()
      .sort({ createdAt: -1 }) // newest first
      .limit(5);               // show only recent cars

    res.status(200).json({
      success: true,
      cars,
    });
  } catch (error) {
    console.error("GET RECENT CARS ERROR:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

//managecars

exports.getAllCars = async (req, res) => {
  try {
    const cars = await Car.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      cars,
    });
  } catch (error) {
    console.error("GET CARS ERROR:", error);
    res.status(500).json({ message: "Server error" });
  }
};


//deletecars

exports.deleteCar = async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);

    if (!car) {
      return res.status(404).json({ message: "Car not found" });
    }

    // Delete image from Cloudinary
    await cloudinary.uploader.destroy(car.image.public_id);

    // Delete car from DB
    await car.deleteOne();

    res.status(200).json({
      success: true,
      message: "Car deleted successfully",
    });
  } catch (error) {
    console.error("DELETE CAR ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};


exports.updateCar = async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);

    if (!car) {
      return res.status(404).json({ message: "Car not found" });
    }

    const {
      name,
      year,
      category,
      seats,
      fuel,
      transmission,
      price,
      status,
      description,
      features,
    } = req.body;

    // Update image if provided
    if (req.files && req.files.image) {
      await cloudinary.uploader.destroy(car.image.public_id);

      const result = await cloudinary.uploader.upload(
        req.files.image.tempFilePath,
        { folder: "rentro/cars" }
      );

      car.image = {
        url: result.secure_url,
        public_id: result.public_id,
      };
    }

    car.name = name;
    car.year = year;
    car.category = category;
    car.seats = seats;
    car.fuel = fuel;
    car.transmission = transmission;
    car.price = price;
    car.status = status;
    car.description = description;
    car.features = Array.isArray(features) ? features : [];

    await car.save();

    res.status(200).json({
      success: true,
      message: "Car updated successfully",
      car,
    });
  } catch (error) {
    console.error("UPDATE CAR ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};
