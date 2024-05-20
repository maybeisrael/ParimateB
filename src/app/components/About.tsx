import React from 'react';
import Image from 'next/image';

export default function About() {
  return (
    <div className="aboutContainer">
      <div>
        <div className="title">PariMate vs The Bettors</div>
      <div className="box-container">
        
        <div className="box" style={{
          background: '#2A741833',
          height: '445px', // Set the height of the boxes
          width: '369px', // Set the width of the boxes
          display: 'flex', // Use flexbox for layout
          alignItems: 'center', // Center items vertically
          justifyContent: 'space-between', // Space items evenly horizontally
          padding: '20px', // Add padding for spacing
          border: '2px solid #EB9B23'
        }}>
          <div className="content" style={{ color: '#2A2D37' }}>
            <div className='text-center' style={{
              fontFamily: 'Montserrat',
              fontSize: '25px',
              fontWeight: 700,
              lineHeight: '30.48px',
              textAlign: 'center',
              marginBottom: '20px'
            }}>Parimate</div>
            <ul className="list-none">
              <li className="flex items-center">
                <div className="badge mr-2">
                  <Image
                    src="/images/success badge.png"
                    alt="badge"
                    width={70}
                    height={60}
                  />
                </div>
                Set your own odds and choose your bets, creating a personalized experience
              </li>
              <li className="mt-2 flex items-center">
                <div className="badge mr-2">
                  <Image
                    src="/images/success badge.png"
                    alt="badge"
                    width={50}
                    height={60}
                  />
                </div>
                You always win, whether you score maximum points or not
              </li>
              <li className="mt-2 flex items-center">
                <div className="badge mr-2">
                  <Image
                    src="/images/success badge.png"
                    alt="badge"
                    width={40}
                    height={20}
                  />
                </div>
                Socially Responsible, spending is controlled
              </li>
              <li className="mt-2 flex items-center">
                <div className="badge mr-2">
                  <Image
                    src="/images/success badge.png"
                    alt="badge"
                    width={60}
                    height={60}
                  />
                </div>
                Enjoy the fun of competing with friends on the knowledge of football
              </li>
              <li className="mt-2 flex items-center">
                <div className="badge mr-2">
                  <Image
                    src="/images/success badge.png"
                    alt="badge"
                    width={33}
                    height={22}
                  />
                </div>
                The players are the &quot;House&quot;
              </li>
            </ul>
          </div>
        </div>

        {/* Second Box */}
        <div className="box" style={{
          background: '#2A52BE33',
          height: '445px', // Set the height of the boxes
          width: '369px', // Set the width of the boxes
          display: 'flex', // Use flexbox for layout
          alignItems: 'center', // Center items vertically
          justifyContent: 'space-between', // Space items evenly horizontally
          padding: '20px', // Add padding for spacing
        }}>
          <div className="content">
            <div className='text-center' style={{
              fontFamily: 'Montserrat',
              fontSize: '25px',
              fontWeight: 700,
              lineHeight: '30.48px',
              textAlign: 'center',
              marginBottom: '20px'
            }}>The Bettors</div>
            <ul className="list-none">
              <li className='flex items-center' style={{ marginBottom: '10px'}}>
                <div className='badge-content'>
                  <div className="badge mr-2">
                    <Image
                      src="/images/success badge.png"
                      alt="badge"
                      width={60}
                      height={50}
                    />
                  </div>
                  Limited control, restricted to odds set by the bookmaker
                </div>
              </li>
              <li className='flex items-center' style={{ marginBottom: '10px'}}>
                <div className='badge-content'>
                  <div className="badge mr-2">
                    <Image
                      src="/images/success badge.png"
                      alt="badge"
                      width={35}
                      height={9}
                    />
                  </div>
                  The house (Bettors) Always win
                </div>
              </li>
              <li className='flex items-center' style={{ marginBottom: '20px'}}>
                <div className='badge-content'>
                  <div className="badge mr-2">
                    <Image
                      src="/images/success badge.png"
                      alt="badge"
                      width={60}
                      height={70}
                    />
                  </div>
                  Fewer built-in mechanisms to prevent excessive spending.
                </div>
              </li>
              <li className='flex items-center' style={{ marginBottom: '10px'}}>
                <div className='badge-content'>
                  <div className="badge mr-2 items-center">
                    <Image
                      src="/images/success badge.png"
                      alt="badge"
                      width={45}
                      height={60}
                    />
                  </div>
                  Less Social, Less engagement, Less fun.
                </div>
              </li>
              <li className='flex items-center' style={{ marginBottom: '10px'}}>
                <div className="badge-content">
                  <div className="badge mr-2 items-center">
                    <Image
                      src="/images/success badge.png"
                      alt="badge"
                      width={40}
                      height={20}
                    />
                  </div>
                  The house (Bettors) Always win
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      

      </div>
      
      <div className='mt-20'>
        Frequently Asked Questions
      </div>
      <div  className="box px-7" style={{
          background: '#0000',
          height: '149px', // Set the height of the boxes
          width: '1257px', // Set the width of the boxes
          display: 'flex', // Use flexbox for layout
          alignItems: 'left', // Center items vertically
          justifyContent: 'space-between', // Space items evenly horizontally
          padding: '20px', // Add padding for spacing
          border: '2px solid #EB9B23',
          marginLeft:'20px'
        }}>
            <div>
                First question goes here
        
            </div>
            <div>
                With PariMate, it&apos; your game, your way. Connect with fellow betting enthusiasts and build your network.
            </div>

      </div>
      <div  className="box mt-7 " style={{
          background: '#0000',
          height: '49px', // Set the height of the boxes
          width: '1257px', // Set the width of the boxes
          display: 'flex', // Use flexbox for layout
          alignItems: 'left', // Center items vertically
          justifyContent: 'space-between', // Space items evenly horizontally
          padding: '20px', // Add padding for spacing
          border: '2px solid #EB9B23',
          
        }}>
            <div>
                Second question goes here
        
            </div>
            

      </div>
      <div  className="box mt-7 mb-7 " style={{
          background: '#0000',
          height: '49px', // Set the height of the boxes
          width: '1257px', // Set the width of the boxes
          display: 'flex', // Use flexbox for layout
          alignItems: 'left', // Center items vertically
          justifyContent: 'space-between', // Space items evenly horizontally
          padding: '20px', // Add padding for spacing
          border: '2px solid #EB9B23',
          
        }}>
            <div>
                Third question goes here
        
            </div>
      </div>
      
        </div>

    
  );
}
