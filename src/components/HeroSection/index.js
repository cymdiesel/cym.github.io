import React from 'react'
import { HeroContainer, ResumeButton, HeroContent, HeroH1, HeroP, HeroImg } from './HeroElements'
import Typewriter from 'typewriter-effect'
import cymantha from '../images/cymportfolio.png'
import pdf from "../Resume/Cymantha.pdf"

const HeroSection = (img, alt) => {

  return (
    <HeroContainer id="home">
   
      <HeroContent>
        <HeroH1>
            <Typewriter options={{
                strings: ["Hi! I'm Cymantha."],
                autoStart: true,
                loop: true
            }}/>
        </HeroH1>
        <HeroP>Software Engineer, aspiring UI Developer and a helicopter dog mom.</HeroP>
        <ResumeButton>
                <a href={pdf} download>Cym's Resume</a>
        </ResumeButton>
      </HeroContent>
      <HeroImg ><img src={cymantha} alt='Cymantha' height={300} width={300}/></HeroImg>
    </HeroContainer>
  )
}

export default HeroSection
