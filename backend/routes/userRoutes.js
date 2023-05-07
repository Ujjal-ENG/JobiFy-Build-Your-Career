/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prettier/prettier */
/* eslint-disable import/extensions */
import express from 'express';
import rateLimit from 'express-rate-limit';
import {
  getAllUsers,
  getUser,
  loginUser,
  registerUser,
  updateUser,
} from '../controllers/userControllers.js';
import { useAuth } from '../middlewares/authMiddlewares.js';

// ip limiter
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
});
const router = express.Router();

// get all users
router.get('/all-users', useAuth, getAllUsers);

// register user
router.post('/register-user', limiter, registerUser);

// login user
router.post('/login-user', limiter, loginUser);

// update user
router.patch('/update-user/:id', useAuth, updateUser);

// get User
router.post('/get-user', useAuth, getUser);

export default router;
