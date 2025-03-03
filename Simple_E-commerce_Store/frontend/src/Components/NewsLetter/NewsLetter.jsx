import React, { useState } from 'react';
import './NewsLetter.css';

const NewsLetter = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribeClick = () => {
    if (email) {
      setIsSubscribed(true); // Show the success message
      setEmail(''); // Clear the input field
    }
  };

  const handleCloseMessage = () => {
    setIsSubscribed(false); // Close the success message
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value); // Update the email state on input change
  };

  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <div>
        <input
          type="email"
          placeholder='Your email address'
          value={email}
          onChange={handleEmailChange}
        />
        <button onClick={handleSubscribeClick}>Subscribe</button>
      </div>

      {/* Success Message Dialogue Box */}
      {isSubscribed && (
        <div className="dialogue-box-overlay">
          <div className="dialogue-box">
            <p>Successfully Subscribed!</p>
            <button onClick={handleCloseMessage}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsLetter;
