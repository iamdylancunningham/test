import React,{useEffect} from 'react';
import logo from '../../../logo.svg';
import logo25 from '../../../icons/logo25.svg';
import styled from 'styled-components';
import { MainButton, AltButton } from '../../Generic/Buttons';
import PortfolioLinks from '../../Generic/PortfolioLinks';
import {
  Link
} from "react-router-dom";


function Home() {
  useEffect(()=> {
    document.title = 'DC | Home';
  },[]);
  return (
    <PageLayout>
      <PageHeaderColumn>
        <h1>Dylan Cunningham<span style={{fontWeight: "400", fontSize: "1.5rem"}}>(BSc)</span></h1>
        <h3>Web Developer / App Developer / Freelancer</h3>
        <p>Born in England - Living in Canada. <br/>
I’m a Web Developer working primarily with Wordpress, Shopify, BigCommerce creating custom eCommerce solutions. I’m also experienced with ReactJS, ReactNative, and more. If you like what you see, feel free to contact me. I am open and willing to work on projects with companies based in Europe and North America. 

</p>
        <InlineFlex>
        <Link to="/portfolio" style={{width: "100%", maxWidth: "170px", marginRight: "5px"  }}><MainButton style={{width: "100%", maxWidth: "170px"  }}>Visit My Work</MainButton></Link>
          <Link to="/contact" style={{width: "100%", maxWidth: "170px",  }}><AltButton style={{width: "100%", maxWidth: "170px" }}>Contact Me</AltButton></Link>
        </InlineFlex>

      </PageHeaderColumn>
      <PageContentColumn>
        <LogoLG src={logo25} alt="logo"></LogoLG>

      </PageContentColumn>
    </PageLayout>
  );
}
const InlineFlex = styled.div`
  display: inline-flex;
  width: 100%;
  

`;

const PageLayout = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%:
  background: rgb(29,26,49);
  background: linear-gradient(65deg, rgba(29,26,49,1) 0%, rgba(29,26,49,1) 47%, rgba(26,23,44,1) 47%, rgba(26,23,44,1) 53%, rgba(23,20,39,1) 53%, rgba(23,20,39,1) 100%);
  
  @media (max-width: 1023px) {
    flex-flow: column;
    background: linear-gradient(-205deg, rgba(29,26,49,1) 0%, rgba(29,26,49,1) 47%, rgba(26,23,44,1) 47%, rgba(26,23,44,1) 53%, rgba(23,20,39,1) 53%, rgba(23,20,39,1) 100%);

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
    padding: 0 25px;
  }
  

`;

const LogoLG = styled.img`



  box-sizing: border-box;
  @media (max-width: 1023px) {
    max-width: 500px;
  }

`;


export default Home;
