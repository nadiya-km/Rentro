const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./src/config/db.js');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');

const userRoutes = require('./src/routes/userRoutes.js');
const adminRoutes = require('./src/routes/admin');
const carRoutes = require('./src/routes/carRoutes');
const adminRecentUser = require('./src/routes/admin');
// const bookingRoutes =require("./src")
const bookingRoutes = require('./src/routes/booking'); // 👈 ADD THIS

const path = require('path');

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(express.json());
app.use(cookieParser());

// CORS Setup
// Allow requests from both local dev and deployed frontend
const allowedOrigins = [
	'http://localhost:5173', // local Vue dev
	process.env.FRONTEND_URL, // deployed frontend URL
];

app.use(
	cors({
		origin: function (origin, callback) {
			// allow requests with no origin (like Postman)
			if (!origin) return callback(null, true);
			if (allowedOrigins.indexOf(origin) === -1) {
				const msg =
					'The CORS policy for this site does not allow access from the specified Origin.';
				return callback(new Error(msg), false);
			}
			return callback(null, true);
		},
		credentials: true, // allow cookies / auth headers
	})
);
// ended

app.use(
	fileUpload({
		useTempFiles: true,
		tempFileDir: path.join(__dirname, 'tmp'),
		createParentPath: true,
	})
);

// connect DB
connectDB();

app.use('/api/bookings', bookingRoutes);
// routes
app.use('/api/user', userRoutes);

app.use('/api/admin', adminRoutes);

app.use('/api/cars', carRoutes);

app.use('/api/admin', adminRecentUser);
// 👈 ADD THIS

// server
app.listen(port, () => {
	console.log(`Server running on Port ${port}`);
});
