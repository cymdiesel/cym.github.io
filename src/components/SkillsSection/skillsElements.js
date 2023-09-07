import styled from 'styled-components'

export const SkillsCardContainer = styled.div`
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: right;
    background: #fff;
    max-width: 1100px;
    margin-left: auto;
    margin-right: auto;

    @media screen and (max-width: 768px) {
        height: 700px;
    }

    @media screen and (max-width: 480px) {
        height: 1000px;
    }
`; 

export const SkillsWrapper = styled.div`
    max-width: 1000px; 
    margin: 10px 10px;
    display: grid; 
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr; 
    align-items: center; 
    grid-gap: 16px;
    padding: 0 10px;

    @media screen and (max-width: 800px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }

    @media screen and (max-width: 450px) {
        grid-template-columns: 1fr 1fr 1fr;
        padding: 0 20px;
    }

    @media screen and (max-width: 80px) {
        grid-template-columns: 1fr 1fr;
        padding: 0 20px;
    }
`;

export const SkillsCard = styled.div`
    background: #967AA1;
    border: #967AA1 solid; 
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

export const SkillsIcon = styled.div`
    color: #34252F; 
    margin-bottom: 10px; 
    margin-top: 10px; 
`;

export const SkillsH1 = styled.h1`
    font-size: 2.5rem;
    color: #048BA8; 
    margin-bottom: 10px; 
    text-align: left;
    padding: 0 30px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const SkillsH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
    color: #fff;
`;


export const SkillsTopline = styled.p`
    color: #BED558;
    font-size: 20px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
    text-align: left;
    padding: 0 30px;
`;