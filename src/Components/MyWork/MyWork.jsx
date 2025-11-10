import React from 'react'
import './MyWork.css'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const MyWork = () => {
  
  const handleShowMore = () => {
    //  GitHub URL
    window.open('https://github.com/', '_blank', 'noopener,noreferrer');
  }

  const handleImageClick = (projectLink) => {
    if (projectLink) {
      window.open(projectLink, '_blank', 'noopener,noreferrer');
    }
  }

  return (
    <div id='work' className='mywork'>
        <div className="mywork-title">
            <h1>My latest Work</h1>
        </div>
        <div className="mywork-container">
            {mywork_data.map((work,index)=>{
                return (
                  <img 
                    key={index} 
                    src={work.w_img} 
                    alt={work.w_name || `Project ${index + 1}`}
                    onClick={() => handleImageClick(work.w_link)}
                  />
                )
            })}
        </div>
        <div className="mywork-showmore" onClick={handleShowMore}>
            <p>Show More</p>
            <img src={arrow_icon} alt="Arrow icon" />
        </div>
    </div>
  )
}

export default MyWork