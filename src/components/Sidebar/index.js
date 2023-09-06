import React from 'react'
import {
    SidebarContainter, 
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink
} from './SideBarElements'

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainter isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
            <SidebarLink to="home" onClick={toggle}>
                Home
            </SidebarLink>
            <SidebarLink to="about" onClick={toggle}>
                About
            </SidebarLink>
            <SidebarLink to="skills" onClick={toggle}>
                Skills
            </SidebarLink>
            <SidebarLink to="projects" onClick={toggle}>
                Projects
            </SidebarLink>
            <SidebarLink to="contact" onClick={toggle}>
                Contact
            </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainter>
  )
}

export default Sidebar
