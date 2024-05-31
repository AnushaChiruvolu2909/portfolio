import React from 'react'
import CV from '../../assets/Anusha Chiruvolu Resume.docx'

const CTA = () => {

  return (
    
    <div className="cta">

{/* <a href={require("../../assets/AnushaChiruvoluFullStackDeveloper.pdf")} download="myFile">Download Resume</a> */}

        <a href={CV} download="Anusha Chiruvolu-Front End Developer Resume" className='btn'>Download Resume</a>
        <a href="#contacts" className='btn btn-primary'>Contact Me</a>
    </div>
  )
}

export default CTA