import React from 'react';
import Image from 'next/image';

export default function Content() {
  return (
    <div className="relative min-h-scree backgroundd mb-32">

      <div className=" py-7 text-center relative flex flex-col items-center">

        <div className="box w-100 p-1 rounded-md w-[80%] ">

          <div className="text-xl font-bold">
            <span className="text-white">High winning Odds-</span>
            <span className="text-blue-500">Hedge </span>
            <span className="text-white">your bet</span>
          </div>

        </div>

        <div className="text-center text-white w-full md:w-[761px] h-[66px] md:h-auto">
      <p
        className="font-semibold text-2xl mb-5"
        style={{ fontFamily: 'Nunito Sans', fontSize: '24px', fontWeight: 600, lineHeight: '32.74px' }}
      >
        Hedge your bets by <span className='text-blue-500'>joining multiple</span> stakes.{' '}
        <span className='text-blue-500'>Explore</span> alternative outcomes and increase your chances of winning!
      </p>
    </div>

        <div className="w-100 flex-col lg:flex-row flex justify-center mt-4 items-center border2 border-red-500 bg-[#2A2D37E5] lg:h-screen relative  w-[80%] mx-0 top-0  rounded-lg shadow-lg drop-shadow shadow-white">

          <div className="relative lg:absolute left-0 bottom-0 w-full sm:w-3/4 md:w-1/2 lg:w- hidden md:block">
            <Image
              src="/images/hero.png"
              alt="hero image"
              className='-mb-16'
              width={1000}
              height={695}
              
            />
          </div>

          <ul className="flex flex-col  text-white text-left py-14">

            <li
              className="flex items-center  relative lg:absolute lg:left-[20%] top-[10%]"
            >
              <div className="badge">
                <Image
                  src="/images/Group.png"
                  alt="badge"
                  width={100}
                  height={0}
                />
              </div>
              <div className="flex flex-col pt-6 -ml-9">
                <div className='font-bold text-lg'>Download Parimate</div>
                <div className='text-[12px] text-gray-400'>With PariMate, it&apos;s your game, your way. <br /> Connect with fellow betting enthusiasts and build your network.</div>
              </div>
            </li>

            <li
              className="flex items-center relative lg:absolute lg:left-[45%] top-[27%]"
            >
              <div className="badge">
                <Image
                  src="/images/Group.png"
                  alt="badge"
                  width={100}
                  height={0}
                />
              </div>
              <div className="flex flex-col pt-6 -ml-9">
                <div className='font-bold text-lg'>Fund your wallet</div>
                <div className='text-[12px] text-gray-400'>With PariMate, it&apos;s your game, your way. <br /> Connect with fellow betting enthusiasts and build <br /> your network.</div>
              </div>
            </li>

            <li className="flex items-center relative lg:absolute lg:left-[52%] top-[50%]">
          	   <div className="badge">
                <Image
                  src="/images/Group.png"
                  alt="badge"
                  width={100}
                  height={0}
                />
               </div>
              <div className="flex flex-col pt-6 -ml-9">
                <div className='font-bold text-lg'>Create or Join Game(s)</div>
                <div className='text-[12px] text-gray-400'>With PariMate, it&apos;s your game, your way. <br /> Connect with fellow betting enthusiasts and build <br /> your network.</div>
              </div>
            </li>

            <li className="flex items-center relative lg:absolute lg:left-[49%] top-[73%]">
              <div className="badge">
                <Image
                  src="/images/Group.png"
                  alt="badge"
                  width={100}
                  height={0}
                />
              </div>
              <div className="flex flex-col pt-6 -ml-9">
                <div className='font-bold text-lg'>Download Parimate</div>
                <div className='text-[12px] text-gray-400'>With PariMate, it&apos;s your game, your way. <br /> Connect with fellow betting enthusiasts and build your network.</div>
              </div>
            </li>

          </ul>
          
        </div>

      </div>

    </div>
  );
}
