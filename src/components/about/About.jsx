import React from 'react'
import './about.css'
import myImage from '../../assets/profilepicture2.jpg'
import {GiGraduateCap} from 'react-icons/gi'
import {BsBookmarkStar} from 'react-icons/bs'
import {TfiWorld} from 'react-icons/tfi'

const About = () => {
  return (
    <section id='about'>
      
      <h2>GET TO KNOW ME</h2>

      <div className="container about__container">

          <div className="about__me">
            <div className="about__me-image">
                <img src={myImage} alt="Me" />
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">

              {/* <article className='about__card'>
                  <GiGraduateCap className='about__icon'/>
                  <h5>Degree</h5>
                  <small>Bachelor of Technology <br /><i>JNTU College of Engineering, Hyderabad, Telangana, India.</i></small>
              </article> */}

              {/* <article className='about__card'>
                  <BsBookmarkStar className='about__icon'/>
                  <h5>Current GPA</h5>
                  <small>8</small>
              </article>

              <article className='about__card'>
                  <TfiWorld className='about__icon'/>
                  <h5>Domains</h5>
                  <small>
                    <ul>
                      <li>Net Centric</li>
                      <li>Mobile Applications</li>
                    </ul>
                  </small>
              </article> */}

              

            </div>
            <p style={{fontStyle:"oblique"}}>
            "As a Senior Front-End Developer with over 9 years of experience, I specialize in creating dynamic, high-performance web applications. My expertise encompasses HTML5, CSS3, JavaScript, Angular, and React, allowing me to deliver engaging and user-friendly interfaces that enhance user experience and meet business objectives. <br/>

Throughout my career, I have consistently demonstrated my ability to lead development projects from conception through deployment. I have a proven track record of collaborating effectively with cross-functional teams, translating complex requirements into intuitive and accessible web solutions. My commitment to staying current with industry trends and best practices ensures that the solutions I develop are not only innovative but also robust and scalable.

<br/>I thrive in Agile environments, contributing to sprint planning, reviews, and retrospectives to drive continuous improvement and team success. My strong problem-solving skills and attention to detail enable me to troubleshoot issues efficiently and optimize application performance.

Passionate about web development, I am always eager to take on new challenges and leverage my skills to create seamless and impactful digital experiences.

 in the industry.<br/> I am a quick learner who is always ready to face challenges".
                    
            </p>

          </div>
      </div>
    </section>
  )
}

export default About