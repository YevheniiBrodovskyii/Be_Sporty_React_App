import styled, { keyframes} from "styled-components";
import { fadeIn, fadeInLeft, fadeInRight} from 'react-animations';

const fader = keyframes`${fadeIn}`;
const faderLeft = keyframes`${fadeInLeft}`;
const faderRight = keyframes`${fadeInRight}`;


const AboutUsContent = styled.div`
    display:grid;
    grid-template: auto auto auto / 58% 40%;
    column-gap: 2%;
    row-gap: 15%;
    width:100%;
`

const AboutUsTitle = styled.h1`
    grid-column: 1/3;
    width:30%;
    font-size: 50px;
    margin:40px auto 0 auto;
    padding:20px;
    text-align:center;
    background-color: #ffffff;
    color:black;
    border-radius:50px;
    animation: ${faderRight} 1s;
`

const AboutUsDescr = styled.section`
    border-radius:50px;
    border: 2px solid black;
    padding: 30px;
    font-size:26px;
    background-color: #ffffff;
    color:black;
    word-wrap: break-word;
    animation: ${fader} 1s;
`

const AboutUsImg = styled.img`
    width:100%;
    border: 2px solid #ffffff;
    border-radius: 50px;
    animation: ${fader} 1s;
`

const AboutUsAuthors = styled.section`
    grid-column: 1/3;
    border-radius:50px;
    border: 2px solid black;
    padding: 30px;
    width:50%;
    margin: 0 auto;
    font-size:26px;
    font-weight:700;
    background-color: #ffffff;
    color:black;
    word-wrap: break-word;
    animation: ${faderLeft} 1s;
`

const AboutUsAuthorsSpan = styled.a`
    font-size:30px;
    font-weight:700;
    background-color: #ffffff;
    color:black;
    &:hover {
        color:red;
    }
`

export {AboutUsContent, AboutUsTitle, AboutUsDescr, AboutUsImg, AboutUsAuthors, AboutUsAuthorsSpan};