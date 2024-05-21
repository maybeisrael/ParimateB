import React from 'react';
import Image from 'next/image';

export default function Content() {
  return (
    <div className="relative min-h-screen backgroundd">
      <div className="absolute left-0 bottom-0 w-full sm:w-3/4 md:w-1/2 lg:w-1/3">
        <Image
          src="/images/hero.png"
          alt="hero image"
          layout="responsive"
          width={699}
          height={695}
        />
      </div>

      <div className="flex flex-col items-center justify-center py-7 text-center min-h-screen">
        <div className="box w-full sm:w-5/6 md:w-4/5 lg:w-3/4 xl:w-2/3 p-4 rounded-md">
          <div className="text-xl md:text-2xl lg:text-5xl">
            <span className="text-white">High winning Odds-</span>
            <span className="text-blue-500">Hedge </span>
            <span className="text-white">your bet</span>
          </div>
        </div>

        <div className="flex-content mt-5">
          Hedge your bets by joining multiple stakes. Explore alternative outcomes and increase your chances of winning!
        </div>

        <div className="mt-5 w-full flex justify-end">
          <ul className="flex flex-col items-end">
            <li
              className="flex items-center py-5"
              style={{
                width: '827px',
                height: '102px',
                gap: '0px',
                opacity: '0',
              }}
            >
              <div className="badge flex items-center mr-2">
                <Image
                  src="/images/Group.png"
                  alt="badge"
                  width={80}
                  height={70}
                />
              </div>
              <div className="flex flex-col">
                <div>Download Parimate</div>
                <div>With PariMate, it&apos;s your game, your way. Connect with fellow betting enthusiasts and build your network.</div>
              </div>
            </li>
            <li
              className="flex items-center py-5"
              style={{
                width: '537px',
                height: '102px',
                padding: '0px 6px 0px 0px',
                gap: '0px',
                opacity: '0',
              }}
            >
              <div className="badge flex items-center mr-2">
                <Image
                  src="/images/Group.png"
                  alt="badge"
                  width={80}
                  height={70}
                />
              </div>
              <div className="flex flex-col">
                <div>Fund your wallet</div>
                <div>With PariMate, it&apos;s your game, your way. Connect with fellow betting enthusiasts and build your network.</div>
              </div>
            </li>
            <li className="flex items-center py-5">
              <div className="badge flex items-center mr-2">
                <Image
                  src="/images/Group.png"
                  alt="badge"
                  width={80}
                  height={70}
                />
              </div>
              <div className="flex flex-col">
                <div>Create or Join Game(s)</div>
                <div>With PariMate, it&apos;s your game, your way. Connect with fellow betting enthusiasts and build your network.</div>
              </div>
            </li>
            <li className="flex items-center py-5">
              <div className="badge flex items-center mr-2">
                <Image
                  src="/images/Group.png"
                  alt="badge"
                  width={80}
                  height={70}
                />
              </div>
              <div className="flex flex-col">
                <div>Win Stake!</div>
                <div>With PariMate, it&apos;s your game, your way. Connect with fellow betting enthusiasts and build your network.</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
