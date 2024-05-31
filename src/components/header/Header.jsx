import React from 'react'
import './header.css'
import CTA from './CTA'
import me from '../../assets/profilepicture.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    
    
      <header id='home'>

        <div className="container header__container">

          <h5>Hello, I'm</h5>
          <h1>Anusha Chiruvolu</h1>
          <h5 className="text-light">Senior Front-End Developer | UI/UX Lead with 9+ Years of Experience in Web and Enterprise Solutions
</h5>
          <CTA/>
          <HeaderSocials/>

          <div className="me">

            <img src={me} alt='me'/>
          </div>

          <a href="#contacts" className='scroll__down'>Scroll Down</a>
        </div>
      </header>

    
    
  )
}

export default Header