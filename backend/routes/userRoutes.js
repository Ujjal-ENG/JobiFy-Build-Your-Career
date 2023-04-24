/* eslint-disable import/extensions */
import express from 'express';
import { getAllUsers, loginUser, registerUser } from '../controllers/userControllers.js';
import { useAuth } from '../middlewares/authMiddlewares.js';

const router = express.Router();

// get all users
router.get('/all-users', getAllUsers);

// register user
router.post('/register-user', registerUser);

// login user
router.post('/login-user', useAuth, loginUser);

export default router;
