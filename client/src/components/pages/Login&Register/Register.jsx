/* eslint-disable comma-dangle */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-closing-bracket-location */
import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { hideLoading, showLoading } from '../../../redux/features/alertSlice';
import FormInput from '../../shared/FormInput';

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        location: ''
    });
    const { name, email, password, location } = formData;
    const handleChange = (e) => {
        setFormData((ps) => ({
            ...ps,
            [e.target.id]: e.target.value
        }));
    };
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            dispatch(showLoading());
            const { data } = await axios.post('api/v1/user/register-user', {
                name,
                email,
                password,
                location
            });
            if (data.success) {
                console.log(data);
                toast.success('Registered Successfull!!!');
                navigate('/dashboard');
            }
            dispatch(hideLoading());
        } catch (error) {
            dispatch(hideLoading());
            console.log(error);
            toast.error('Invalid Register Information, Please try again later!!');
        }
    };

    return (
        <div>
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <Link to="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
                        Job Tracking App
                    </Link>
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Create and account</h1>
                            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                                <FormInput id="name" labelName="Your Name" placeholder="Jom Dow" type="text" value={formData.name} change={handleChange} />

                                <FormInput id="email" labelName="Email" placeholder="name@company.com" type="email" value={formData.email} change={handleChange} />
                                <FormInput id="password" labelName="Password" placeholder="••••••••" type="password" value={formData.password} change={handleChange} />

                                <FormInput id="location" labelName="Location" placeholder="Dhaka" type="text" value={formData.location} change={handleChange} />

                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input
                                            id="terms"
                                            aria-describedby="terms"
                                            type="checkbox"
                                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                            required
                                        />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="terms" className="font-bold  text-blue-500 dark:text-gray-300">
                                            I accept the Terms and Conditions
                                        </label>
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 w-full mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
                                    Create an account
                                </button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Already have an account?
                                    <Link to="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                                        Login here
                                    </Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Register;
