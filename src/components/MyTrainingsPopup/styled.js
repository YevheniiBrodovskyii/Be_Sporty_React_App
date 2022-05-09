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
`

const MyTrainingsPopupWrapper = styled.div`
    width: 50%;
    margin: 0 auto;
`

const MyTrainingsPopupContent = styled.div`
    position: fixed;
    top: 10%;
    width: inherit;
    height:80%;
    background-color: #FFFFFF;
    border-radius: 15px;
    animation: ${fliper} 0.5s;
`
const MyTrainingsPopupTitle = styled.h2`
    width: 45%;
    font-size: 80px;
    font-weight: 700;
    text-align: center;
    color:white;
    background-color: black;
    border-radius: 15px 0px 0px 0px;
    margin: 0;
    padding: 0 0 10px 0;
`

const MyTrainingsPopupClose = styled.img`
    float: right;
    margin: 7px;
    cursor: pointer;
`

const MyTrainingsPopupExerciseClose = styled.img`
    visibility:hidden;
    opacity: 0;
    float:left;
    height: 40px;
    margin: 10px 0px 0px 10px;
    cursor: pointer;
    transition 0.3s all;
`

const MyTrainingsPopupExercise = styled.h3`
    width: 55%;
    float: right;
    font-size: 45px;
    background-color: rgba(0, 75, 143, 0.6);
    text-align: right;
    padding: 5px 30px 5px 0;
    margin: 10px 0 10px 0;
    transition: 0.5s all;
    &:hover, &:focus {
        width: 75%;
        ${MyTrainingsPopupExerciseClose} {
            visibility:visible;
            opacity: 1;
        }
    }
`

const MyTrainingsPopupBtnContainer = styled.div`
    width: 200px;
    margin: 0 auto;
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

`



export {MyTrainingsPopupOverlay, MyTrainingsPopupWrapper, MyTrainingsPopupContent, MyTrainingsPopupTitle, MyTrainingsPopupClose,MyTrainingsPopupExerciseClose, MyTrainingsPopupExercise,MyTrainingsPopupBtnContainer,  MyTrainingsPopupBtn};