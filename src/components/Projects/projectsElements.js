import styled from 'styled-components'

export const ProjectsContainer = styled.div`
    height: 900px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: right;
    background: #fff;
    max-width: 1100px;
    margin-left: auto;
    margin-right: auto;

    @media screen and (max-width: 768px) {
        height: 1500px;
    }

    @media screen and (max-width: 480px) {
        height: 2000px;
    }
`; 

export const ProjectsWrapper = styled.div`
    max-width: 1000px; 
    margin: 10px 10px;
    display: grid; 
    grid-template-columns: 1fr 1fr 1fr 1fr; 
    align-items: top; 
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;

export const ProjectsCard = styled.div`
    background: #fff;
    border: #967AA1 solid 5px; 
    display: flex; 
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px; 
    max-height: 460px;
    max-width: 300px;
    padding: 0 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2); 
    transition: all 0.2s ease-in-out;

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;  
    }
`;

export const ProjectsIcon = styled.img`
    height: 140px; 
    width: 160px;
    margin-bottom: 10px; 
    margin-top: 10px; 
`;

export const ProjectsH1 = styled.h1`
    font-size: 2.5rem;
    color: #F18F01; 
    margin-bottom: 10px; 
    text-align: right;
    padding: 0 50px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const ProjectsH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
`;

export const ProjectsP = styled.p`
    font-size: 10px;
    text-align: left;
    margin-bottom: 10px;

`;

export const ProjectsTopline = styled.p`
    color: #BED558;
    font-size: 20px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
    text-align: right;
    padding: 0 50px;
`;

export const ProjectsLink = styled.button`
    a:link { 
        color: #BED558;
        text-decoration: none;
    }
    a:visited {
        color: #BED558;
        text-decoration: none;
      }
    font-size: 10px;
    font-weight: bold;
    background: #967AA1;
    padding: 10px;
    margin: 10px;
    border: none;
    border-radius: 10px;S
`;