import styled from "styled-components";
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';

export const Nav = styled.nav`
        background: #fff;
        height: 80px;
        margin-top: -80px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1rem;
        opacity: 75%;
        position: sticky;
        top: 0;
        z-index: 10;

        @media screen and (max-width: 960px) {
            transition: 0.8s all ease;
        }
`;

export const NavbarContainer = styled.div`
        display: flex; 
        justify-content: space-between;
        height: 80px; 
        z-index: 1;
        width: 100%;
        padding: 24px;
        max-width: 1100px;
`;


export const MobileIcon = styled.div`
    display: none; 
    
    @media screen and (max-width: 500px) {
        display: block;
        position: absolute;
        top: 0; 
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #34252F;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -20px;
    padding-top: 20px;

    @media screen and (max-width: 500px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 40px;

`;

export const NavLinks = styled(LinkS)`
    color: #34252F;
    display: flex;
    align-items: center;
    text-decoration: none;
    font-weight: bold;
    padding: 10px 1rem;
    height: 100%;
    cursor: pointer;

    &:hover {
        color: #967AA1; 
        transition: 0.2s ease-in-out;  
    }

    &:active {
      border-bottom: 3px solid #967AA1;  
    };
`;