
import React, { useState } from 'react';


interface EarlyBirdModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EarlyBirdModal: React.FC<EarlyBirdModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle the email submission logic here
    console.log('Email submitted:', email);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center">
  <div
    className="bg-white p-6 rounded-lg shadow-lg "
    style={{
      width: '608px',
      height: '499px',
      
      opacity: '3', 
    }}
  >
    <h2
  style={{
    width: '',
    height: '39px',
    position: 'relative',
    alignItems:'center'
    
  }}
  className="text-2xl font-bold text-center"
>
  Get Early Bird Access!
</h2>
    <p 
     style={{
        width: '100%',
        height: '89px',
        
        
      }}
    className="justify-evenly py-3 ">Join PariMate now and become an Early Bird! As a founding member, you&apos;ll unlock exclusive benefits to kickstart your peer-to-peer betting experience.</p>
    <form 
    className='py-8'
    onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Enter your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">Join</button>
    </form>
    <ul>
      <li><strong>Bonus Welcome Points:</strong> Get a head start on the competition with a bonus of N1,000 worth of first bets.</li>
      <li><strong>Early Access to Features:</strong> Enjoy dedicated support to ensure smooth and productive feedback to help shape the future of PariMate.</li>
      <li><strong>Priority Customer Support:</strong> Be among the first to experience upcoming enhancements on our platform dedicated exclusively for our early birds.</li>
    </ul>
    <button onClick={onClose} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Close</button>
  </div>
</div>

  );
};

export default EarlyBirdModal;
