/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */
// imports
import dotenv from 'dotenv';
import express from 'express';
import connectDB from './config/connectDB.js';

// configure dotenv
dotenv.config();

// db connection
connectDB();
// rest object
const app = express();
// default route
app.get('/', (req, res) => {
    res.send('Hello There i am from default routes!!!');
});
// server listen port

const PORT = process.env.PORT || 5000;

// listen
app.listen(PORT, () => {
    console.log('Server is listen at 8080 PORT');
});
