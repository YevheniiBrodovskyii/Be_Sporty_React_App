import styled, { keyframes } from "styled-components";
import {fadeIn } from 'react-animations';


const fade = keyframes`${fadeIn}`;

const CreateAccContent = styled.div`
    position: relative;
    top: 20px;
    display:grid;
    grid-template: 50% 50%;
    width: 600px;
    height:740px;
    overflow-y: scroll;
    margin: 0 auto;
    padding: 20px 40px;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 15px;
    animation: 0.5s ${fade};
    @media (min-width: 1025px) and (max-width: 1200px) {
        overflow-y: scroll;
        width: 80%;
        height: 700px;
        padding: 40px 20px;
    }
    @media (min-width: 769px) and (max-width: 1024px) {
        overflow-y: scroll;
        width: 80%;
        height: 700px;
        padding: 40px 20px;
    }
    @media (min-width: 481px) and (max-width: 768px) {
        overflow-y: scroll;
        width: 85%;
        height:600px;
        padding: 40px 25px;
    }
    @media (min-width: 320px) and (max-width: 480px) {
        overflow-y: scroll;
        width: 90%;
        height:500px;
        padding: 15px 20px;
    }
`

const CreateAccTitle = styled.h1`
    grid-column:1/3;
    text-align:center;
    font-weight: 700;
    font-size: 40px;
    color: #000000;
    margin: 0 0 20px 0;
    @media (min-width: 481px) and (max-width: 768px) {
        font-size: 30px;
    }
    @media (min-width: 320px) and (max-width: 480px) {
        font-size: 25px;
    }
`

const CreateAccSubtitle = styled.h4`
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

const CreateAccInput = styled.input`
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

const CreateAccButton = styled.button`
    width: 200px;
    height: 60px;
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

const CreateAccError = styled.div`
    grid-column:1/3;
    font-size:17px;
    font-weight: 500;
    text-align:center;
    color:red;
    @media (min-width: 320px) and (max-width: 480px) {
        font-size:14px;
    }
`

const CreateAccSuccess = styled.div`
    position: relative;
    top: 150px;
    width: 600px;
    margin: 0 auto;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 50px 0 20px 0 ;
    font-size: 25px;
    text-align: center;
    color: green;
    border-radius: 15px;
    animation: 0.5s ${fade};
    @media (min-width: 320px) and (max-width: 480px) {
        width: 100%;
        font-size:15px;
    }
`

const CreateAccSuccessImgContainer = styled.div`
    width:80%;
    margin: 0 auto;
`

const CreateAccSuccessImg = styled.img`
    margin: 20px 0 0 0;
`

export {CreateAccContent, CreateAccTitle, CreateAccSubtitle, CreateAccInput, CreateAccButton, CreateAccError,CreateAccSuccess, CreateAccSuccessImgContainer, CreateAccSuccessImg};