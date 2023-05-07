/* eslint-disable react/jsx-indent */
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';

function App() {
    return (
        <>
            <Navbar />
            <div className="mt-20">
                <Outlet />
            </div>
        </>
    );
}

export default App;
