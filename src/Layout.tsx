import gsap from 'gsap';
import React, { useEffect } from 'react'
import { Link } from "react-router-dom";

const Layout = () => {

    useEffect(()=>{
        gsap.from(".navItem", {x: 4, duration: 1, ease: "power3.in", opacity: 0,});
    },[])

    return (
        <>
            <div 
                className={`w-full fixed bg-transparent z-10`}
            >
                <nav className='px-8 py-6 font-normal bg-transparent navWrap flex flex-row justify-between items-center uppercase font-semibold'>
                    <div className='flex items-center gap-2'>
                    <span className='w-3 h-3 rounded-full bg-white'></span>
                    <Link className='navItem' to=''>CompanyLogo</Link>
                    </div>
                    <Link className='navItem  hover:text-gray-300 focus:text-gray-300 transition-all' to="/the-why">The Why</Link>
                    <Link className='navItem  hover:text-gray-300 focus:text-gray-300 transition-all' to="/the-life">The Life</Link>
                    <Link className='navItem  hover:text-gray-300 focus:text-gray-300 transition-all' to="/the-work">The Work</Link>
                    <Link className='navItem  hover:text-gray-300 focus:text-gray-300 transition-all' to="/contact">Contact</Link>
                </nav>
            </div>
        </>
    )
}

export default Layout