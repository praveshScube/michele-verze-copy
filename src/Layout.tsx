import React from 'react'
import { Link } from "react-router-dom";

const Layout = ({ pathname}:any) => {

    return (
        <>
            <div 
                className={`w-full fixed px-8 py-6 
                    ${pathname === '/' ? 'bg-gray-400' : ''}
                    ${pathname === '/the-life' ? 'bg-red-300' : ''}
                `}
            >
                <nav className='z-50 navWrap flex flex-row justify-between items-center uppercase font-semibold'>
                    <div className='flex items-center gap-2'>
                    <span className='w-3 h-3 rounded-full bg-white'></span>
                    <Link className='navItem' to=''>CompanyLogo</Link>
                    </div>
                    <Link className='navItem' to="/the-why">The Why</Link>
                    <Link className='navItem' to="the-life">The Life</Link>
                    <Link className='navItem' to="the-work">The Work</Link>
                    <Link className='navItem' to="contact">Contact</Link>
                </nav>
            </div>
        </>
    )
}

export default Layout