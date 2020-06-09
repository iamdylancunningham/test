import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Nav from './Components/Generic/Nav/Nav';
import Home from './Components/Pages/Home/Home';
import Contact from './Components/Pages/Contact/Contact';
import Portfolio from './Components/Pages/Portfolio/Portfolio';

import * as serviceWorker from './serviceWorker';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Layout = styled.div`
  display: flex;
  flex-flow: row no-wrap;
`;
const PageContainer = styled.div`
  width: calc(100% - 75px);
  margin-left: 75px;
  @media (max-width: 500px) {
    width: 100%;
    margin 0;
  }
  

`;


ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Nav />
      <PageContainer>
      <Route path="/portfolio">
          <Portfolio/>
          </Route>
          <Route path="/contact">
          <Contact/>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        
        </PageContainer>

    </Router>



  </React.StrictMode>,
  document.getElementById('root')
);

function changeThemeColor() {
  var metaThemeColor = document.querySelector("meta[name=theme-color]");
  if(Math.random() >= 0.5){
    metaThemeColor.setAttribute("content", "#04A777");
  } else {
    metaThemeColor.setAttribute("content", "#820263");
  }
}
changeThemeColor();



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
