import React from 'react';
import { Link } from 'react-router';
import logo from "../../assets/logo/logo.png"

const NavBar = () => {
    const NaveItems = (
        <>
            <Link to="/"><li>Home</li></Link>
            <Link to="/"><li>Movies</li></Link>
            <Link to="/"><li>TV Show</li></Link>
        </>
    )
    return (
        <div>
            <div className="navbar bg-[#090833] shadow-sm text-white py-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {NaveItems}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">
                        <img className='w-20 h-16' src={logo} alt="" />
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-2.5">
                        {NaveItems}
                    </ul>
                </div>
                <div className="navbar-end text-black">
                    <label className="input">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input type="search" required placeholder="Search" />
                    </label>
                </div>
            </div>
        </div>
    );
};

export default NavBar;