/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-indent-props */
import React from 'react';
import { Link } from 'react-router-dom';
import BackgroundVideo from '../../assets/pexels-fauxels-3249673-1920x1080-50fps.mp4';

function Home() {
    return (
        <>
            <video autoPlay muted loop className="fixed top-0 left-0 w-full h-full object-cover z-0">
                <source src={BackgroundVideo} type="video/mp4" />
            </video>
            <div className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-60" />

            <div className="relative z-10  pt-10">
                <div className="mt-20 ml-10 h-[70vh] flex justify-start items-center">
                    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                        <div className="flex items-center mb-6 text-2xl font-semibold justify-center w-full text-gray-900 dark:text-white">
                            <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
                            Job Tracking App
                        </div>
                        <div className="flex flex-col space-y-2 pb-4 items-baseline text-gray-900 dark:text-white w-full">
                            <h3 className="text-2xl font-bold tracking-wider py-3">Bangladesh No #1 Job Seeking Plat form</h3>

                            <p className="text-gray-500">Search and Manage your Jobs with ease, free and open source job tracking application by This app</p>
                        </div>

                        <div className="flex justify-between items-center">
                            <p className=" font-bold text-amber-400">Not a User? Please Register First..</p>
                            <Link
                                to="/register"
                                type="button"
                                className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500">
                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fillRule="evenodd"
                                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span className="sr-only">Icon description</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
