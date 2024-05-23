import React from 'react';
import Image from 'next/image';
import { Inknut_Antiqua } from 'next/font/google';

const inknut = Inknut_Antiqua({
  subsets: ['latin'],
  weight: ['900'],
});

const Footer = () => {
  return (
    <footer
      style={{
        background: '#2A2D37',
        minHeight: '322px', 
      }}
      className="footer flex justify-between p-8 text-white lg:flex-row flex-col items-center w-100 m-0"
    >
      <div

        style={{
          // width: '70%', // Set the left side width to 70%
          // marginRight: '20px', // Add margin-right for space
          // top: '18px',
          // left: '88px',
          position: 'relative',
          // marginLeft:'20px',
          
        }}
        className='lg:w-[50%] mb-6'
      >
        <div className={`${inknut.className} text-lg`}>
          Peer<span className="text-blue-500">Bet</span>
        </div>

        <div className="mt-6 mb-6">{new Date().getFullYear()} &copy; All Rights Reserved</div>
        <div style={{ wordWrap: 'break-word' }}>
          PariMate is a product of TD; a company registered in Nigeria(RC 12612922) duly licensed and regulated in Nigeria by the Gambling Commission under account 57366.
        </div>
      </div>

      <div > 
        <div className="flex justify-en items-center">
          <ul className="list-none flex items-center justify-center flex-wrap gap-x-3">
            <li>Pages</li>
            <li className="mt-">Game Rules</li>
            <li className="mt-">Terms & Conditions</li>
            <li className="mt-">Privacy Policy</li>

            <div className="flex items-center mt-6 space-x-2">
              <Image
                src="/images/facebook.png"
                alt="facebook"
                width={30}
                height={22}
              />
              <Image
                src="/images/twitter.png"
                alt="twitter"
                width={30}
                height={22}
              />
            </div>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
