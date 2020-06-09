import React from "react";
import styled from 'styled-components';
import { MainButton, AltButton } from '../../Generic/Buttons';



const Entry = (props) => {
 console.log(props.siteMobile);
  var mobileClasses = {};
  var desktopClasses = {};
 if(!props.siteMobile){
    mobileClasses = {
      display: "none",
    }
    desktopClasses = {
      width: "90%",
    }
  }
 


  return(<EntryElem>
    <div className="desktop" style={desktopClasses}>
      <div className="desktopBar">
        <div className = "option purple"></div>
        <div className = "option"></div>
        <div className = "option"></div>
      </div>
      <div className="screen" style={{backgroundImage: props.siteDesktop  }} >

      </div>
    </div>
    <div className="mobile" style={mobileClasses}>
      <div className="screen" style={{backgroundImage: props.siteMobile  }}>

      </div>
    </div>
    <div className="entryElemContent">
      <h2>{props.title}</h2>
      <h3>{props.scope}</h3>
      <p>{props.shortD}</p>
      
    </div>
  </EntryElem>);

}


const EntryElem = styled.div`
  margin 12.5px 0 50px;
  display: flex; 
  flex-flow: row wrap;
  overflow: visible;

  .entryElemContent{
    width: 100%;

  }
  h2{
    max-width: 480px;
  }
  .mobile{
    width: 25%;
    box-sizing: border-box;
    position: relative;
    right: 40px;
    top: 35px;
    align-self: flex-end;
    @media (max-width: 630px) {
      display: none;
    }   

    .entryContent{
      width: 100%;
    }

    .screen{
      width: 100%;
      border-radius: 23px;
      border: 9px solid #161426;
      box-sizing: border-box;
      padding-top: 178%;
      background-color: white;
      background-repeat: no-repeat;
      background-size: 100%;
      
 
      
    }
  }
  .desktop{
    width: 75%;
    border-radius: 23px;


    box-sizing: border-box;
    @media (max-width: 630px) {
      width: 100% !important;
    }  
    .desktopBar{
      width: 100%;
      display: flex;
      flex-flow: row nowrap;
      box-sizing: border-box;
      background-color: #161426;
      align-items: center;
      height: 50px;
      border-radius: 23px 23px 0 0;
      padding: 25px;
      .option{
        width: 15px;
        height: 15px;
        background-color: #1D1A31;
        border-radius: 100%;
        margin-left: 15px
      }
      .option.purple{
        background-color: #820263;
      }

    }
    .screen{
      width: 100%;
      padding-top: 62.5%; 
      background-color: white;
      border-radius:  0 0 23px 23px;
      background-repeat: no-repeat;
      background-size: 100%;

    }
  }
`;

const InlineFlex = styled.div`
  display: inline-flex;
`;

export default Entry;