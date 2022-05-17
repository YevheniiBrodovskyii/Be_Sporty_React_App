import styled from "styled-components";

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
    top: 10.7%;
    width: 50%;
    height: 645px;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    z-index: 8888;
    background-color: rgba(0, 75, 143, 0.9);
    transform: ${({ active }) => active ? 'translateX(50%)' : 'translateX(-130%)'};
    transition: transform 0.3s ease-in-out;
    @media (min-width: 1025px) and (max-width: 1600px) {
        width:55%;
        transform: ${({ active }) => active ? 'translateX(54.5%)' : 'translateX(-130%)'};
    }
    @media (min-width: 769px) and (max-width: 1024px) {
        width:95%;
        z-index: 9999;
        background-color: rgba(0, 75, 143, 1);
        transform: ${({ active }) => active ? 'translateX(-11%)' : 'translateX(-130%)'};
    }
    @media (min-width: 481px) and (max-width: 768px) {
        grid-template: 10% 32% 32% 10% / 100% ;
        column-gap: 0%;
        row-gap: 2%;
        width:95%;
        z-index: 9999;
        background-color: rgba(0, 75, 143, 1);
        transform: ${({ active }) => active ? 'translateX(-10.5%)' : 'translateX(-130%)'};
    }
    @media (min-width: 320px) and (max-width: 480px) {
        grid-template: 10% 32% 32% 10% / 100% ;
        column-gap: 0%;
        row-gap: 2%;
        width:98%;
        z-index: 9999;
        background-color: rgba(0, 75, 143, 1);
        transform: ${({ active }) => active ? 'translateX(-6%)' : 'translateX(-130%)'};
    }
`

const ExerciseDescriptionClose = styled.img`
    position: absolute;
    top: 15px;
    right:15px;
`

const ExerciseDescriptionTitle = styled.h2`
    grid-column: 1/3;
    font-size: 40px;
    margin: 10px 0 10px 0;
    padding: 0 0 0 10px;
    color: white;
    text-align: left;
    @media (min-width: 1201px) and (max-width: 1600px) {
        font-size: 31px;
    }
    @media (min-width: 1025px) and (max-width: 1200px) {
        font-size: 25px;
    }
    @media (min-width: 769px) and (max-width: 1024px) {
        font-size: 35px;
    }
    @media (min-width: 481px) and (max-width: 768px) {
        grid-column: 1/2;
        font-size: 22px;
    }
    @media (min-width: 320px) and (max-width: 480px) {
        grid-column: 1/2;
        font-size: 20px;
    }
`

const ExerciseDescriptionImg = styled.img`
    grid-column: 1/2;
    background-color: gray;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    @media (min-width: 320px) and (max-width: 768px) {
        grid-column: 1/2;
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;
    }
`

const ExerciseDescriptionDescr = styled.div`
    grid-column: 2/3;
    word-wrap: break-word;
    font-size: 20px;
    padding: 15px;
    color: white;
    background-color: black;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    @media (min-width: 1025px) and (max-width: 1200px) {
        font-size: 17px;
    }
    @media (min-width: 320px) and (max-width: 768px) {
        grid-column: 1/2;
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
        font-size: 13px;
    }
`

const ExerciseDescriptionSelect = styled.select`
    grid-column: 1/3;
    width: 300px;
    height: 60px;
    border:none;
    margin: 40px auto 0 auto;
    font-size:20px;
    font-weight: 700;
    @media (min-width: 481px) and (max-width: 768px) {
        grid-column: 1/2;
        font-size:17px;
        width: 50%;
    }
    @media (min-width: 320px) and (max-width: 480px) {
        grid-column: 1/2;
        font-size:14px;
        width: 50%;
    }
`

const ExerciseDescriptionOption = styled.option`
    width: 300px;
    height: 60px;
    border:none;
    font-size:20px;
    font-weight: 700;
    text-align: center;
`

const ExerciseDescriptionButton = styled.button`
    position: absolute;
    right:-15.5%;
    top:40%;
    z-index:-1;
    transform: ${({ active }) => active ? 'translateX(0%) rotate(90deg)' : 'translateX(-80%) rotate(90deg)'};
    width:20%;
    height: 100px;
    font-size:40px;
    font-weight:700;
    border-top-right-radius:30px;
    border-top-left-radius:30px;
    border:none;
    background-color: rgba(23, 241, 107, 1);
    transition: transform 0.5s ease-in-out;
    &:hover {
        background-color:rgba(0, 176, 67, 1);
    }
`

export {Overlay, ExerciseDescriptionContent, ExerciseDescriptionClose, ExerciseDescriptionTitle, ExerciseDescriptionImg, ExerciseDescriptionDescr, ExerciseDescriptionSelect, ExerciseDescriptionOption, ExerciseDescriptionButton}