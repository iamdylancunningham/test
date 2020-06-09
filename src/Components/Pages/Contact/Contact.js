import React,{useEffect} from 'react';
import logo from '../../../logo.svg';
import logo25 from '../../../icons/logo25.svg';
import styled from 'styled-components';
import { MainButton, AltButton } from '../../Generic/Buttons';
import PortfolioLinks from '../../Generic/PortfolioLinks';
import {
  Link
} from "react-router-dom";



function Contact() {

const submitForm = () => {
  let enquiry = {};
  enquiry.name = document.querySelector("#name").value;
  enquiry.email = document.querySelector("#email").value;
  enquiry.message = document.querySelector("#message").value;




}








  useEffect(()=> {
    document.title = 'DC | Contact';
  },[]);

  return (
    <PageLayout>
      <PageHeaderColumn>
        <h1>Contact Me</h1>
        <h3>Web Developer / App Developer / Freelancer</h3>
        <p>Born in England, Living in Canada. I am interested in freelance opportunities - especially ambitious or large projects. however, if you have other questions, please don hesitate to contact me
</p>
        <InlineFlex>
        <Link to="/portfolio"><MainButton>Visit My Work</MainButton></Link>
        </InlineFlex>

      </PageHeaderColumn>
      <PageContentColumn>
        <ContactForm action="https://formspree.io/mvowajqz" method="POST">
          <TextInput type="text" id="name" name="name" placeholder="Name:"/>
          <TextInput type="text" id="email" name="email" placeholder="Email:"/>
          <TextAreaInput name="message" id="message" placeholder="Message:"/>
          <FormButton type="submit" onClick={submitForm} value="Send"/>
        </ContactForm>

      </PageContentColumn>
    </PageLayout>
  );
}

const ContactForm = styled.form`
  display: flex;
  flex-flow: column;
  width: 100%;
  
`;
const TextAreaInput = styled.textarea`
width: 100%;
max-width: 100%;
min-width: 100%;
box-sizing: border-box;
border-radius: 11px;
min-height: 180px;
border: none;
padding: 1rem;
margin-bottom: 0.6rem;
outline:none;
background-color: #161426;
color: white;
`;
const TextInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  font-family:monospace;
  border-radius: 11px;
  height: 45px;
  border: none;
  padding: 1rem;
  margin-bottom: 0.6rem;
  outline:none;
  background-color: #161426;
  color: white;

`;

const FormButton = styled.input`
width: 100%;
max-width: 200px;
align-self: flex-end;

background-color: #820263;
color: white;
height: 45px;
display: flex;
flex-flow: column no-wrap;
justify-content: center;
align-items: center;
border-radius:  23px;

border: none;
font-family: 'Oswald', sans-serif;
outline:none;
`;

const InlineFlex = styled.div`
  display: inline-flex;

`;


const PageLayout = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%:
  background: rgb(29,26,49);
  background: linear-gradient(-65deg, rgba(29,26,49,1) 0%, rgba(29,26,49,1) 47%, rgba(26,23,44,1) 47%, rgba(26,23,44,1) 53%, rgba(23,20,39,1) 53%, rgba(23,20,39,1) 100%);
  
  @media (max-width: 1023px) {
    flex-flow: column;
    background: linear-gradient(-25deg, rgba(29,26,49,1) 0%, rgba(29,26,49,1) 47%, rgba(26,23,44,1) 47%, rgba(26,23,44,1) 53%, rgba(23,20,39,1) 53%, rgba(23,20,39,1) 100%);

  }

`;
const PageHeaderColumn = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  width: 50%;
  padding: 100px; 
  box-sizing: border-box;
  @media (max-width: 1023px) {
    width: 100%;
    padding: 50px; 
  }
  @media (max-width: 500px) {
    padding: 75px 25px;
  }
  

`;
const PageContentColumn = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  width: 50%;
  padding: 100px; 

  box-sizing: border-box;
  align-items: flex-start;
  @media (max-width: 1023px) {
    width: 100%;
    padding: 0 50px; 
    align-items: flex-start;
  }  @media (max-width: 500px) {
    padding: 0px 25px;
  }
  

`;

const LogoLG = styled.img`



  box-sizing: border-box;
  @media (max-width: 1023px) {
    max-width: 500px;
  }

`;


export default Contact;
