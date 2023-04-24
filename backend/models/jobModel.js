/* eslint-disable prettier/prettier */
import mongoose from 'mongoose';

const JobSchema = new mongoose.Schema(
    {
        company: {
            type: String,
            required: [true, 'Company name is Required'],
        },
        position: {
            type: String,
            required: [true, 'Job Position is Required'],
            maxlength: 100,
        },
        status: {
            type: String,
            enum: ['pending', 'reject', 'interview'],
            default: 'pending',
        },
        workType: {
            type: String,
            enum: ['full-time', 'part-time', 'internship', 'contractual'],
            default: 'full-time',
        },
        workLocation: {
            type: String,
            default: 'Dhaka',
        },
        createdBy: {
            type: mongoose.Types.ObjectId,
            ref: 'User',
        },
    },
    { timestamps: true },
);

export default mongoose.model('Job', JobSchema);
