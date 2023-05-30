import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { SplitText } from "gsap-trial/SplitText";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import logoImg from '../../assets/Object36.png'
import img5 from '../../assets/img5.jpg'
import img4 from '../../assets/img4.jpg'
import img3 from '../../assets/img3.png'
import Footer from '../Footer';

gsap.registerPlugin(SplitText, ScrollTrigger);

const Projects = () => {

    const images = [
        { img: img4, color: '#ffc700' },
        { img: img3, color: '#001f1e' },
        { img: img5, color: '##cfcfcf' },
    ]

    const creativeRef = useRef(null);
    const projectsRef = useRef(null);
    const projImgRef = useRef([] as any);
    const [imgCount, setImgCount] = useState(1)

    const textAnimation = () => {
        let mySplitText = new SplitText(".textCreative", { type: "lines" });
        let chars = mySplitText.lines;
        gsap.from(chars, {
            x: -1,
            stagger: 0.3,
            ease: "sine.out",
            duration: 1,
            opacity: 0,
            scrollTrigger: {
                trigger: ".textCreative",
                toggleActions: "restart pause resume reverse",
                start: "bottom bottom",
            },
        })
    }

    useEffect(() => {
        let ctx = gsap.context(() => {
            textAnimation()
        }, creativeRef)

        return () => {
            ctx.revert();
        };
    }, [])

    useEffect(() => {
        let ctx = gsap.context(() => {

            projImgRef.current.forEach((image: any, index: any) => {
                gsap.fromTo(image, { scale: 0.9 },
                    {
                        scale: 1,
                        duration: 1,
                        ease: "expo.out",
                        yoyo: true,
                        scrollTrigger: {
                            trigger: ".projectRightImg" + index,
                            toggleActions: "restart pause resume reverse",
                            start: "top bottom",
                            end: "bottom bottom-=100px",
                            endTrigger: '.projectRightImg',
                            scrub: true,
                            // markers: true,
                        },
                    })
            });

            gsap.from('.projectLeft', {
                scrollTrigger: {
                    trigger: ".projectLeft",
                    toggleActions: "restart pause resume reverse",
                    start: "top 80px",
                    end: "bottom bottom",
                    endTrigger: '.projectRight',
                    pin: true,
                    scrub: true,
                    // markers: true,
                },
            })
        }, projectsRef)

        return () => {
            ctx.revert();
        };
    }, [])

    return (
        <div>
            <div className='w-full h-screen flex flex-col justify-start items-start px-8 pt-[50%] pb-80' ref={creativeRef}>
                <p className='textCreative text-3xl w-1/2 text-white'>
                    As creative, I believe the power of an idea begins with a deep understanding of the brand, via meaningful
                    conversations and executed with remarkable passion & love.
                </p>
                <div className='btnCreative flex flex-row justify-start items-center mt-8 gap-3 cursor-pointer'>
                    <span className='w-3 h-3 rounded-full border-[1px] border-white'></span>
                    <p className='uppercase text-md font-semibold text-white'>Discover The Why</p>
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
            <div className='w-full  px-8 mt-40 mb-64' ref={projectsRef}>
                <div className='flex flex-row justify-between items-start mb-12'>
                    <div className='projectLeft w-[30%] h-[600px] flex flex-col justify-between items-start py-0'>
                        <p className='uppercase text-md font-semibold text-white flex flex-col gap-3'>
                            <span>Selected Projects</span>
                            <span>{imgCount}{' '}/{' '}3</span>
                        </p>
                        <div className='btnCreative flex flex-row justify-center items-center mt-4 gap-3 cursor-pointer'>
                            <span className='w-3 h-3 rounded-full border-[1px] border-white'></span>
                            <p className='uppercase text-md font-semibold text-white'>See More Work</p>
                        </div>
                    </div>
                    <div className='projectRight flex flex-col justify-center items-center max-w-[70%] overflow-hidden'>
                        {
                            images?.map((item: any, index: any) => {
                                return (
                                    <div className={`mb-12 projImgContainer`}>
                                        <img
                                            className={`projectRightImg` + index}
                                            src={item.img}
                                            alt=""
                                            ref={(element: any) => (projImgRef.current[index] = element)}
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Projects