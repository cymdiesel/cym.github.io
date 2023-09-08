import styled from 'styled-components'

export const HeroContainer = styled.div`
    background: #fff;
    display: flex; 
    justify-content: center; 
    align-items: center;
    padding: 10px 30px;
    height: 700px;
    position: relative:
    z-index: 1;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto; 
    
`;


export const HeroContent = styled.div`
    z-idex: 3;
    max-width: 1000px; 
    position: aboslute; 
    padding: 0; 
    display: flex; 
    flex-direction: column; 
    flex: 1;
    align-items: left;
    margin-right: auto;
    margin-left: auto; 
`;

export const HeroH1 = styled.h1`
    color: #BED558;
    font-size: 48px;
    text-align: left;

    @media screen and (max-width: 768px) {
        font-size: 40px 
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const HeroP = styled.p`
    margin-top: 24px;
    color: #34252F; 
    font-size: 18px; 
    text-align: left; 
    // max-width: 600px; 

    @media screen and (max-width: 768px) {
        font-size: 14px 
    }

    @media screen and (max-width: 480px) {
        font-size: 10px;
    }
`;

export const HeroImg = styled.div`
    max-width: 555px;
    height: 100%;
    display: flex;
    align-items: center;
`;

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0; 
    padding-right: 0;
`;

export const ResumeButton = styled.button`
    a:link { 
        color: #FFF;
        text-decoration: none;
    }
    a:visited {
        color: #FFF;
        text-decoration: none;
    }
    font-size: 15px;
    font-weight: bold;
    background: #F18F01;
    padding: 15px;
    border: none;
    border-radius: 10px; 
    margin: 50px 0;
    max-width: 175px;


    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;  
    }
`;