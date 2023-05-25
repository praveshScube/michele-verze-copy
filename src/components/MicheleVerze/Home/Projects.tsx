import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { SplitText } from "gsap-trial/SplitText";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import logoImg from '../../assets/Object36.png'
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.png'

gsap.registerPlugin(SplitText, ScrollTrigger);

const Projects = () => {

    const images = [
        { img: img1 },
        { img: img2 },
        { img: img3 },
    ]

    const creativeRef = useRef(null);

    // useEffect(() => {
    //     let ctx = gsap.context(() => {

    //         const mySplitText: any = new SplitText(".textCreative", {
    //             type: "lines",
    //         });
    //         let paraLines = mySplitText.lines

    //         gsap.from('.textCreative', {
    //             duration: 1.5,
    //             yPercent: 100,
    //             ease: "power4.out",
    //             stagger: 0.2,
    //         });
    //         gsap.from('.textCreative', {
    //             scrollTrigger: {
    //                 trigger: ".textCreative",
    //                 toggleActions: "restart pause resume reverse",
    //                 start: "50% 80%",
    //                 end: "bottom bottom",
    //                 scrub: true,
    //                 markers: true
    //             },
    //         })
    //     }, creativeRef)

    //     return () => {
    //         ctx.revert();
    //     };
    // }, [])

    return (
        <div>
            <div className='w-full h-screen px-8 pt-[65%] pb-80' ref={creativeRef}>
                <p className='textCreative flex flex-col justify-start items-center text-3xl w-1/2 text-white text-left'>
                    As creative, I believe the power of an idea begins with a deep understanding of the brand, via meaningful
                    conversations and executed with remarkable passion & love.
                </p>
                <div className='btnCreative flex flex-row justify-start items-center mt-4 gap-3'>
                    <span className='w-3 h-3 rounded-full border-[1px] border-white'></span>
                    <p className='uppercase text-md font-semibold text-white mt-1'>DISCOVER THE WHY</p>
                </div>
            </div>
            <div className='w-full h-screen px-8 flex flex-row justify-between items-center py-40'>
                <div className='w-[40%] h-screen flex flex-row justify-start items-start mt-44'>
                    <p className='uppercase text-md font-semibold text-white'>Companies I Worked With</p>
                </div>
                <div className='w-[60%] grid grid-cols-6 gap-2'>
                    {
                        Array.from(Array(36).keys()).map((_, index) => index + 1).map((item: any) => {
                            return (
                                <div>
                                    <img src={logoImg} alt="" />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='w-full h-[500px] px-8 my-40'>
                <div className='' ref={creativeRef}>
                    {
                        images.map((item: any, index: any) => {
                            return (
                                <div className='flex flex-row justify-between items-center'>
                                    <div className='w-[40%] h-screen flex flex-col justify-between items-start py-16'>
                                        <p className='uppercase text-md font-semibold text-white flex flex-col gap-3'>
                                            <span>Selected Projects</span>
                                            <span>1{' '}/{' '}3</span>
                                        </p>
                                        <p className='uppercase text-md font-semibold text-white'>See More Work</p>
                                    </div>
                                    <div className='flex flex-col justify-center items-center w-[60%]'>
                                        <img src={item.img} alt="" />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Projects