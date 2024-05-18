import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="backgroundImage ">
      <div className=" container-width-100vw  py-5 px-9 flex flex-col lg:flex-row lg:space-x-4">
      <div className="lg:w-3/4"> 
        <div>
          <Image
            src="/images/darkmode_logo.png"
            alt="Logo"
            width={300}
            height={300}
          />
        </div>
        <div className="mt-7">
          <h1 className="text-white mb-4 text-5xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            Ditch the Bookie. Own the Bet
          </h1>
          <p className="text-[#458abc] text-base sm:text-lg mb-6 lg:text-7xl">
            Welcome to peer-2-peer betting, revolutionized.
          </p>
          <p>
            Tired of feeling like the house always wins? Us too. That's why we
            built PariMate, the peer-to-peer betting platform that puts you in
            control.
          </p>
          <div className="items-center mt-7 flex">
            <div>
              <Image
                src="/images/btn_JoinNow.png"
                alt="Sometin"
                width={159}
                height={57}
              />
            </div>
            <div className="px-4">
              <Image
                src="/images/btn_WatchExplainerVideo.jpg"
                alt="Someti"
                width={236}
                height={57}
              />
            </div>
          </div>
          <div className="mt-7">
            <h1>
              Connect and stake bets with your friends & fellow betting
              enthusiasts.
            </h1>
          </div>
        </div>
      </div>
        
      <div className="w-1/4 lg:w-1/4  mt-8 lg:mt-0 lg:ml-auto flex justify-end"> {/* Right align the image */}
        <Image
          src="/images/sidepic.png" 
          alt="Right Side Image"
          width={800} // Increase width to make the image larger
          height={757} // Adjust height to maintain aspect ratio
        />
      </div>
      </div>
      
    </div>
  );
}
