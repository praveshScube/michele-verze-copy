import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from "gsap-trial/SplitText";
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'

gsap.registerPlugin(SplitText, ScrollTrigger);

const TheWhy = () => {
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

  const heroSectionRef = useRef(null);
  const imageRefs = useRef([] as any);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    document.body.style.backgroundColor = 'rgb(187 177 173)'

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
      }, heroSectionRef)
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
          opacity: 1,
          scrollTrigger: {
            trigger: '.pulseCircleWrap',
            start: 'center center',
            endTrigger: '.videoTrig',
            end: 'bottom bottom',
            scrub: true,
            pin: true,
            pinSpacing: false,
            // markers: true,
            onLeave: () => {
              gsap.to('.pulseCircleWrap', {
                opacity: 0,
              })
              document.body.style.backgroundColor = 'rgb(198 191 188)'
            },
            onEnter: () => {
              gsap.to('.pulseCircleWrap', {
                opacity: 1,
              })
              document.body.style.backgroundColor = 'rgb(187 177 173)'
            },
            onEnterBack: () => {
              gsap.to('.pulseCircleWrap', {
                opacity: 1,
              })
              document.body.style.backgroundColor = 'rgb(187 177 173)'
            },
          },
        });
        gsap.to('.pulseCircleWrap', {
          scrollTrigger: {
            trigger: '.pulseText',
            start: 'top 320px',
            end: 'bottom top-=1150px',
            scrub: true,
            pin: true,
            pinSpacing: false,
            // markers: true,
          },
        });
        document.body.style.overflowX = "hidden";
      }, heroSectionRef)
    }
    return () => {
      clearTimeout(timer)
      ctx.revert();
      document.body.style.overflowX = "auto";
    };
  }, [loading]);


  return (
    <>
      <div className='w-full h-screen' ref={heroSectionRef}>
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
            <div className=''>
              <div className='pulseCircleWrap h-screen w-full flex justify-center items-center'>
                <div className='bg-[#C6BFBC] pulseCircle w-[240px] h-[240px] rounded-full'></div>
              </div>
              <p className='pulseText absolute top-[20px] left-18 px-[10%] text-white text-5xl text-center'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit modi dolores esse vitae!
              </p>
            </div>
        }
      </div>
      <div className='h-[1000px]'></div>
    </>
  );
};

export default TheWhy