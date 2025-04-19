import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons'
import React from 'react';

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center max-w-[75%] mx-auto mt-6'>
            <div>
                <h1><span className='text-[#003EA4] text-3xl'>Auction</span><span className='text-[#FFD337] font-bold text-3xl'>Gallery</span></h1>
            </div>
            <div>
                <ul className='flex gap-[4.8rem] text-[1.3rem]'>
                    <li>Home</li>
                    <li>Auctions</li>
                    <li>Categories</li>
                    <li>How To Works</li>
                </ul>
            </div>
            <div className='flex gap-5'>
                <div className='bg-[#EBF0F5] text-center p-1 rounded-full w-[2rem]'>
                    <FontAwesomeIcon icon={faBell}></FontAwesomeIcon>
                </div>
                <div>
                    <img className='w-[2rem]' src="/login.png" alt="" />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
