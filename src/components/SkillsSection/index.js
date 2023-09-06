import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPython, faHtml5, faCss3, faLinux, faJsSquare, faJava } from '@fortawesome/free-brands-svg-icons'
import { faCode, faDatabase } from '@fortawesome/free-solid-svg-icons'
import {
    SkillsCardContainer,
    SkillsH1, 
    SkillsWrapper,
    SkillsIcon, 
    SkillsCard, 
    SkillsH2, 
    SkillsTopline

} from './skillsElements'

const Skills = () => {
    const python = <FontAwesomeIcon icon={faPython} /> 
    const cSharp = <FontAwesomeIcon icon={faCode} /> 
    const html5 = <FontAwesomeIcon icon={faHtml5} /> 
    const css = <FontAwesomeIcon icon={faCss3} /> 
    const sql = <FontAwesomeIcon icon={faDatabase} /> 
    const linux = <FontAwesomeIcon icon={faLinux} /> 
    const javaScript= <FontAwesomeIcon icon={faJsSquare} /> 
    const java = <FontAwesomeIcon icon={faJava} /> 

    return (
    <SkillsCardContainer id= 'skills'>
      <SkillsTopline>Skills</SkillsTopline>
      <SkillsH1>Things I know</SkillsH1>
      <SkillsWrapper>
        <SkillsCard>
            <SkillsIcon>{python}</SkillsIcon>
            <SkillsH2>Python</SkillsH2>
        </SkillsCard>
        <SkillsCard>
            <SkillsIcon>{cSharp}</SkillsIcon>
            <SkillsH2>C#</SkillsH2>
        </SkillsCard>
        <SkillsCard>
            <SkillsIcon>{html5}</SkillsIcon>
            <SkillsH2>HTML5</SkillsH2>
        </SkillsCard>
        <SkillsCard>
            <SkillsIcon>{css}</SkillsIcon>
            <SkillsH2>CSS</SkillsH2>
        </SkillsCard>
        <SkillsCard>
            <SkillsIcon>{sql}</SkillsIcon>
            <SkillsH2>SQL</SkillsH2>
        </SkillsCard>
        <SkillsCard>
            <SkillsIcon>{linux}</SkillsIcon>
            <SkillsH2>Linux</SkillsH2>
        </SkillsCard>
        <SkillsCard>
            <SkillsIcon>{javaScript}</SkillsIcon>
            <SkillsH2>JavaScript</SkillsH2>
        </SkillsCard>
        <SkillsCard>
            <SkillsIcon>{java}</SkillsIcon>
            <SkillsH2>Java</SkillsH2>
        </SkillsCard>
        <SkillsCard>
            <SkillsIcon>{python}</SkillsIcon>
            <SkillsH2>Python</SkillsH2>
        </SkillsCard>
      </SkillsWrapper>
    </SkillsCardContainer>

  )
}

export default Skills