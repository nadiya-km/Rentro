const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./src/config/db.js');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');

const authRoutes = require('./src/routes/authRoutes.js');
const adminRoutes = require('./src/routes/admin');
const carRoutes = require("./src/routes/carRoutes");

const path = require("path");

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(express.json());
app.use(cookieParser());


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
    tempFileDir: path.join(__dirname, "tmp"),
    createParentPath: true,
  })
);

// connect DB
connectDB();

// routes
app.use('/api/auth', authRoutes);

app.use('/api/admin', adminRoutes);


app.use("/api/cars", carRoutes);

// server
app.listen(port, () => {
	console.log(`Server running on Port ${port}`);
});
