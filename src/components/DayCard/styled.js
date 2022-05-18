import styled, {keyframes} from "styled-components";
import { headShake } from "react-animations";

const shaker = keyframes`${headShake}`;

const DayCardNameContainer = styled.div`
    background-color: #C4C4C4;
    border-radius: 15px 15px 0px 0px;
    border-bottom: 1px solid #000000;
    margin: 0;
    padding: 0;
  `;

  const DayCardName = styled.h2`
    text-align: center;
    color: #000000;
    font-weight: 700;
    font-size: 50px;
    margin: 0;
    padding: 5px 0;
    @media (min-width: 320px) and (max-width: 480px) {
    font-size: 30px;
    }
  `;

const DayCardContent = styled.section`
    width: 400px;
    height: 400px;
    margin: 50px auto;
    padding: 0 0 15px 0;
    background-color: #ffffff;
    border-radius: 15px;
    transition: 0.5s all;
    cursor: pointer;
    z-index: 7777;
    &:hover {
      transform : scale(105%);
      ${DayCardName} {
        animation: ${shaker} 1s;
      }
    }
    @media (min-width: 481px) and (max-width: 768px) {
      width: 90%;
      height: 410px;
      margin: 50px auto 50px auto;
      &:first-child {
        margin: 150px auto 50px auto;
      }
    }
    @media (min-width: 320px) and (max-width: 480px) {
      width: 90%;
      height: 330px;
      margin: 50px auto 50px auto;
      &:first-child {
        margin: 150px auto 50px auto;
      }
    }
  `;

const DayCardExercise = styled.h5`
    font-size:18px;
    font-weight: 600;
    text-align: center;
    margin: 15px 0 15px 0;
    @media (min-width: 320px) and (max-width: 480px) {
    font-size:15px;
    }
  `

const DayCardWarning= styled.div`
    width:40%;
    margin:25% auto 0 auto;
    text-align:center;
    background-color:#C4C4C4;
    color:black;
    font-size:35px;
    font-weight:600;
    border-radius: 30px;
    padding: 10px;
    @media (min-width: 481px) and (max-width: 768px) {
      width:60%;
      margin:130px auto 0 auto;
    }
    @media (min-width: 320px) and (max-width: 480px) {
      width:60%;
      margin:100px auto 0 auto;
      font-size:30px;
      }
` 

export {DayCardContent,DayCardNameContainer, DayCardName, DayCardExercise, DayCardWarning};