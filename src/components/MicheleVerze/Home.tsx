// import React, { useEffect, useState } from 'react'
// import img1 from '../assets/img1.jpg'
// import img2 from '../assets/img2.jpg'
// import img3 from '../assets/img3.png'
// import img4 from '../assets/img4.jpg'
// import img5 from '../assets/img5.jpg'

// const Home = () => {

//     const [circleWidth, setCircleWidth] = useState(150); // Initial width of the circle
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {

//         const timer = setTimeout(() => {
//             setLoading(false)
//         }, 2700);

//         const handleScroll = () => {
//             const newWidth = 150 + (window.scrollY * 2); // Adjust the scroll multiplier as per your preference
//             setCircleWidth(newWidth);
//         };

//         window.addEventListener('scroll', handleScroll);
//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//             clearTimeout(timer)
//         };
//     }, []);

//     // console.log(circleWidth, 'circleWidthcircleWidth')

//     return (
//         <>
//             <div className={`bg-gray-400`}>
//                 <div className='w-full hCalc flex justify-center items-center '>
//                     {
//                         loading ?
//                             <div className="loading-container">
//                                 <div className="loading">
//                                     <img className='loading' src={img1} alt="" />
//                                 </div>
//                                 <div className="loading">
//                                     <img className='loading' src={img2} alt="" />
//                                 </div>
//                                 <div className="loading">
//                                     <img className='loading' src={img3} alt="" />
//                                 </div>
//                                 <div className="loading">
//                                     <img className='loading' src={img4} alt="" />
//                                 </div>
//                                 <div className="loading">
//                                     <img className='loading' src={img5} alt="" />
//                                 </div>
//                             </div> :
//                             <>
//                                 <div className='zoomAnimation bg-gray-500' style={{ width: circleWidth, height: circleWidth }}></div>
//                                 <div className={`clipText ${window.scrollY > 700 ? 'sticky' : 'sticky'} text-white text-4xl text-center px-20 leading-10`} style={{ clipPath: `circle(${circleWidth - 20}px)`, }}>
//                                     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, consequuntur! Voluptatibus animi temporibus
//                                     iure numquam consequatur sit amet consectetur.
//                                 </div>
//                             </>
//                     }
//                 </div>
//                 <div className='hCalc'>
//                     <div className='flex justify-center items-center h-screen'>
//                         <div className='w-52 h-52 bg-red-500 rounded-full z-10'></div>
//                     </div>
//                     <div className='h-[1000px] bg-blue-800'></div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Home


import React, { useEffect, useRef, useState } from 'react'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'
import { gsap } from 'gsap'
import { CustomEase } from "gsap/CustomEase";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CustomEase);


const Home = () => {

    const images = [
        { img: img1 },
        { img: img2 },
        { img: img3 },
        { img: img4 },
        { img: img5 },
        { img: img3 },
        { img: img4 },
        { img: img5 },
    ]

    const circleRef = useRef(null);
    const imageRefs = useRef([] as any);
    const pulseCircleRef = useRef(null);
    const [loading, setLoading] = useState(true);
    const [circleWidth, setCircleWidth] = useState(200);

    const animateImages = () => {
        const circle: any = circleRef.current;
        const delay = 0.2;
        imageRefs.current.forEach((image: any, index: any) => {
            gsap.fromTo(
                image,
                {
                    opacity: 0,
                    scale: 0
                },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 1,
                    delay: index * delay,
                    ease: 'power3.out',
                }
            );
        });
    };

    const animateCircle = () => {
        const circle = pulseCircleRef.current;
        const hop = CustomEase.create("custom", "M0,0 C0.244,0.024 0.254,0.046 0.288,0.076 0.362,0.141 0.402,0.228 0.5,0.5 0.594,0.776 0.675,0.91 0.712,0.946 0.737,0.971 0.798,1.016 1,1 ")

        gsap.fromTo(
            circle,
            { scale: 1 },
            {
                scale: 1.2,
                duration: 3,
                ease: hop,
                yoyo: true,
                repeat: -1,
            }
        );
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 2000);

        loading ? animateImages() : animateCircle();

        return () => {
            clearTimeout(timer)
        };
    }, [loading]);



    return (
        <>
            <div className='bg-gray-400 h-screen '>
                <div className='relative' ref={circleRef}>
                    {
                        loading ?
                            <>
                                {images.map((image: any, index: any) => (
                                    <div className="absolute top-[260px] left-[44%]">
                                        <img
                                            className='w-60 h-60 rounded-full'
                                            ref={(element: any) => (imageRefs.current[index] = element)}
                                            key={index}
                                            src={image.img}
                                            alt=''
                                        />
                                    </div>
                                ))}
                            </> :
                            <>
                                <div
                                    className='w-[240px] h-[240px] rounded-full bg-gray-500 absolute top-[260px] left-[44%]'
                                    ref={pulseCircleRef}
                                // style={{ width: circleWidth, height: circleWidth }}
                                >
                                </div>
                                <p className='absolute top-[340px] left-20 px-8 text-white text-3xl text-center'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit modi dolores esse vitae! Totam quidem reiciendis consectetur 
                                    rem quisquam tempore magnam itaque.
                                </p>
                            </>
                    }
                </div >
            </div >
            <div className='w-full h-[500px] flex justify-center items-center'>
                <div className='w-52 h-52 bg-red-500 rounded-full z-10'></div>
            </div>
        </>
    )
}

export default Home