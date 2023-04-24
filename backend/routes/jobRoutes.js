/* eslint-disable prettier/prettier */
/* eslint-disable import/extensions */
import express from 'express';
import {
  createJob,
  deleteJobById,
  getAllJobs,
  getFilterJobs,
  updateJobById,
} from '../controllers/jobControllers.js';
import { useAuth } from '../middlewares/authMiddlewares.js';

const router = express.Router();

// create Job
router.post('/create-job', useAuth, createJob);

// get Job
router.get('/get-jobs', useAuth, getAllJobs);

// update job
router.patch('/update-job/:id', useAuth, updateJobById);

// delete job
router.delete('/delete-job/:id', useAuth, deleteJobById);

// job status filter
router.get('/get-filter-job', useAuth, getFilterJobs);
export default router;
