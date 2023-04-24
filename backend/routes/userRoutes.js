/* eslint-disable import/extensions */
import express from 'express';
import { getAllUsers, registerUser } from '../controllers/userControllers.js';

const router = express.Router();

// get all users
router.get('/all-users', getAllUsers);

// register user
router.post('/register-user', registerUser);

export default router;
