/* eslint-disable import/no-extraneous-dependencies */
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

export const registerUser = async (req, res, next) => {
    // empty field validation
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return next('Please fill up the all fields');
    }

    // check existing user
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
        return next('Email is already registered');
    }

    // encrypt the password before registering
    const hassPass = await bcrypt.hash(password, 10);

    const newUser = await userModel.create({
        name: req.body.name,
        email: req.body.email,
        password: hassPass,
    });

    //  set json web token
    const token = newUser.createJWT();

    res.status(201).json({
        message: 'User is Successfully Registered',
        success: true,
        user: {
            name: newUser.name,
            email: newUser.email,
            location: newUser.location,
        },
        token,
    });
};

// login user

export const loginUser = async (req, res, next) => {};
