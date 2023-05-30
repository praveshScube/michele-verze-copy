import gsap from 'gsap';
import React, { useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from "react-router-dom";

const Layout = () => {

    const logoRef = useRef(null);
    const {pathname} = useLocation()

    useEffect(() => {
        const logo = logoRef.current;
        gsap.fromTo(".navItem",
            {
                x: '0%',
                duration: 1,
                ease: "power3.in",
                opacity: 0,
                stagger: 0.3,
            }, {
            x: '100%',
            duration: 1,
            ease: "power3.in",
            opacity: 1,
            stagger: 0.3,
        });
        gsap.fromTo(
            logo,
            {
                translateX: '0%',
                opacity: 1,
                duration: 2,
                ease: "power3.in",
                stagger: 0.3,
            },
            {
                translateX: '-100%',
                stagger: 0.3,
                opacity: 0,
                duration: 2,
                ease: "power3.in",
                scrollTrigger: {
                    trigger: logo,
                    start: 'top -100px',
                    end: '+=20',
                    scrub: 0.5,
                },
            }
        );
    }, [])

    return (
        <>
            <div
                className={`w-full fixed bg-transparent z-10`}
            >
                <nav className={`${pathname.includes('the-why') ? 'text-black' : 'text-white'} navigation px-8 py-6 font-normal bg-transparent navWrap flex flex-row justify-between items-center uppercase font-semibold`}>
                    <div className='flex items-center gap-2'>
                        <span className={`w-3 h-3 rounded-full ${pathname.includes('the-why') ? 'bg-black' : 'bg-white'}`}></span>
                        <div className='' ref={logoRef}>
                            <Link className={`navItem ${pathname.includes('the-why') ? 'text-black' : 'text-white'}`} to='' >CompanyLogo</Link>
                        </div>
                    </div>
                    <NavLink className={`navItem hover:text-gray-300 focus:text-gray-300 transition-all`} to="/the-why">The Why</NavLink>
                    <NavLink className={`navItem hover:text-gray-300 focus:text-gray-300 transition-all`} to="/the-life">The Life</NavLink>
                    <NavLink className={`navItem hover:text-gray-300 focus:text-gray-300 transition-all`} to="/the-work">The Work</NavLink>
                    <NavLink className={`navItem hover:text-gray-300 focus:text-gray-300 transition-all`} to="/contact">Contact</NavLink>
                </nav>
            </div>
        </>
    )
}

export default Layout