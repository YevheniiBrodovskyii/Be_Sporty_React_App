import styled, { keyframes } from "styled-components";
import {fadeIn } from 'react-animations';


const fade = keyframes`${fadeIn}`;

const CreateAccContent = styled.div`
    position: relative;
    top: 20px;
    display:grid;
    grid-template: 50% 50%;
    width: 600px;
    margin: 0 auto;
    padding: 20px 40px 20px 40px;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 15px;
    animation: 0.5s ${fade};
`

const CreateAccTitle = styled.h1`
    grid-column:1/3;
    text-align:center;
    font-weight: 700;
    font-size: 40px;
    color: #000000;
    margin: 0 0 20px 0;
`

const CreateAccSubtitle = styled.h4`
    grid-column:1/3;
    font-weight: 700;
    font-size: 26px;
    margin:15px 0 0 0;
    padding:0 0 10px 15px;
    color: #000000;
`

const CreateAccInput = styled.input`
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
`

const CreateAccError = styled.div`
    grid-column:1/3;
    font-size:17px;
    font-weight: 500;
    text-align:center;
    color:red;
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
`

const CreateAccSuccessImgContainer = styled.div`
    width:80%;
    margin: 0 auto;
`

const CreateAccSuccessImg = styled.img`
    margin: 20px 0 0 0;
`

export {CreateAccContent, CreateAccTitle, CreateAccSubtitle, CreateAccInput, CreateAccButton, CreateAccError,CreateAccSuccess, CreateAccSuccessImgContainer, CreateAccSuccessImg};