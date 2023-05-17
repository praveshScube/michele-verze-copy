import React, { useEffect, useState } from 'react'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'

const Home = () => {

    const [circleWidth, setCircleWidth] = useState(150); // Initial width of the circle
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const timer = setTimeout(() => {
            setLoading(false)
        }, 2700);

        const handleScroll = () => {
            const newWidth = 150 + (window.scrollY * 2); // Adjust the scroll multiplier as per your preference
            setCircleWidth(newWidth);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(timer)
        };
    }, []);

    // console.log(circleWidth, 'circleWidthcircleWidth')

    return (
        <>
            <div className={`bg-gray-400`}>
                <div className='w-full hCalc flex justify-center items-center '>
                    {
                        loading ?
                            <div className="loading-container">
                                <div className="loading">
                                    <img className='loading' src={img1} alt="" />
                                </div>
                                <div className="loading">
                                    <img className='loading' src={img2} alt="" />
                                </div>
                                <div className="loading">
                                    <img className='loading' src={img3} alt="" />
                                </div>
                                <div className="loading">
                                    <img className='loading' src={img4} alt="" />
                                </div>
                                <div className="loading">
                                    <img className='loading' src={img5} alt="" />
                                </div>
                            </div> :
                            <>
                                <div className='zoomAnimation bg-gray-500' style={{ width: circleWidth, height: circleWidth }}></div>
                                <div className='clipText text-white text-4xl text-center px-20 leading-10' style={{ clipPath: `circle(${circleWidth - 20}px)`, }}>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, consequuntur! Voluptatibus animi temporibus
                                    iure numquam consequatur sit amet consectetur.
                                </div>
                            </>
                    }
                </div>
                <div className='hCalc'>
                    <div className='flex justify-center items-center h-screen'>
                        <div className='w-52 h-52 bg-red-500 rounded-full z-10'></div>
                    </div>
                    <div className='h-[1000px] bg-blue-800'></div>
                </div>
            </div>
        </>
    )
}

export default Home