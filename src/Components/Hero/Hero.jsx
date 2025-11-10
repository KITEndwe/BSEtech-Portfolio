import React from 'react'
import './Hero.css'
import hero from '../../assets/hero.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import resume from '../../assets/resume.pdf'

const Hero = () => {
  // Function to handle resume opening
  const handleResumeClick = () => {
    // Open the imported PDF in a new tab
    window.open(resume, '_blank', 'noopener,noreferrer');
  }

  return (
    <div id='home' className='hero'>
        <img src={hero} alt="Elijah Mwange" />
        <h1><span>I'm Kitendwe Mwange Elie</span>, full stack developer based in Zambia</h1>
        <p>I am a Full stack developer, UI/UX designer from Lusaka Zambia with over 3 years of experience in various tasks</p>
        <div className="hero-action">
            <div className="hero-connect"> 
              <AnchorLink className='anchor-link' offset={50} href='#contact'>
                Connect with Me
              </AnchorLink> 
            </div>
            <div className="hero-resume" onClick={handleResumeClick}>
              My Resume
            </div>
        </div>
    </div>
  )
}

export default Hero