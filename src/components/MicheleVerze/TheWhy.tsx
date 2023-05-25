import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { CSSPlugin } from 'gsap/CSSPlugin';

// Activate the CSSPlugin to ensure GSAP supports CSS-related properties
gsap.registerPlugin(CSSPlugin);

const TheWhy = () => {

  const zxczxc = useRef(null);

  useEffect(() => {
    document.body.style.backgroundColor = 'rgb(187 177 173)'
    const zz = zxczxc.current;

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
    // gsap.set(zz, {clipPath: 'circle(193.388px at 50% 50%)'})
  }, []);

  return (
    <>
      <div ref={zxczxc} className="pulseCircle sticky top-0 h-screen flex items-center justify-center" style={{ clipPath: 'circle(143px at 50% 50%)' }}>
        <div className="bg-gray-500 w-full h-full">
          <div className="container max-w-screen-xl mx-auto h-full text-3xl md:text-5xl xl:text-7xl text-center font-serif flex items-center justify-center">
            Searching for beauty in the tiniest detail to create magic in the bigger picture.
          </div>
        </div>
      </div>
      <div className='h-[1000px]'></div>
      {/* <div className="absolute bottom-0 inset-x-0 flex items-center justify-center h-screen overflow-hidden">
        <div id="reel" className="h-full w-full relative flex" style={{ clipPath: 'circle(140px at center)' }} ref={reelRef}>
          <div className="w-56 sm:w-[280px] h-56 sm:h-[280px] m-auto rounded-full overflow-hidden" style={{ clipPath: 'circle(140px at center)' }}>
            <video src="https://www.micheleverze.com/wp-content/uploads/HYPE-REEL_V2_SHORT-1.mp4" className="w-full h-full object-cover" muted autoPlay playsInline loop></video>
          </div>

          <button className="absolute inset-0 flex items-center justify-center uppercase text-xs z-10" >
            play
          </button>
        </div>
      </div> */}
    </>
  );
};

export default TheWhy