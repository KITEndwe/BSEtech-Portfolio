import React, { useState } from 'react'
import './Footer.css'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    
    if (!email) {
      alert('Please enter your email address');
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address');
      return;
    }

    // Create mailto link with subject and body
    const subject = 'New Subscription Request';
    const body = `Hello Elijah,\n\nI would like to subscribe to your updates. Please add me to your mailing list.\n\nMy email: ${email}\n\nBest regards.`;
    
    const mailtoLink = `mailto:elijahmwange55@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Clear the input after submission
    setEmail('');
    
    // Optional: Show success message
    alert('Thank you for subscribing! Please send the email to complete your subscription.');
  }

  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <p>I am a full stack developer from Zambia with over 3 years of experience in developing modern websites</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="Email icon" />
                    <input 
                      type="email" 
                      placeholder='Enter your email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                </div>
                <div className="footer-subscribe" onClick={handleSubscribe}>
                  Subscribe
                </div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">© Elijah Mwange. All rights reserved</p>
            <div className="footer-bottom-right">
                <p>Terms of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer