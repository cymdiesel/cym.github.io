import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import {
    ContactContainer,
    ContactWrapper, 
    InfoRow, 
    Column1,
    Column2, 
    TextWrapper,
    TopLine,
    Heading,
    Description,
    StyledContactForm

} from './contactElements'


const Contact = () => {

    const linkedIn = <FontAwesomeIcon icon={faLinkedin} /> 

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_6axr4cm', 'template_73eywho', form.current, 'WwafKBnYnpKH_qU1W')
        .then((result) => {
            console.log(result.text);
            alert("Message Sent")
        }, (error) => {
            console.log(error.text);
            alert("Error: Message not sent")
        });
    };
  
    return (
        <>
        <ContactContainer id='contact'>
            <ContactWrapper>
                <InfoRow>
                <Column1>
                <TextWrapper>
                <TopLine >Contact</TopLine>
                <Heading>Talk to me</Heading>
                <Description >Looking to get in touch? Send me a message or find me on LinkedIn. <a href="https://www.linkedin.com/in/cymantha-diesel-416b91204/" >{linkedIn}</a>  </Description>
                    <StyledContactForm>
                    <form ref={form} onSubmit={sendEmail}>
                        <label>Name</label>
                        <input type="text" name="user_name" /><br/>
                        <label>Email</label>
                        <input type="email" name="user_email"/><br/>
                        <label>Message</label>
                        <textarea name="message" /><br/>
                        <input type="submit" value="Send" />
                    </form>
                    </StyledContactForm>
                </TextWrapper>
                </Column1>
                <Column2>
                    
                </Column2>
                </InfoRow>
            </ContactWrapper>
        </ContactContainer>
        </>
  )
}

export default Contact
