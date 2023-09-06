import React from 'react'
import { HeroContainer, HeroBg, HeroContent, HeroH1, HeroP, HeroImg, Img} from './HeroElements'
import Typewriter from 'typewriter-effect'
import cymantha from '../images/cymportfolio.png'

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
      </HeroContent>
      <HeroImg ><img src={cymantha} alt='Cymantha' height={300} width={300}/></HeroImg>
    </HeroContainer>
  )
}

export default HeroSection
