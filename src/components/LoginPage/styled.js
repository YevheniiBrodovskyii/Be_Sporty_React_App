
import styled, { keyframes } from "styled-components";
import {fadeIn } from 'react-animations';


const fade = keyframes`${fadeIn}`;

const LoginPageContent = styled.div`
    position: relative;
    top: 150px;
    display:grid;
    grid-template-column: 50% 50% ;
    width: 600px;
    margin: 0 auto;
    padding: 40px;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 15px;
    animation: 0.5s ${fade};
`

const LoginPageTitle = styled.h1`
    grid-column:1/3;
    text-align:center;
    font-weight: 700;
    font-size: 40px;
    color: #000000;
    margin: 0 0 30px 0;
`

const LoginPageSubtitle = styled.h4`
    grid-column:1/3;
    font-weight: 700;
    font-size: 26px;
    margin:15px 0 0 0;
    padding:0 0 10px 15px;
    color: #000000;
`

const LoginPageInput = styled.input`
    grid-column:1/3;
    height: 60px;
    margin:0 0 20px 0 ;
    background-color: rgba(0, 0, 0, 0.83);
    border-radius: 25px; 
    border:none;
    text-align:center;
    font-size:20px;   
    font-weight:bold;
    color:white;
`

const LoginPageButton = styled.button`
    width: 200px;
    height:60px;
    margin: 50px auto 0 auto;
    background-color: #000000;
    border-radius: 30px;
    border:none;
    font-size:25px;
    font-weight:bold;
    color:white;
`

const LoginPageButtonGuest = styled.button`
    grid-column:1/3;
    background-color:unset;
    border: none;
    margin: 45px 0 0 0;
    text-decoration: underline;
    color: #000000;
    font-size: 20px;
    font-weight:bold;
`

const LoginError = styled.div`
    grid-column:1/3;
    font-size:17px;
    font-weight: 500;
    text-align:center;
    color:red;
`

export {LoginPageContent, LoginPageTitle, LoginPageSubtitle, LoginPageInput, LoginPageButton, LoginPageButtonGuest, LoginError};