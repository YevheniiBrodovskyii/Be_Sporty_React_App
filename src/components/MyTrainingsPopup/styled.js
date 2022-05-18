import styled, {keyframes} from "styled-components";
import { NavLink } from "react-router-dom";

import { flipInX, fadeIn } from "react-animations";


const fliper = keyframes`${flipInX}`;
const fader = keyframes`${fadeIn}`;

const MyTrainingsPopupOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width:100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.85);
    animation: ${fader} 0.5s;
    z-index:8899;
`

const MyTrainingsPopupWrapper = styled.div`
    width: 50%;
    margin: 0 auto;
    @media (min-width: 1601px) and (max-width: 1800px) {
        width: 60%;
    }
    @media (min-width: 1201px) and (max-width: 1600px) {
        width: 70%;
    }
    @media (min-width: 320px) and (max-width: 1200px) {
        width: 90%;
    }
`

const MyTrainingsPopupContent = styled.div`
    position: fixed;
    top: 10%;
    width: inherit;
    height:700px;
    background-color: #FFFFFF;
    border-radius: 15px;
    animation: ${fliper} 0.5s;
    @media (min-width: 769px) and (max-width: 1024px) {
        height:600px;
    }
    @media (min-width: 481px) and (max-width: 768px) {
        top:7%;
        height:470px;
    }
    @media (min-width: 320px) and (max-width: 480px) {
        top: 5%;
        height:380px;
    }
    
`
const MyTrainingsPopupTitle = styled.h2`
    width: 45%;
    font-size: 65px;
    font-weight: 700;
    text-align: center;
    color:white;
    background-color: black;
    border-radius: 15px 0px 0px 0px;
    margin: 0;
    padding: 0 0 10px 0;
    @media (min-width: 769px) and (max-width: 1024px) {
        font-size: 55px;
        width: 60%;
    }
    @media (min-width: 481px) and (max-width: 768px) {
        font-size: 45px;
        width: 75%;
    }
    @media (min-width: 320px) and (max-width: 480px) {
        font-size: 35px;
        width: 70%;
    }
`

const MyTrainingsPopupClose = styled.img`
    float: right;
    margin: 7px;
    cursor: pointer;
    @media (min-width: 481px) and (max-width: 768px) {
        width: 45px;
    }
    @media (min-width: 320px) and (max-width: 480px) {
        width: 40px;
    }
`

const MyTrainingsPopupExerciseDelete = styled.img`
    visibility:hidden;
    opacity: 0;
    float:left;
    height: 35px;
    margin: 5px 0px 0px 10px;
    cursor: pointer;
    transition 0.3s all;
    @media (min-width: 1201px) and (max-width: 1600px) {
        height: 30px;
        margin: 4px 0px 0px 10px;
    }
    @media (min-width: 769px) and (max-width: 1024px) {
        height: 27px;
        margin: 4px 0px 0px 10px;
    }
    @media (min-width: 481px) and (max-width: 768px) {
        height: 16px;
        margin: 2px 0px 0px 10px;
    }
    @media (min-width: 320px) and (max-width: 480px) {
        height: 13px;
        margin: 0px 0px 0px 10px;
    }
`

const MyTrainingsPopupExercise = styled.h3`
    width: 75%;
    float: right;
    font-size: 35px;
    background-color: rgba(0, 75, 143, 0.6);
    text-align: right;
    padding: 7px 30px 7px 0;
    margin: 5px 0 5px 0;
    transition: 0.5s all;
    &:hover, &:focus {
        width: 85%;
        ${MyTrainingsPopupExerciseDelete} {
            visibility:visible;
            opacity: 1;
        }
    }
    @media (min-width: 1201px) and (max-width: 1600px) {
        font-size: 30px;
    }
    @media (min-width: 769px) and (max-width: 1024px) {
        font-size: 27px;
    }
    @media (min-width: 481px) and (max-width: 768px) {
        font-size: 16px;
    }
    @media (min-width: 320px) and (max-width: 480px) {
        font-size: 10px;
    }
`

const MyTrainingsPopupBtnContainer = styled.div`
    width: 200px;
    margin: 0 auto;
    @media (min-width: 481px) and (max-width: 768px) {
        width: 174px;
    }
    @media (min-width: 320px) and (max-width: 480px) {
        width: 150px;
    }
    
`

const MyTrainingsPopupBtn = styled(NavLink)`
    position: absolute;
    bottom: 20px;
    text-align: center;
    text-decoration: none;
    background-color: #000000;
    color: #ffff;
    border-radius: 30px;
    border: none;
    font-size: 30px;
    font-weight: 600;
    padding: 15px 20px;
    cursor:pointer;
    transition: 0.5s all;
    &:hover {
        background-color: rgba(0, 75, 143, 0.6);
        color: black;
    }
    @media (min-width: 481px) and (max-width: 768px) {
        font-size:25px;
    }
    @media (min-width: 320px) and (max-width: 480px) {
        font-size: 20px;
    }
`

const MyTrainingsPopupWarning = styled.p`
    position:absolute;
    bottom: 0;
    left:2%;
    font-size:15px;
    font-weight: 700;
    color: rgba(237, 23, 23, 0.8);
    @media (min-width: 481px) and (max-width: 768px) {
        font-size: 12px;
    }
    @media (min-width: 320px) and (max-width: 480px) {
        font-size: 8px;
    }
`



export {MyTrainingsPopupOverlay, MyTrainingsPopupWrapper, MyTrainingsPopupContent, MyTrainingsPopupTitle, MyTrainingsPopupClose, MyTrainingsPopupExerciseDelete, MyTrainingsPopupExercise,MyTrainingsPopupBtnContainer,  MyTrainingsPopupBtn, MyTrainingsPopupWarning};