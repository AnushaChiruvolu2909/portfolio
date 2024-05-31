import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Contacts from './components/contacts/Contacts'
import Footer from './components/footer/Footer'
import MytechnicalProjects from './components/technical-projects/MytechnicalProjects'

const App = () => {
  return (
    
    <>
        <Header/>
        <Nav/>
        <About/>
        <Experience/>
        <MytechnicalProjects/>
        <Contacts/>
        <Footer/>

    </>
  )
}

export default App