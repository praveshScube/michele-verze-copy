import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'

gsap.registerPlugin(ScrollTrigger);

const TheLife = () => {
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

  const lifeCompoRef = useRef(null);
  const imageRefs = useRef([] as any);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.style.backgroundColor = 'rgb(196 138 117)'
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000);
    let ctx: any
    if (loading) {
      ctx = gsap.context(() => {
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
      }, lifeCompoRef)
    } else {
      ctx = gsap.context(() => {
        gsap.fromTo(
          '.pulseCircle',
          { scale: 1 },
          {
            scale: 1.2,
            duration: 2,
            ease: "power2",
            yoyo: true,
            repeat: -1,
          }
        );
        gsap.to('.pulseCircleWrap', {
          scale: 10,
          scrollTrigger: {
            trigger: '.pulseCircle',
            start: 'top 240px',
            end: 'bottom -240px',
            scrub: true,
            pin: true,
            markers: true,
          },
        });
      document.body.style.overflowX = "hidden";
      }, lifeCompoRef)
    }

    return () => {
      clearTimeout(timer)
      ctx.revert();
      document.body.style.overflowX = "auto";
    };
  }, [loading]);

  return (
    <>
      <div className='' ref={lifeCompoRef}>
        {
          loading ?
            <div className='relative'>
              {images.map((image: any, index: any) => (
                <div className="absolute top-[250px] left-[42%]">
                  <img
                    className='w-60 h-60 rounded-full'
                    ref={(element: any) => (imageRefs.current[index] = element)}
                    key={index}
                    src={image.img}
                    alt=''
                  />
                </div>
              ))}
            </div> :
            <div className='pulseCircleWrap h-screen w-full flex justify-center items-center'>
              <div className='pulseCircle w-[260px] h-[260px] rounded-full bg-gray-500'></div>
              {/* <p className='pulseText absolute top-[340px] left-18 px-8 text-white text-3xl text-center'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit modi dolores esse vitae! Totam quidem reiciendis consectetur
            rem quisquam tempore magnam itaque.
          </p> */}
            </div>
        }
        <div className='h-screen w-full'>

        </div>
      </div>
    </>
  )
}

export default TheLife