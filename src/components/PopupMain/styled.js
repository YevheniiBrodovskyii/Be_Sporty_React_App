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
    width: 600px;
    z-index: 9999;
    background-color: #ffffff;
    transform: ${({ active }) => active ? 'translateX(0)' : 'translateX(-100%)'};
    transition: transform 0.3s ease-in-out;
`

const PopupMainTitle = styled.h2`
    font-size: 50px;
    font-weight: 700;
    margin: 10px 0 10px 0;
    text-align: center;
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
    font-size: 35px;
    font-weight: 600;
    margin: 20px 0 20px 0;
    padding: 5px 15px;
    transition: 0.2s all;
    &:hover {
        background-color: black;
        color:white;
    }
`

const PopupMainExerciseQuestion = styled.img`
    float: right;
    width: 40px;
    margin-top:2px;
`

const PopupMainBackContainer = styled.div`
    width: 100px;
    margin: 0 auto;
` 

const PopupMainBack = styled.img`
    position: absolute;
    bottom:25px;
`

export {Overlay, PopupMainContent, PopupMainTitle, PopupMainHr, PopupMainExercise, PopupMainExerciseQuestion, PopupMainBackContainer, PopupMainBack}