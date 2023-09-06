import styled from 'styled-components';

export const ContactContainer = styled.div`
    color: #fff;
    padding-bottom: 100px;
    height: 600px;

    @media screen and (max-width: 768px) {
      padding 100px 0;
    }
`;

export const ContactWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 400px;
    width: 100%;
    max-width: 1100px; 
    margin-right: auto;
    margin-left: auto; 
    padding: 0 24px;
    justify-content: center;
`;

export const InfoRow = styled.div`
    display: grid; 
    grid-auto-column: mimax(auto, 1fr);
    align-items: center;
    grid-template-areas: 'col1 col2';

    @media screen and (max-width: 768px) {
      grid-template-area:  'col1 col1' 'col2 col2';
    };
`;

export const Column1 = styled.div`
    margin-bottom: 16px;
    padding: 0 15px;
    grid-area: col1;
`;

export const Column2 = styled.div`
    margin-bottom: 16px;
    padding: 0 15px;
    grid-area: col2;
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px; 
    color: black;
`;

export const TopLine = styled.p`
    color: #BED558;
    font-size: 20px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;

export const Heading = styled.h1`
    margin-bottom: 24px; 
    font-size: 36px;
    ling-height: 1.1px;
    font-weight: 600;
    color: #048BA8;

    @media screen and (max-width: 480px) {
      font-size: 32px;
    }
`;


export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`;

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0; 
    padding-right: 0;
`;

export const Description = styled.p`
    max-width: 440px;
    margin-bottom: 35px; 
    font-size: 15px;
    line-height: 24px;
    color: #34252F; 
`;

export const StyledContactForm = styled.div`
    width: 400px; 

    form {
        display: flex; 
        align-items: flex-start; 
        flex-direction: column; 
        width: 100%;
        font-size: 16px;
    }

    input {
        width: 100%;
        height: 35px;
        padding: 7px;
        outline: none; 
        border-radius: 5px;
        border: 1px solid #967AA1; 

        &:focus {
            border: 2px solid #967AA1;
        }
    }

    textarea {
        max-width: 100%;
        min-width: 100%;
        width: 100%;
        max-height: 100px;
        min-height: 100px; 
        padding: 7px;
        outline: none;
        border-radius: 5px;
        border: 1px solid #967AA1; 

        &:focus {
            border: 2px solid #967AA1;
        }
    }

    input[type='submit'] {
        margin-top: 2rem;
        cursor: pointer;
        background: #F18F01; 
        color: white;
        border: none;
    }
`;