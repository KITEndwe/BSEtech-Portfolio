import React from 'react'
import './Services.css'
import Services_Data from '../../assets/services_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const Services = () => {
  
  const handleReadMore = (link) => {
    if (link && link !== '#') {
      window.open(link, '_blank', 'noopener,noreferrer');
    } else {
      // Optional: Add fallback behavior for services without links
      alert('More information coming soon!');
    }
  }

  return (
    <div id='services' className='services'>
        <div className="services-title">
            <h1>My Services</h1>
            <div className="services-title-underline"></div>
        </div>
        <div className="services-container">
            {Services_Data.map((service,index)=>{
                return (
                  <div key={index} className='services-format'>
                      <div className="services-header">
                        <h3>{service.s_no}</h3>
                        <h2>{service.s_name}</h2>
                      </div>
                      <p>{service.s_desc}</p>
                      {/* <div 
                        className='services-readmore' 
                        onClick={() => handleReadMore(service.s_link)}
                        role="button"
                        tabIndex={0}
                        onKeyPress={(e) => e.key === 'Enter' && handleReadMore(service.s_link)}
                      >
                          <p>Read More</p>
                          <img src={arrow_icon} alt="Arrow icon" />
                      </div> */}   
                      {/* The above code once uncommented will be desplaying the arow icon on each service and once the user click on it it will take them on new web site  */}
                  </div>
                )
            })}
        </div>
    </div>
  )
}

export default Services