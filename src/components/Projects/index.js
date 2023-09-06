import React from 'react'
import Icon1 from '../images/mealdiary.png'
import Icon2 from '../images/runtimeterror.png'
import Icon3 from '../images/GUI Jobs page.jpg'
import Icon4 from '../images/books.png'
import {
    ProjectsContainer,
    ProjectsH1, 
    ProjectsWrapper,
    ProjectsIcon, 
    ProjectsCard, 
    ProjectsH2, 
    ProjectsP, 
    ProjectsTopline, 
    ProjectsLink

} from './projectsElements'

const Projects = () => {
  return (
    <ProjectsContainer id= 'projects'>
      <ProjectsTopline>Projects</ProjectsTopline>
      <ProjectsH1>Things I've done</ProjectsH1>
      <ProjectsWrapper>
        <ProjectsCard>
            <ProjectsIcon src={Icon1}/>
            <ProjectsH2>MealDiary</ProjectsH2>
            <ProjectsP>I collaborated on a group project where we conceived and executed an original idea, functioning as a dedicated Scrum team. We leveraged React and MongoDB to bring our vision to life, ensuring a seamless and efficient development process.</ProjectsP>
            <ProjectsLink><a href='https://github.com/COMP231-MealDiary/MealDiary'>GitHub Repo</a></ProjectsLink>
        </ProjectsCard>
        <ProjectsCard>
            <ProjectsIcon src={Icon2}/>
            <ProjectsH2>Runtime-Terror</ProjectsH2>
            <ProjectsP>I took the helm as the project manager in charge of a tournament application development project. Our goal was to empower users to effortlessly create and oversee games, ensuring a seamless and enjoyable experience.</ProjectsP>
            <ProjectsLink><a href='https://github.com/Runtime-Terror-F2022/Runtime-Terror'>GitHub Repo</a></ProjectsLink>
        </ProjectsCard>
        <ProjectsCard>
            <ProjectsIcon src={Icon3}/>
            <ProjectsH2>HR Database</ProjectsH2>
            <ProjectsP>I spearheaded a group project focused on designing and managing a MongoDB database. My responsibilities included developing custom functions and triggers to efficiently operate the database and extract valuable insights from the data.</ProjectsP>
            <ProjectsLink><a href='https://github.com/orgs/COMP214-HR-Database/repositories'>GitHub Repo</a></ProjectsLink>
        </ProjectsCard>
        <ProjectsCard>
            <ProjectsIcon src={Icon4}/>
            <ProjectsH2>Mibrary</ProjectsH2>
            <ProjectsP>I'm currently working on an library app, which serves as a creative playground for me to enhance my skills in UI design and Python development. This project allows me to delve deeper into these areas while crafting a valuable tool for fellow book lovers.</ProjectsP>
        </ProjectsCard>
      </ProjectsWrapper>
    </ProjectsContainer>
  )
}

export default Projects
