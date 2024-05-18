import React from 'react';
import Image from 'next/image';

export default function Content() {
  return (
    <div className="backgroundd">
      <div>
        <div className="absolute left-0 top-[255px]">
          <Image
            src="/images/hero.png"
            alt="hero image"
            width={699}
            height={695}
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center  text-center">
        <div className="box mt-5 py-4 px-5">
          <div>High winning Odds - Hedge your bet</div>
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
                opacity: '0px',
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
                opacity: '0px',
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
