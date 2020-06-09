import styled from 'styled-components';
import React from 'react';


const MainButton = styled.div`
width: 170px;

  background-color: #04A777;
  color: white;
  border-radius:  23px;
  height: 45px;
  display: flex;
  flex-flow: column no-wrap;
  justify-content: center;
  align-items: center;
  margin: 25px 5px 0 0;
  border: none;
  font-family: 'Oswald', sans-serif;
  outline:none;


`
const AltButton = styled.div`
width: 170px;

  background-color: #820263;
  color: white;
  height: 45px;
  display: flex;
  flex-flow: column no-wrap;
  justify-content: center;
  align-items: center;
  border-radius:  23px;
  margin: 25px 5px 0 0;
  border: none;
  font-family: 'Oswald', sans-serif;
  outline:none;

`
export {MainButton, AltButton};