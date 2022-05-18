import styled, { keyframes} from "styled-components";
import { fadeIn, fadeInLeft, fadeInRight} from 'react-animations';

const fader = keyframes`${fadeIn}`;
const faderLeft = keyframes`${fadeInLeft}`;
const faderRight = keyframes`${fadeInRight}`;


const AboutUsContent = styled.div`
    display:grid;
    grid-template: auto auto auto / 58% 40%;
    column-gap: 2%;
    row-gap: 10%;
    width:100%;
    @media (min-width: 320px) and (max-width: 1200px) {
        grid-template: auto auto auto auto / auto;
        row-gap: 2%;
    }
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
    @media (min-width: 1201px) and (max-width: 1730px) {
        width:60%;
        animation: ${fader} 1s;
    }
    @media (min-width: 769px) and (max-width: 1200px) {
        grid-column: 1/2;
        width:50%;
        margin:50px auto 0 auto;
        font-size: 25px;
        animation: ${fader} 1s;
    }
    @media (min-width: 320px) and (max-width: 768px) {
        grid-column: 1/2;
        width:80%;
        margin:150px auto 0 auto;
        font-size: 25px;
        animation: ${fader} 1s;
    }
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
    @media (min-width: 1201px) and (max-width: 1600px) {
        font-size:22px;
    }
    @media (min-width: 320px) and (max-width: 1200px) {
        width:70%;
        margin: 0 auto;
        font-size:20px;
    }
`

const AboutUsImg = styled.img`
    width:100%;
    height:100%;
    object-fit: cover;
    margin: 0 auto;
    border: 2px solid #ffffff;
    border-radius: 50px;
    animation: ${fader} 1s;
    @media (min-width: 1025px) and (max-width: 1200px) {
        width: 80%;
    }
    @media (min-width: 320px) and (max-width: 1024px) {
        grid-column:1/2;
        width: 80%;
    }
`

const AboutUsAuthors = styled.section`
    grid-column: 1/3;
    border-radius:50px;
    border: 2px solid black;
    padding: 30px;
    width:50%;
    margin: 0 auto 300px auto;
    font-size:26px;
    font-weight:700;
    background-color: #ffffff;
    text-align: center;
    color:black;
    word-wrap: break-word;
    animation: ${faderLeft} 1s;
    @media (min-width: 320px) and (max-width: 1200px) {
        grid-column: 1/2;
        width:80%;
        margin: 0 auto 150px auto;
        font-size:15px; 
        padding: 20px;
        animation: ${fader} 1s;
    }
`

const AboutUsAuthorsSpan = styled.a`
    font-size:30px;
    font-weight:700;
    background-color: #ffffff;
    color:black;
    &:hover {
        color:red;
    }
    @media (min-width: 320px) and (max-width: 1200px) {
        font-size:18px;
    }
`

export {AboutUsContent, AboutUsTitle, AboutUsDescr, AboutUsImg, AboutUsAuthors, AboutUsAuthorsSpan};