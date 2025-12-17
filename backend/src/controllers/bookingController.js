const Booking = require("../models/Booking");
const Car = require("../models/Car");



exports.createBooking = async (req, res) => {
  try {
    const {
      carId,
      pickupLocation,
      dropLocation,
      pickupDateTime,
      dropDateTime,
    } = req.body;

    // 👤 Logged-in user from JWT
    const userId = req.user.id; //  FIXED

    const car = await Car.findById(carId);
    if (!car) return res.status(404).json({ message: "Car not found" });

    // 🧮 Calculate days
    const start = new Date(pickupDateTime);
    const end = new Date(dropDateTime);

    if (isNaN(start) || isNaN(end) || end <= start) {
      return res.status(400).json({ message: "Invalid dates" });
    }

    const totalDays = Math.ceil(
      (end - start) / (1000 * 60 * 60 * 24)
    );

    // 💰 Calculate revenue
    const totalAmount = totalDays * Number(car.price);

    const booking = await Booking.create({
      user: userId,
      car: carId,
      pickupLocation,
      dropLocation,
      pickupDateTime,
      dropDateTime,
      totalDays,
      pricePerDay: car.price,
      totalAmount,
    });

    res.status(201).json({
      success: true,
      booking,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find()
      .populate("user", "name email") // user details
      .populate("car", "name price")  // car details
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      bookings,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
