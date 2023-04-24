/* eslint-disable import/extensions */
import express from 'express';
import { createJob } from '../controllers/jobControllers.js';
import { useAuth } from '../middlewares/authMiddlewares.js';

const router = express.Router();
// create Job
router.post('/create-job', useAuth, createJob);

export default router;
