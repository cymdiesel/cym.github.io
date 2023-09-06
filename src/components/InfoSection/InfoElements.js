import styled from 'styled-components';

export const InfoContainer = styled.div`
    color: #fff;
    padding-bottom: 100px;
    height: 600px;

    @media screen and (max-width: 768px) {
      padding 100px 0;
    }
`;

export const InfoWrapper = styled.div`
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
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
      grid-template-area: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)}
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
    color: ${({lightText}) => (lightText ? '#F18F01' : '#048BA8')};

    @media screen and (max-width: 480px) {
      font-size: 32px;
    }
`;

export const Description = styled.p`
    max-width: 440px;
    margin-bottom: 35px; 
    font-size: 15px;
    line-height: 24px;
    color: #34252F; 
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
    margin-left: 300px;

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;  
    }
`;