exports.createBooking = async (req, res) => {
  const {
    carId,
    pickupDate,
    dropDate,
    bankAccount,
    ifsc,
  } = req.body;

  const car = await Car.findById(carId);

  const days =
    Math.ceil((new Date(dropDate) - new Date(pickupDate)) / 86400000) || 1;

  const totalAmount = days * car.price;

  const booking = await Booking.create({
    car: carId,
    user: req.user._id,
    pickupDate,
    dropDate,
    totalDays: days,
    totalAmount,
    payment: {
      method: "Bank Transfer",
      bankAccount,
      ifsc,
    },
  });

  // mark car booked
  car.status = "Booked";
  await car.save();

  res.status(201).json({ success: true, booking });
};
