/* eslint-disable react/jsx-indent */
import React from 'react';
import { Outlet } from 'react-router-dom';
import Menu from './Menu/Menu';

function Dashboard() {
    return (
        <div className="grid grid-cols-12 justify-items-center">
            <div className="col-span-3 ">
                <Menu />
            </div>
            <div className="col-span-9">
                <h1>Dashboard Page</h1>
                <Outlet />
            </div>
        </div>
    );
}

export default Dashboard;
