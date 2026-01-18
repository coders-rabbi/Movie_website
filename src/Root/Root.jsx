import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../shared/Navbar/NavBar';

const Root = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
        </div>
    );
};

export default Root;