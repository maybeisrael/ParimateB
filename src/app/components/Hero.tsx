import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="backgroundImage">
      <div className="py-5 px-9 ">
        <div>
          <Image
            src="/images/darkmode_logo.png"
            alt="Logo"
            width={300}
            height={300}
          />
        </div>
        <div className="flex px-9 justify-left">
          <div className="mt-7 max-w-[900px] w-full">
          <h1 className="custom-h1">
  Ditch the Bookie. Own the Bet
</h1>


            <p className="text-[#458abc] text-base sm:text-lg mb-6 lg:text-7xl">
              Welcome to peer-2-peer betting, revolutionized.
            </p>
            <p>
              Tired of feeling like the house always wins? Us too. That&apos;s why we built PariMate, the peer-to-peer betting platform that puts you in control.
            </p>
            <div className="items-center mt-7 flex">
              <div>
                <Image
                  src="/images/btn_JoinNow.png"
                  alt="Join Now"
                  width={159}
                  height={57}
                />
              </div>
              <div className="px-4">
                <Image
                  src="/images/btn_WatchExplainerVideo.jpg"
                  alt="Watch Explainer Video"
                  width={236}
                  height={57}
                />
              </div>
            </div>
            <div className="mt-7">
              <h1>
                Connect and stake bets with your friends & fellow betting enthusiasts.
              </h1>
            </div>
          </div>
        </div>

        <div className="absolute top-0 right-0 mt-8 ">
          <div className="max-w-[900px]">
            <div>
              <Image
                src="/images/sidepic.png"
                alt="Right Side Image"
                width={800}
                height={757}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
