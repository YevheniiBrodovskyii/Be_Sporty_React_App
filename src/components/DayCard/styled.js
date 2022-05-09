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
    font-size: 40px;
    margin: 0;
    padding: 0;
  `;

const DayCardContent = styled.section`
    width: 300px;
    height: 300px;
    margin: 0 auto;
    padding: 0 0 15px 0;
    background-color: #ffffff;
    border-radius: 15px;
    transition: 0.5s all;
    cursor: pointer;
    &:hover {
      transform : scale(105%);
      ${DayCardName} {
        animation: ${shaker} 1s;
      }
    }
  `;

    const DayCardExercise = styled.h5`
        font-size:20px;
        font-weight: 600;
        text-align: center;
        margin: 10px 0 10px 0;
    `

export {DayCardContent,DayCardNameContainer, DayCardName, DayCardExercise};