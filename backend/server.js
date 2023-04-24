/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */
// imports
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';
import connectDB from './config/connectDB.js';
import userRouter from './routes/userRoutes.js';
// configure dotenv
dotenv.config();

// db connection
connectDB();

// rest object
const app = express();

// middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// default route
app.use('/api/v1/user', userRouter);
// server listen port

const PORT = process.env.PORT || 5000;

// listen
app.listen(PORT, () => {
    console.log('Server is listen at 8080 PORT');
});
