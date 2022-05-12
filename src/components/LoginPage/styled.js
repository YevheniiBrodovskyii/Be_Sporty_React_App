
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
    @media (min-width: 769px) and (max-width: 1024px) {
        width: 80%;
        padding: 25px;
    }
    @media (min-width: 481px) and (max-width: 768px) {
        width: 85%;
        padding: 20px;
    }
    @media (min-width: 320px) and (max-width: 480px) {
        width: 90%;
        padding: 15px;
    }
`

const LoginPageTitle = styled.h1`
    grid-column:1/3;
    text-align:center;
    font-weight: 700;
    font-size: 40px;
    color: #000000;
    margin: 0 0 30px 0;
    @media (min-width: 481px) and (max-width: 768px) {
        font-size: 30px;

    }
    @media (min-width: 320px) and (max-width: 480px) {
        font-size: 25px;
    }
`

const LoginPageSubtitle = styled.h4`
    grid-column:1/3;
    font-weight: 700;
    font-size: 26px;
    margin:15px 0 0 0;
    padding:0 0 10px 15px;
    color: #000000;
    @media (min-width: 481px) and (max-width: 768px) {
        font-size: 25px;

    }
    @media (min-width: 320px) and (max-width: 480px) {
        font-size: 20px;
    }
`

const LoginPageInput = styled.input`
    grid-column:1/3;
    width:95%;
    height: 60px;
    margin:0 auto 20px auto ;
    background-color: rgba(0, 0, 0, 0.83);
    border-radius: 25px; 
    border:none;
    text-align:center;
    font-size:20px;   
    font-weight:bold;
    color:white;
    @media (min-width: 320px) and (max-width: 480px) {
        height: 50px;
        font-size:15px;   
    }
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
    @media (min-width: 481px) and (max-width: 768px) {
        width:75%;
        margin: 25px auto 0 auto;
        font-size: 20px;
    }
    @media (min-width: 320px) and (max-width: 480px) {
        width: 70%;
        height:50px;
        margin: 20px auto 0 auto;
        font-size:15px;
    }
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
    @media (min-width: 481px) and (max-width: 768px) {
        font-size: 17px;
    }
    @media (min-width: 320px) and (max-width: 480px) {
        font-size: 15px;
    }
`

const LoginError = styled.div`
    grid-column:1/3;
    font-size:17px;
    font-weight: 500;
    text-align:center;
    color:red;
`

const LoginSuccess = styled.div`
    grid-column:1/3;
    font-size:20px;
    font-weight: 600;
    text-align:center;
    color:green;
    @media (min-width: 320px) and (max-width: 480px) {
        font-size: 15px;
    }
`

export {LoginPageContent, LoginPageTitle, LoginPageSubtitle, LoginPageInput, LoginPageButton, LoginPageButtonGuest, LoginError, LoginSuccess};