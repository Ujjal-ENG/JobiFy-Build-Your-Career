/* eslint-disable import/extensions */
import express from 'express';
import { getAllUsers } from '../controllers/userControllers.js';

const router = express.Router();

// get all users
router.get('/all-users', getAllUsers);

export default router;
