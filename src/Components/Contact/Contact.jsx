import React, { useState } from 'react'
import './Contact.css'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append("access_key", "36361b8c-e603-42c3-8cfc-a35ab6546926");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();
            if (data.success) {
                setResult("Email sent successfully!");
                event.target.reset(); // Clear the form
            } else {
                setResult("Error sending email. Please try again.");
            }
        } catch (error) {
            setResult("Network error. Please check your connection.");
        }
    };

    return (
        <div id='contact' className='contact'>
            <div className="contact-title">
                <h1>Get in touch</h1>
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="Email icon" /> 
                            <p>elijahmwange55@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="Phone icon" /> 
                            <p>+260772903446</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="Location icon" /> 
                            <p>Lusaka Garbon</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="name">Your Name</label>
                    <input type="text" placeholder='Enter Your Name' name='name' required/>
                    <label htmlFor="email">Your Email</label>
                    <input type="email" placeholder='Enter your email' name='email' required/>
                    <label htmlFor="message">Write your Message Here</label>
                    <textarea name="message" id="message" rows="8" placeholder='Enter Your Message' required></textarea>
                    <button type='submit' className="contact-submit">Submit Now</button>
                    {result && <div className="form-result">{result}</div>}
                </form>
            </div>
        </div>
    )
}

export default Contact