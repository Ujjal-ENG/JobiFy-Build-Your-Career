/* eslint-disable comma-dangle */
/* eslint-disable import/no-extraneous-dependencies */
import mongoose from 'mongoose';
import validator from 'validator';
// Schema

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Name is required'],
        },
        email: {
            type: String,
            required: [true, 'Email is required'],
            unique: true,
            validator: validator.isEmail,
        },
        password: {
            type: String,
            required: [true, 'Password is required'],
        },
        location: {
            type: String,
            default: 'Bangladesh',
        },
    },
    { timestamps: true }
);

export default mongoose.model('User', userSchema);
