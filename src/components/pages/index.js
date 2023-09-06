import React, {useState} from 'react'
import Sidebar from '../Sidebar'
import Navbar  from '../NavBar'
import HeroSection from '../HeroSection'
import InfoSection from '../InfoSection'
import { homeObjOne } from '../InfoSection/Data'
import Projects from '../Projects'
import Skills from '../SkillsSection'
import Footer from '../Footer'
import Contact from '../ContactSection'


const Home = () => {

    const[isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

  return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <HeroSection />
        <InfoSection {...homeObjOne}/>
        <Skills />
        <Projects />
        <Contact />
        <Footer/>
    </>

  )
}

export default Home
