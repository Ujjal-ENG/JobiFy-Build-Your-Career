/* eslint-disable comma-dangle */
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

export const loginUser = async (req, res, next) => {
    const { email, password } = req.body;

    // validation
    if (!email || !password) {
        next('Please Provided all the fileds!!');
    }

    // check register or not user
    const isExistUser = await userModel.findOne({ email });
    if (!isExistUser) {
        return next('User not Registered, Please Register first!!');
    }

    // comapre password
    const isMatch = await isExistUser.comparePassword(password);
    if (!isMatch) {
        return next('Invalid Username or password');
    }

    const token = isExistUser.createJWT();

    res.status(200).json({
        message: 'Login Successfully',
        success: true,
        isExistUser,
        token,
    });
};
// update user
export const updateUser = async (req, res, next) => {
    const { name, email, location } = req.body;
    // check validation
    if (!name || !email || !location) {
        return next('Please provide all field');
    }
    // user update
    const user = await userModel.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.name,
            email: req.body.email,
            location: req.body.location,
        },
        {
            new: true,
        }
    );

    const token = user.createJWT();

    res.status(200).json({
        message: 'Update Successfully User!!',
        success: true,
        user,
        token,
    });
};
