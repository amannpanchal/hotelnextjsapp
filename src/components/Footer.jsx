'use client'
import React from 'react';

const Footer = () => {
    // List of city names
    const cities = [
        "Manali", "Delhi", "Mumbai", "Goa", "Jaipur",
        "Agra", "Bangalore", "Kolkata", "Chennai",
        "Hyderabad", "Pune", "Shimla", "Darjeeling",
        "Udaipur", "Varanasi"
    ];

    return (
        <footer
            className='
            w-[100vw]
            bg-[black]
            absolute
            left-0
            py-[30px]
            text-[white]
            '
        
        
        >
            {/* Footer links */}
            <nav className='footerItems'  >
                {cities.map(city => (
                    <a  className='text-center mt-[8px]' key={city} href={`#`}>Hotels in {city}</a>
                ))}
            </nav>
            {/* Copyright text */}
            <p
                
                className='w-full text-center  mt-[30px]'
            >&copy; {new Date().getFullYear()} You Hotels. All rights reserved.</p>
        </footer>
    );
}

export default Footer;
