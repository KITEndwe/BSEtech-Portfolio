import React from 'react'
import './About.css'
import about_me from '../../assets/about_me.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={about_me} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am an experienced full stack Developer with over 3 years professional experience in the field. Throughout my career, I had the privilege of colaborating with classmates, and contributing to our succes and growth.</p>
                    <p>My passion for full stack Development is not only reflected in my extensive experience but also anthusiasm and dedication i bring to each Project.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p> <hr style={{width:"80%"}} /> </div>
                    <div className="about-skill"><p>React Js & Node Js</p> <hr style={{width:"40%"}} /> </div>
                    <div className="about-skill"><p>JavaScript & Java</p> <hr style={{width:"55%"}} /> </div>
                    <div className="about-skill"><p>PHP & SQL</p> <hr style={{width:"40%"}} /> </div>
                    <div className="about-skill"><p>UI & UX</p> <hr style={{width:"50%"}} /> </div>
                    <div className="about-skill"><p>Photoshop</p> <hr style={{width:"50%"}} /> </div>
                    <div className="about-skill"><p>CorelDraw</p> <hr style={{width:"40%"}} /> </div>
                    <div className="about-skill"><p>Phone Flashing</p> <hr style={{width:"30%"}} /> </div>
                </div>
            </div>
        </div>
        <div className="about-acheivements">
            <div className="about-acheivement">
                <h1>3+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-acheivement">
                <h1>50+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-acheivement">
                <h1>10+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>
    </div>
  )
}

export default About