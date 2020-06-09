import React,{ useState} from 'react';
import styled from 'styled-components';
import  logo from '../../../logo.svg';
import home from '../../../icons/house.svg';
import portfolio from '../../../icons/monitor.svg';
import message from '../../../icons/mail.svg';
import menu from '../../../icons/menu.svg';
import cancel from '../../../icons/cancel.svg';
import {
  NavLink as Link
} from "react-router-dom";
import PortfolioLinks from '../PortfolioLinks';




const Nav = () => {
  const [mobileNavBool, setMobileNavBool] = useState(false);

const toggleNav = () => {
  if(mobileNavBool == false){
    setMobileNavBool(true);
  } else {
    setMobileNavBool(false);
  }
}
let MenuClassList = "";
if(mobileNavBool == true){
  MenuClassList = "top75px"; 
}
  return(<>
    <NavBar>
    <Link to="/"><NavLogo src={logo} alt="Logo for DylanCunningham.xyz"></NavLogo></Link>
      <NavLinks>
      <Link to="/" exact activeClassName='is-active' className="nav"><NavLink src={home} alt="house"></NavLink></Link>
  
      <Link to="/portfolio" activeClassName='is-active' className="nav"><NavLink src={portfolio} alt="portfolio"></NavLink></Link>
        <Link to="/contact" activeClassName='is-active' className="nav"><NavLink src={message} alt="message"></NavLink></Link>

      </NavLinks>
      <NavLogo className="show-on-small" src={menu} onClick={toggleNav}></NavLogo>
      <div className="hide-on-small"></div>
    </NavBar>
    <MobileNavLinks className={MenuClassList}>
    <Link to="/" exact activeClassName='is-active' className="nav"><MobileMenu src={home} alt="house"></MobileMenu></Link>
  
  <Link to="/portfolio" activeClassName='is-active' className="nav"><MobileMenu src={portfolio} alt="portfolio"></MobileMenu></Link>
    <Link to="/contact" activeClassName='is-active' className="nav"><MobileMenu src={message} alt="message"></MobileMenu></Link>
    <MobileMenu src={cancel} onClick={toggleNav}></MobileMenu>



    </MobileNavLinks>



  </>);
}




const MobileNavLinks = styled.div`
  height: 75px;
  position: fixed;
  right: -300px;
  top: 0;
  background-color: #171427;
  transition: right 0.2s ease-out;
  display: flex;
  flex-flow: row;
  z-index: 2;
`;


const NavBar = styled.div`
  z-index: 1;
  background-color: #171427;
  width: 75px;
  padding: 25px;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0; 
  .show-on-small{
    display: none;
  }
  .hide-on-small{
    display: block;
  }
  -webkit-box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.75);
box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.75);
   @media (max-width: 500px) {
    width: 100%;
    height: 75px;
    flex-flow: row;
    .show-on-small{
      display: block;
    }
    .hide-on-small{
      display: none;
    }

  }
`;
const NavLogo = styled.img`
  width: 25px;
  
`;

const MobileMenu = styled.img`
height: 25px;
width: 25px;
padding: 25px;

`;

const NavLinks = styled.div`
  display: flex;
  flex-flow: column; 
  @media (max-width: 500px) {
    display: none;
  }
  
`;
const NavLink = styled.img`

  height: 25px;
  width: 25px;
  padding: 25px 0;

  @media (max-width: 500px) {
    height: 25px;
    width: 25px;
    padding: 25px;
  }


  
`;





export default Nav;