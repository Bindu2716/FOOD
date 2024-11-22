import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import bodyParser from 'body-parser';
import orderRoutes from './BE/src/router/orderRouter.js';  // Import the order routes
import userRoutes from './BE/src/router/userLogin.router.js';  // Import the user routes

import connectToMongoDB from './BE/src/config/dbConnect.js';  // MongoDB connection utility

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

// CORS configuration
const corsOptions = {
    origin: process.env.FRONTEND_URL,  // Replace with your frontend URL
    credentials: true,  // Allow cookies to be sent
};

app.use(cors(corsOptions));
app.use(express.json());  // Body parser for JSON requests
app.use(cookieParser());  // Cookie parser for handling cookies

// Use the routes
app.use('/api/orders', orderRoutes);  // Order routes
app.use('/api/user', userRoutes);  // User authentication routes
app.get('/api/health', (req, res) => {
    res.status(200).json({ message: 'Server is healthy' });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ success: false, message: 'Internal Server Error', error: err.message });
});

// Start the server and connect to MongoDB
app.listen(PORT, () => {
    connectToMongoDB();  // Connect to MongoDB
    console.log(`Server is running on port ${PORT}`);
});
