import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
    <div className='bg-green-500 drop-shadow text-xl font-bold-800 py-4 flex flex-col  capitalize text-white lg:flex lg:px-16  lg:flex-row lg:items-center '>
            {/* navigation part */}
           <NavLink className='px-5 hover:border p-2  rounded-md' to='/'>Home</NavLink>
           <NavLink className='px-5 hover:border p-2  rounded-md' to='/service'>Our Services</NavLink>
           <NavLink className='px-5 hover:border p-2  rounded-md' to='/about'>About Us</NavLink>
           <NavLink className='px-5 hover:border p-2  rounded-md' to='/contact'>Contact Us</NavLink>
        </div>
        </div>
    
    );
};

export default Header;