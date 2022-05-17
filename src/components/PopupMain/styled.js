import styled  from "styled-components";

const Overlay = styled.div`
  position: fixed;
  visibility: ${({ active }) => active ? 'visible' : 'hidden'};
  opacity: ${({ active }) => active ? '0.4' : '0'};
  background-color: black;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  transition: 0.3s all;
`;


const PopupMainContent = styled.div`
    position:fixed;
    top:0;
    left:0;
    height: 100vh;
    width: 35%;
    z-index: 9999;
    background-color: #ffffff;
    transform: ${({ active }) => active ? 'translateX(0)' : 'translateX(-100%)'};
    transition: transform 0.3s ease-in-out;
    @media (min-width: 1025px) and (max-width: 1600px) {
        width: 40%;
    }
    @media (min-width: 769px) and (max-width: 1024px) {
        width: 50%;
    }
    @media (min-width: 320px) and (max-width: 768px) {
        width: 70%;
    }
`

const PopupMainTitle = styled.h2`
    font-size: 50px;
    font-weight: 700;
    margin: 10px 0 10px 0;
    text-align: center;
    @media (min-width: 1025px) and (max-width: 1600px) {
        font-size: 45px;  
    }
    @media (min-width: 769px) and (max-width: 1024px) {
        font-size: 40px;  
    }
    @media (min-width: 320px) and (max-width: 768px) {
        font-size: 30px;  
    }
`
const PopupMainHr = styled.hr`
    width: 70%;
    height: 5px;
    background-color: black;
    border-radius: 30px;
    border: none;
    margin: 0 auto 50px auto;
`

const PopupMainExercise = styled.h4`
    position:relative;
    font-size: 30px;
    font-weight: 600;
    margin: 20px 0 20px 0;
    padding: 5px 15px;
    transition: 0.2s all;
    &:hover {
        background-color: black;
        color:white;
    }
    @media (min-width: 1601px) and (max-width: 1800px) {
        font-size: 25px;  
    }
    @media (min-width: 1025px) and (max-width: 1600px) {
        font-size: 20px;  
    }
    @media (min-width: 769px) and (max-width: 1024px) {
        font-size: 17px;  
    }
    @media (min-width: 481px) and (max-width: 768px) {
        font-size: 15px;
    }
    @media (min-width: 320px) and (max-width: 480px) {
        font-size: 10px;  
    }
`

const PopupMainExerciseQuestion = styled.img`
    position: absolute;
    top: 5%;
    right: 3%;
    width: 40px;
    margin-top:2px;
    @media (min-width: 1601px) and (max-width: 1800px) {
        top: 5%;
        width: 33px;   
    }
    @media (min-width: 1025px) and (max-width: 1600px) {
        top: 5%;
        width: 27px;  
    }
    @media (min-width: 769px) and (max-width: 1024px) {
        top: 5%;
        width: 23px; 
    }
    @media (min-width: 481px) and (max-width: 768px) {
        top: 7%;
        width: 21px;
    }
    @media (min-width: 320px) and (max-width: 480px) {
        width: 18px;
    }
`

const PopupMainBackContainer = styled.div`
    width: 80px;
    margin: 0 auto;
    @media (min-width: 769px) and (max-width: 1600px) {
        width: 70px; 
    }
    @media (min-width: 320px) and (max-width: 768px) {
        width: 50px;
    }
` 

const PopupMainBack = styled.img`
    position: absolute;
    bottom:25px;
    width: 80px; 
    @media (min-width: 769px) and (max-width: 1600px) {
        width: 70px; 
    }
    @media (min-width: 320px) and (max-width: 768px) {
        width: 50px;
    }
`

export {Overlay, PopupMainContent, PopupMainTitle, PopupMainHr, PopupMainExercise, PopupMainExerciseQuestion, PopupMainBackContainer, PopupMainBack}