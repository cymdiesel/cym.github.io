import React from 'react'
import {
    InfoContainer, 
    InfoWrapper, 
    InfoRow, 
    Column1,
    Column2, 
    TextWrapper,
    TopLine,
    Heading,
    ImgWrap,
    Img,
    Description,
    ResumeButton
} from './InfoElements'
import pdf from "../Resume/Cymantha.pdf"

const InfoSection = ({lightBg, id, imgStart, topLine, lightText, darkText, headline,description, img, alt}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id} >
        <InfoWrapper>
            <InfoRow imgStart={imgStart}>
              <Column1>
              <TextWrapper>
                <TopLine >{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Description darkText={darkText}>{description}</Description>
                <ResumeButton>
                <a href={pdf} download>Cym's Resume</a>
                </ResumeButton>
              </TextWrapper>
              </Column1>
              <Column2>
                <ImgWrap>
                <Img src={img} alt={alt}/>
                </ImgWrap>
              </Column2>
            </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSection