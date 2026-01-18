import React from 'react';
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa6';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <div className='flex justify-between items-center px-2'>
            <h3>Copyright © 2023 - All right reserved</h3>
            <div>
                <Link>About us</Link>
                <Link>Privacy policy</Link>
            </div>
            <div className='flex gap-2'>
                <FaTwitter />
                <FaYoutube />
                <FaFacebook />
            </div>
        </div>
    );
};

export default Footer;