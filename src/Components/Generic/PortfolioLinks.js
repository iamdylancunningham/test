import styled from 'styled-components';
import React from 'react';



const PortfolioLinks = (props)=>{
  const linkArray = [
    {
      title: "Luna Loo",
      link: "#",
    },
  ];

  const ElemLinkList = linkArray.map((link)=>
    <a href="">{link.title} </a>
  );

  return(<BottomNav>I've had the opportunity to work on projects for:&nbsp;<Links> Luna Loo, Ruby Doo, Fast Duck Down, Bottle Recycle, Febreeze</Links></BottomNav>);
};



const BottomNav = styled.div`
  position: fixed;
  bottom:0;
  right: 0;
  padding: 25px;
  display: inline-flex ; 
   @media (max-width: 1023px) {
    display: none;
  }
`;


const Links = styled.div`
  color: #820263;
`;

export default PortfolioLinks;