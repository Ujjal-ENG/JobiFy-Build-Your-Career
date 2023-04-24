/* eslint-disable consistent-return */
/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */

import jobModel from '../models/jobModel.js';

// create job
export const createJob = async (req, res, next) => {
    const { company, position } = req.body;
    if (!company || !position) {
        return next('Please Provide all Fields');
    }

    req.body.createdBy = req.user.userId;
    const job = await jobModel.create(req.body);
    res.status(201).json({
        message: 'Jobs Created Successfully',
        success: true,
        job,
    });
};
// get job
export const getAllJobs = async (req, res, next) => {
    const jobs = await jobModel.find({ createdBy: req.user.userId });
    if (!jobs) {
        return next('You do not created any job yet!!!');
    }
    res.status(200).json({
        message: 'Successfully get the all posted Jobs',
        success: true,
        results: jobs.length,
        jobs,
    });
};
