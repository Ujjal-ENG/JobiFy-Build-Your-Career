/* eslint-disable import/extensions */
/* eslint-disable consistent-return */
/* eslint-disable import/prefer-default-export */
import bcrypt from 'bcrypt';
import userModel from '../models/userModel.js';

export const getAllUsers = (req, res) => {
    res.status(200).json({
        message: 'Get All users',
    });
};
// register user

export const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({
                message: 'Please fill up the all fields',
                success: false,
            });
        }

        // encrypt the password before registering
        const hassPass = await bcrypt.hash(password, 10);

        const newUser = await userModel.create({
            name: req.body.name,
            email: req.body.email,
            password: hassPass,
        });
        res.status(201).json({
            message: 'User is Successfully Registered',
            success: true,
            newUser,
        });
    } catch (error) {
        res.status(400).json({
            message: 'Error In Register Controller',
            success: false,
            error,
        });
    }
};
