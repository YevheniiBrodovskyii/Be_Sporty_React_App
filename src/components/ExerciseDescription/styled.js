import styled  from "styled-components";

const Overlay = styled.div`
  position: fixed;
  visibility: ${({ active }) => active ? 'visible' : 'hidden'};
  opacity: ${({ active }) => active ? '0.5' : '0'};
  background-color: black;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  transition: 0.3s all;
`;


const ExerciseDescriptionContent = styled.div`
    display: grid;
    grid-template: 15% 65% 20% / 49% 49% ;
    column-gap: 2%;
    position:fixed;
    top: 14.7%;
    width: 800px;
    height: 645px;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    z-index: 8888;
    background-color: rgba(0, 75, 143, 0.9);
    transform: ${({ active }) => active ? 'translateX(51%)' : 'translateX(-130%)'};
    transition: transform 0.3s ease-in-out;
`

const ExerciseDescriptionClose = styled.img`
    position: absolute;
    top: 15px;
    right:15px;
`

const ExerciseDescriptionTitle = styled.h2`
    grid-column: 1/3;
    font-size: 40px;
    margin: 5px 0 5px 0;
    color: white;
    text-align: center;

`

const ExerciseDescriptionImg = styled.img`
    grid-column: 1/2;
    background-color: gray;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;

`

const ExerciseDescriptionDescr = styled.div`
    grid-column: 2/3;
    word-wrap: break-word;
    padding: 15px;
    color: white;
    background-color: black;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;


`

const ExerciseDescriptionButton = styled.button`
    grid-column: 1/3;
    width: 300px;
    height: 60px;
    border-radius: 30px;
    border:none;
    margin: 40px auto 0 auto;
    font-size:20px;
    font-weight: 700;
`

export {Overlay, ExerciseDescriptionContent, ExerciseDescriptionClose, ExerciseDescriptionTitle, ExerciseDescriptionImg, ExerciseDescriptionDescr, ExerciseDescriptionButton}