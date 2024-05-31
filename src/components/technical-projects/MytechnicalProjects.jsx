import React from 'react'
import './mytechnicalProjects.css'

import IMG4 from '../../assets/salesforce.jpg'
import ehryourway from '../../assets/ehr-your-way.png'
import infosys from '../../assets/logo-infosys.png'

const MytechnicalProjects = () => {
  return (
    <section id='myprojects'>

      <h2>WORK EXPERIENCE</h2>

      <div className="container portfolio__container">

        
        
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG4} alt=""  style={{height:"161px"}}/>
            </div>
            <h3>Salesforce, Inc., Hyderabad, India </h3>
            <small className='text-light'>Demo Engineer</small><br/>
            <small className='text-light'>Project :Integrated Force.com Solutions: End-to-End Salesforce Development & Support   </small><br/>

            <div className="portfolio__item-cta" style={{marginTop: "87px"}}>
            <label style={{fontSize:"14px"}}>
            More Details of this work can be found on my resume 
            </label>
             </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={infosys} alt="" style={{height:"161px"}} />
            </div>
            <h3 style={{fontSize:"17px"}}>Infosys Pvt. Ltd, Hyderabad, India </h3>
            <small className='text-light' style={{fontSize:"15px"}}>Senior Front-End Developer / UI Specialist  </small><br/>
            <small className='text-light'>Project :ARCH Insurance <br/>Client: Arch Cap Group  </small><br/>

            <div className="portfolio__item-cta" style={{marginTop: "87px"}}>
                <label style={{fontSize:"14px"}}>
            More Details of this work can be found on my resume 
            </label>
            </div>
              
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={ehryourway} alt="" style={{height:"161px"}} />
            </div>
            <h3 style={{fontSize:"17px"}}>KJ Systems Pvt Ltd., Hyderabad, India</h3>
            <small className='text-light' style={{fontSize:"15px"}}>Front End Developer & UI/UX Designer  </small><br/>
            <small className='text-light'>Project 1: EHR Your Way <br/>Client: Medical Office Solutions  </small><br/>
            <small className='text-light'>Project 2: APIT Portal Application <br/>Client: Andhra Pradesh Government   </small>

            <div className="portfolio__item-cta">
                <label style={{fontSize:"14px"}}>
            More Details of this work can be found on my resume 
            </label>
            </div>
              
        </article>
        
      </div>
    </section>
  )
}

export default MytechnicalProjects