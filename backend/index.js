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
const bookingRoutes = require('./src/routes/booking'); 

const path = require('path');

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(express.json());
app.use(cookieParser());

//cors
// const allowedOrigins = [
// 	process.env.FRONTEND_URL_LOCAL, // local dev
// 	process.env.FRONTEND_URL_PROD, // production
// ];
// cors

// app.use(
// 	cors({
// 		origin: function (origin, callback) {
// 			if (!origin) return callback(null, true);
// 			if (!allowedOrigins.includes(origin)) {
// 				return callback(new Error('CORS policy does not allow access from this origin'), false);
// 			}
// 			return callback(null, true);
// 		},
// 		credentials: true, // allow cookies/auth headers
// 	})
// );
// ended

// cors
app.use(
	cors({
		origin: 'http://localhost:5173',
		credentials: true, // allow cookies / token in headers
	})
);
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
