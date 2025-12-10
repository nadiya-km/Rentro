const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./src/config/db.js');
const cors = require('cors');

dotenv.config();
const app = express();
const port = process.env.PORT || 3001;

//middleware
app.use(express.json());
app.use(cors());

//connect to db
connectDB();

//start server
app.listen(port, () => {
	console.log(`Server running on Port ${port}`);
});
