/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable comma-dangle */
/* eslint-disable no-underscore-dangle */
/* eslint-disable consistent-return */
/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */

import mongoose from 'mongoose';
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
    const {
 status, workType, search, sort 
} = req.query;

    // condition for searching filters
    const queryObject = {
        createdBy: req.user.userId,
    };

    // search query code
    if (search) {
        queryObject.position = { $regex: search, $options: 'i' };
    }

    // logic filters
    if (status && status !== 'all') {
        queryObject.status = status;
    }

    // sercing for worktypes
    if (workType && workType !== 'all') {
        queryObject.workType = workType;
    }
    let queryResults = jobModel.find(queryObject);

    // sorting performed
    if (sort === 'latest') {
        queryResults = queryResults.sort('-createdAt');
    }
    if (sort === 'oldest') {
        queryResults = queryResults.sort('createdAt');
    }

    if (sort === 'a-z') {
        queryResults = queryResults.sort('position');
    }

    if (sort === 'A-Z') {
        queryResults = queryResults.sort('-position');
    }

    // pagination
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    
    queryResults = queryResults.skip(skip).limit(limit);

    // jobs count
    const totalJobs = await jobModel.countDocuments(queryResults);
    const numOfPage = Math.ceil(totalJobs / limit);

    const jobs = await queryResults;

    // const jobs = await jobModel.find({ createdBy: req.user.userId });
    if (!jobs) {
        return next('You do not created any job yet!!!');
    }
    res.status(200).json({
        message: 'Successfully get the all posted Jobs',
        success: true,
        results: jobs.length,
        jobs,
        numOfPage
    });
};
// update job
export const updateJobById = async (req, res, next) => {
    const { company, position } = req.body;
    // check simple validation
    if (!company || !position) {
        return next('Please Provide all field');
    }
    const job = await jobModel.findOne({ _id: req.params.id });
    if (!job) {
        return next('Sorry this Job is not found!!');
    }
    if (req.user.userId !== job.createdBy.toString()) {
        return next('Your not authorize to update this job');
    }
    const updateJob = await jobModel.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });
    res.status(200).json({
        message: 'Updated Successfully',
        success: true,
        updateJob,
    });
};
// delete job
export const deleteJobById = async (req, res, next) => {
    const job = await jobModel.findOne({ _id: req.params.id });

    if (!job) {
        return next('This job is not exist in our Database');
    }
    console.log(req.user.userId, job.createdBy.toString());
    if (req.user.userId !== job.createdBy.toString()) {
        return next('You are not authrized to delete this job');
    }

    await jobModel.findByIdAndDelete(req.params.id);
    res.status(200).json({
        message: 'Job is Successfully deleted',
        success: true,
    });
};
// get filter jobs
export const getFilterJobs = async (req, res, next) => {
    const filterJob = await jobModel.aggregate([
        // serach by user jobs
        {
            $match: {
                createdBy: new mongoose.Types.ObjectId(req.user.userId),
            },
        },
        {
            $group: {
                _id: '$status',
                count: { $sum: 1 },
            },
        },
    ]);
    if (!filterJob) {
        return next('There is no filtered job avilable!!');
    }

    // check monthly yearly stats
    const monthlyApplication = await jobModel.aggregate([
        {
            $match: {
                createdBy: new mongoose.Types.ObjectId(req.user.userId),
            },
        },
        {
            $group: {
                _id: {
                    year: { $year: '$createdAt' },
                    month: { $month: '$createdAt' },
                },
                count: {
                    $sum: 1,
                },
            },
        },
    ]);
    res.status(200).json({
        message: 'Successfully get the filtered jobs',
        success: true,
        results: filterJob.length,
        filterJob,
        monthlyApplication,
    });
};
