import React from 'react'

const Footer = () => {
    return (
        <>
            <div className='w-full flex justify-start items-start px-8 pb-64'>
                <div className='w-[30%] flex justify-start items-start'>
                    <p className='uppercase text-md font-semibold text-white'>Design Thinking</p>
                </div>
                <div className='w-[70%] flex justify-start items-start'>
                    <p className='textCreative w-[70%] text-3xl text-white'>
                        Not just pretty pixels. Design thinking is a wonderful process that I live and die by. It’s a journey filled
                        with many why’s, how’s and where’s to find a distinctive truth and transform it into a bold idea that inspires
                        people and delivers a real change.
                    </p>
                </div>
            </div>
            <div className='w-full grid grid-cols-3 px-8 pb-20'>
                <div className='flex flex-col justify-start items-start gap-8'>
                    <div className='flex justify-start items-start gap-8 text-white uppercase'>
                        <p className='cursor-pointer'>The Why</p>
                        <p className='cursor-pointer'>The Life</p>
                        <p className='cursor-pointer'>The Work</p>
                    </div>
                    <div>
                        <p className='text-white'>Handmade By <span className='underline cursor-pointer'>Keeplin</span></p>
                    </div>
                </div>
                <div className='flex flex-row justify-start items-start gap-8'>
                    <div>
                        <p className='text-white cursor-pointer uppercase'>hello@johndoe.com</p>
                    </div>
                    <div className='flex flex-col justify-start items-start gap-4 text-white uppercase'>
                        <p className='cursor-pointer'>Instagram</p>
                        <p className='cursor-pointer'>LinkedIn</p>
                    </div>
                </div>
                <div className='flex flex-col justify-start items-start gap-4'>
                    <div>
                        <p className='text-white uppercase'>CURRENTLY BASED IN SYDNEY, AUSTRALIA</p>
                    </div>
                    <div className='text-white'>
                        <p className=''>The land of the The Cadigal people, the original Aboriginal inhabitants and custodians of this land.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer