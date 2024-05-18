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
        height: '322px', // Maintain the height of the footer
      }}
      className="footer flex p-8 text-color-gray-light"
    >
      <div
        style={{
          width: '70%', // Set the left side width to 70%
          marginRight: '20px', // Add margin-right for space
          top: '18px',
          left: '88px',
          position: 'relative',
        }}
      >
        <div className={`${inknut.className} text-lg`}>
          Peer<span className="text-blue-500">Bet</span>
        </div>

        <div className="mt-6 mb-6">{new Date().getFullYear()} &copy; All Rights Reserved</div>
        <div style={{ wordWrap: 'break-word' }}>
          PariMate is a product of TD; a company registered in Nigeria(RC 12612922) duly licensed and regulated in Nigeria by the Gambling Commission under account 57366.
        </div>
      </div>

      <div className="footer-content" style={{ width: '25%' }}> {/* Set the right side width to 25% */}
        <div className="flex justify-end">
          <ul className="list-none">
            <li>Pages</li>
            <li className="mt-6">Game Rules</li>
            <li className="mt-6">Terms & Conditions</li>
            <li className="mt-6">Privacy Policy</li>

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
