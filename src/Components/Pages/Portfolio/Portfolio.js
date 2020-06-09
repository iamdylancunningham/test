import React,{useEffect} from 'react';
import logo from '../../../logo.svg';
import logo25 from '../../../icons/logo25.svg';
import styled from 'styled-components';
import { MainButton, AltButton } from '../../Generic/Buttons';
import PortfolioLinks from '../../Generic/PortfolioLinks';
import {
  Link
} from "react-router-dom";
import Entry from './SingleEntry';



function Portfolio() {
  useEffect(()=> {
    document.title = 'DC | My Portfolio';
  },[]);

  let EntriesArr = [{
    title: "All Seasons Gazebos",
    scope: "WooCommerce Theme Development",
    shortD: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus auctor commodo diam, eu imperdiet urna finibus a. Pellentesque vulputate sapien et ex commodo, nec lacinia ligula tempus. ",
    siteDesktop: "url(./images/asg.png)",
    siteMobile: "url(./images/asgmob.jpg)",
    infoLink: "",
    liveLink: "",

  },
  {
    title: "Enamel Pin Factory",
    scope: "Shopify Theme Development",
    shortD: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus auctor commodo diam, eu imperdiet urna finibus a. Pellentesque vulputate sapien et ex commodo, nec lacinia ligula tempus. ",
    siteDesktop: "url(./images/epfdesk.png)",
    siteMobile: "url(./images/epfmob.jpg)",
    infoLink: "",
    liveLink: "",

  },
  {
    title: "Ovo Studios",
    scope: "Wordpress Theme Development",
    shortD: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus auctor commodo diam, eu imperdiet urna finibus a. Pellentesque vulputate sapien et ex commodo, nec lacinia ligula tempus. ",
    siteDesktop: "url(./images/ovostudio.png)",
    siteMobile: "url(./images/ovo.jpg)",
    infoLink: "",
    liveLink: "",

  },
  {
    title: "Lusso Stone",
    scope: "Wordpress Theme Development",
    shortD: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus auctor commodo diam, eu imperdiet urna finibus a. Pellentesque vulputate sapien et ex commodo, nec lacinia ligula tempus. ",
    siteDesktop: "url(./images/lusso.png)",
    siteMobile: "",
    infoLink: "",
    liveLink: "",

  },
  {
    title: "Dometic Distribution",
    scope: "Wordpress Theme Development",
    shortD: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus auctor commodo diam, eu imperdiet urna finibus a. Pellentesque vulputate sapien et ex commodo, nec lacinia ligula tempus. ",
    siteDesktop: "url(./images/dd.png)",
    siteMobile: "url(./images/ddmob.jpg)",
    infoLink: "",
    liveLink: "",

  },
  {
    title: "Trust Legal",
    scope: "Wordpress Theme Development",
    shortD: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus auctor commodo diam, eu imperdiet urna finibus a. Pellentesque vulputate sapien et ex commodo, nec lacinia ligula tempus. ",
    siteDesktop: "url(./images/trustlegal.png)",
    siteMobile: "url(./images/trustlegalmob.jpg)",
    infoLink: "",
    liveLink: "",

  },
  {
    title: "Oak Store",
    scope: "Wordpress Theme Development",
    shortD: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus auctor commodo diam, eu imperdiet urna finibus a. Pellentesque vulputate sapien et ex commodo, nec lacinia ligula tempus. ",
    siteDesktop: "url(./images/oakstore.jpg)",
    siteMobile: "",
    infoLink: "",
    liveLink: "",

  },
  {
    title: "CandleWick of Guisborough",
    scope: "Wordpress Theme Development",
    shortD: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus auctor commodo diam, eu imperdiet urna finibus a. Pellentesque vulputate sapien et ex commodo, nec lacinia ligula tempus. ",
    siteDesktop: "url(./images/candlewick.png)",
    siteMobile: "url(./images/candlewickmob.jpg)",
    infoLink: "",
    liveLink: "",

  },
 ];

  let EntriesElem = EntriesArr.map((data, index)=> {return(
    <Entry title={data.title} scope={data.scope} shortD={data.shortD} siteDesktop={data.siteDesktop} siteMobile={data.siteMobile} infoLink={data.infoLink} liveLink={data.liveLink} />
  )}
  );

  return (
    <PageLayout>
      <PageHeaderColumn>
        <h1>My Portfolio</h1>
        <h3>Web Developer / App Developer / Freelancer</h3>
        <p>Born in England, Living in Canada. I am interested in freelance opportunities - especially ambitious or large projects. however, if you have other questions, please don hesitate to contact me
</p>
        <InlineFlex>
        <Link to="/contact"><AltButton>Contact Me</AltButton></Link>
        </InlineFlex>

      </PageHeaderColumn>
      <PageContentColumn>
        <PortfolioEntries>
          {EntriesElem}
          

        </PortfolioEntries>
      </PageContentColumn>
    </PageLayout>
  );
}



const PortfolioEntries = styled.div`
  max-height: 90vh;
  margin: 5vh 0;
  width: 100%;
  overflow-y: auto;
  @media (max-width: 1023px) {
    max-height: none;
    overflow-y: auto;

  }
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
  background: linear-gradient(295deg, rgba(29,26,49,1) 0%, rgba(29,26,49,1) 47%, rgba(26,23,44,1) 47%, rgba(26,23,44,1) 53%, rgba(23,20,39,1) 53%, rgba(23,20,39,1) 100%);
  background-attachment: fixed;
  @media (max-width: 1023px) {
    flex-flow: column;
    background: linear-gradient(-205deg, rgba(29,26,49,1) 0%, rgba(29,26,49,1) 47%, rgba(26,23,44,1) 47%, rgba(26,23,44,1) 53%);

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
  padding: 0 100px 0 50px; 
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


export default Portfolio;
