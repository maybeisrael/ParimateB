"use client";
import React from 'react';
import Image from 'next/image';
import Modal from './Modal';
import { useState } from 'react';

export default function Hero() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="backgroundImage page px-9 py-6">
      <div className="content max-sm:h-[90%]">
      <div className="flex flex-row md:flex-row px-4 md:px-9">
  <div className="mt-0 max-w-[550px] w-full md:w-[70%]">
  <Image
      src="/images/darkmode_logo.png"
      alt="Logo"
      width={170}
      height={70}
      className="max-w-full"
    />
  </div>
  <div className="md:w-[30%] mt-7 md:mt-0 md:ml-9 flex justify-end">
   
    <button
      onClick={() => setModalOpen(true)}
      className="mt-1 "
    >
      <Image
        src="/images/btn_TopGetPariMate.png"
        alt="Join Now"
        width={170}
        height={70}
        className="max-w-full"
      />
    </button>
    <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
  </div>
</div>




<div className="relative">
  <div className="absolute top-6 right-6 max-w-[900px] max-h-[700px] px-5 py-7 hidden md:block">
    <div>
      <Image
        src="/images/sidepic.png"
        alt="Right Side Image"
        layout="responsive"
        width={800}
        height={500}
        className="max-w-full h-auto"
      />
    </div>
  </div>
</div>




<div className="flex flex-col md:flex-row px-4 md:px-9">
  <div className="mt-7 max-w-[850px] w-full md:w-[70%] md:h-[30%] max-h-[400px]">
    <h1 className="custom-h1 text-white text-2xl sm:text-3xl lg:text-4xl">
      <span className="text-white">Ditch the<span className="text-blue-500"> Bookie</span>. Own the </span>
      <span className="text-blue-500">Bet</span>
    </h1>
    <p className="py-5 text-white text-base sm:text-lg lg:text-xl">
      Welcome to peer-2-peer betting, revolutionized.
    </p>
    <p className="text-white">
      Tired of feeling like the house always wins? Us too. That&apos;s why we built PariMate, the peer-to-peer betting platform that puts you in control.
    </p>
    <div className="items-center py-6 flex">
      <button onClick={() => setModalOpen(true)}>
        <Image
          src="/images/btn_JoinNow.png"
          alt="Join Now"
          width={170}
          height={70}
        />
      </button>
      <div className="px-4">
        <Image
          src="/images/btn_WatchExplainerVideo.jpg"
          alt="Watch Explainer Video"
          width={236}
          height={57}
        />
      </div>
    </div>
    <div className="max-w-[750px] w-full">
      <h1 className="text-white text-base lg:text-xl">
        Connect and stake bets with your friends & fellow betting enthusiasts.
      </h1>
    </div>
  </div>
  
</div>


       

      </div>
    </div>
  );
}
