import styled, {keyframes} from "styled-components";
import { fadeIn} from 'react-animations';

const fader = keyframes`${fadeIn}`;

const MyTrainingsContainer = styled.main`
    margin: 0;
    display: grid;
    grid-template-columns: repeat(3, minmax(400px, 1fr));
    column-gap: 1rem;
    animation: ${fader} 0.5s;
    @media (min-width: 1025px) and (max-width: 1600px) {
      grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
      column-gap: 1.5rem;
    }
    @media (min-width: 320px) and (max-width: 1024px) {
        grid-template-columns: repeat(1, minmax(300px, 1fr));
    }
  `;

const MytrainingsWarning = styled.div`
  position:relative;
  top:150px;
  width:40%;
  margin: 0 auto;
  background-color: white;
  border-radius: 30px;
  padding: 20px 0px;
  animation: ${fader} 0.5s;
  @media (min-width: 1201px) and (max-width: 1600px) {
    width:60%;
  }
  @media (min-width: 320px) and (max-width: 1200px) {
    width:90%;
  }
`

const MytrainingsWarningImgContainer = styled.div`
    width:50px;
    margin: 0 auto;
`

const MytrainingsWarningImg = styled.img`
    
`

const MytrainingsWarningDescr = styled.p`
    text-align:center;
    font-size:25px;
    font-weight: 600;
    @media (min-width: 320px) and (max-width: 768px) {
      font-size:18px;
    }
`

const MytrainingsWarningButtonContainer = styled.div`
    width:200px;
    margin: 0 auto;
    @media (min-width: 320px) and (max-width: 768px) {
      width:150px;
    }
`

const MytrainingsWarningButton = styled.button`
    font-size:20px;
    width:inherit;
    height:60px;
    background-color: #000000;
    border-radius: 30px;
    border:none;
    color:white;
    @media (min-width: 320px) and (max-width: 768px) {
      font-size:15px;
      height:40px;
    }
`

export {MyTrainingsContainer,MytrainingsWarning,MytrainingsWarningImgContainer, MytrainingsWarningImg, MytrainingsWarningDescr, MytrainingsWarningButtonContainer, MytrainingsWarningButton};