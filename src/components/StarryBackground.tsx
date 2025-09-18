import React from "react";

export default function StarryBackground() {
  return (
    <>
      {/* Background stars layer */}
      <div 
        className="fixed inset-0 w-screen h-screen pointer-events-none select-none z-0"
        style={{
          backgroundImage: `
            radial-gradient(1px 1px at 15px 25px, rgba(255,255,255,0.6), transparent),
            radial-gradient(1px 1px at 45px 85px, rgba(255,255,255,0.4), transparent),
            radial-gradient(1px 1px at 75px 15px, rgba(255,255,255,0.8), transparent),
            radial-gradient(1px 1px at 105px 65px, rgba(255,255,255,0.5), transparent),
            radial-gradient(1px 1px at 135px 35px, rgba(255,255,255,0.7), transparent),
            radial-gradient(1px 1px at 165px 95px, rgba(255,255,255,0.3), transparent),
            radial-gradient(1px 1px at 195px 55px, rgba(255,255,255,0.9), transparent),
            radial-gradient(1px 1px at 225px 25px, rgba(255,255,255,0.4), transparent),
            radial-gradient(1px 1px at 255px 75px, rgba(255,255,255,0.6), transparent),
            radial-gradient(1px 1px at 285px 45px, rgba(255,255,255,0.8), transparent),
            radial-gradient(1px 1px at 315px 15px, rgba(255,255,255,0.5), transparent),
            radial-gradient(1px 1px at 345px 85px, rgba(255,255,255,0.7), transparent),
            radial-gradient(1px 1px at 375px 35px, rgba(255,255,255,0.3), transparent),
            radial-gradient(1px 1px at 405px 65px, rgba(255,255,255,0.9), transparent),
            radial-gradient(1px 1px at 435px 25px, rgba(255,255,255,0.4), transparent),
            radial-gradient(1px 1px at 465px 75px, rgba(255,255,255,0.6), transparent),
            radial-gradient(1px 1px at 495px 45px, rgba(255,255,255,0.8), transparent),
            radial-gradient(1px 1px at 525px 15px, rgba(255,255,255,0.5), transparent),
            radial-gradient(1px 1px at 555px 85px, rgba(255,255,255,0.7), transparent),
            radial-gradient(1px 1px at 585px 35px, rgba(255,255,255,0.3), transparent),
            radial-gradient(1px 1px at 615px 65px, rgba(255,255,255,0.9), transparent),
            radial-gradient(1px 1px at 645px 25px, rgba(255,255,255,0.4), transparent),
            radial-gradient(1px 1px at 675px 75px, rgba(255,255,255,0.6), transparent),
            radial-gradient(1px 1px at 705px 45px, rgba(255,255,255,0.8), transparent),
            radial-gradient(1px 1px at 735px 15px, rgba(255,255,255,0.5), transparent),
            radial-gradient(1px 1px at 765px 85px, rgba(255,255,255,0.7), transparent),
            radial-gradient(1px 1px at 795px 35px, rgba(255,255,255,0.3), transparent),
            radial-gradient(1px 1px at 825px 65px, rgba(255,255,255,0.9), transparent),
            radial-gradient(1px 1px at 855px 25px, rgba(255,255,255,0.4), transparent),
            radial-gradient(1px 1px at 885px 75px, rgba(255,255,255,0.6), transparent)
          `,
          backgroundRepeat: 'repeat',
          backgroundSize: '900px 100px',
          opacity: 0.6,
          animation: 'twinkle 4s ease-in-out infinite alternate'
        }}
        aria-hidden
      />

      {/* Bright pulsing stars layer */}
      <div 
        className="fixed inset-0 w-screen h-screen pointer-events-none select-none z-5"
        style={{
          backgroundImage: `
            radial-gradient(1px 1px at 25px 35px, rgba(255,255,255,0.9), transparent),
            radial-gradient(1px 1px at 85px 75px, rgba(255,255,255,0.8), transparent),
            radial-gradient(1px 1px at 155px 25px, rgba(255,255,255,0.9), transparent),
            radial-gradient(1px 1px at 225px 85px, rgba(255,255,255,0.7), transparent),
            radial-gradient(1px 1px at 295px 45px, rgba(255,255,255,0.9), transparent),
            radial-gradient(1px 1px at 365px 15px, rgba(255,255,255,0.8), transparent),
            radial-gradient(1px 1px at 435px 65px, rgba(255,255,255,0.9), transparent),
            radial-gradient(1px 1px at 505px 35px, rgba(255,255,255,0.7), transparent),
            radial-gradient(1px 1px at 575px 85px, rgba(255,255,255,0.9), transparent),
            radial-gradient(1px 1px at 645px 25px, rgba(255,255,255,0.8), transparent),
            radial-gradient(1px 1px at 715px 55px, rgba(255,255,255,0.9), transparent),
            radial-gradient(1px 1px at 785px 15px, rgba(255,255,255,0.7), transparent)
          `,
          backgroundRepeat: 'repeat',
          backgroundSize: '800px 100px',
          opacity: 0.8,
          animation: 'twinkle 2s ease-in-out infinite alternate, pulse 2s ease-in-out infinite'
        }}
        aria-hidden
      />
    </>
  );
}
