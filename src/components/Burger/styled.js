import { NavLink } from "react-router-dom";
import styled from "styled-components";

const BurgerContainer = styled.div`
    width: 60px;
    margin: 0 auto;
`

const BurgerContent = styled.div`
    display:none;
    position: absolute;
    top:27px;
    @media (min-width: 320px) and (max-width: 768px) {
        display:grid;
    }
  `

  const BurgerLinks = styled.div`
  display:none;
  flex-direction:column;
  justify-content:center;
  margin: 0 auto;
  padding:25px 0;
  background-color:white;
  border-bottom-left-radius:30px;
  border-bottom-right-radius:30px;
  transform: ${({ active }) => active ? 'translateY(34%)' : 'translateY(-100%)'};
  transition: transform 0.3s ease-in-out;
  @media (min-width: 481px) and (max-width: 768px) {
    display: flex;
  }
  @media (min-width: 320px) and (max-width: 480px) {
  display: flex;
  }
`;

  const BurgerLink = styled(NavLink)`
    display:none;
    padding: 15px 0;
    text-align:center;
    color: #000000;
    text-decoration: none;
    font-weight: 900;
    font-size: 20px;
    letter-spacing: 1px;
    word-spacing: -4px;
    @media (min-width: 320px) and (max-width: 768px) {
    display: block;
    &.active {
       background-color: black;
       color:white;
      }
    }
`
  const BurgerImgOpen = styled.img`
   display: ${({ active }) => active ? 'block' : 'none'};
  `

  const BurgerImgClose = styled.img`
  display: ${({ active }) => active ? 'block' : 'none'};
  width:40px;
  `


  
export {BurgerContainer, BurgerContent, BurgerLinks, BurgerLink, BurgerImgOpen, BurgerImgClose}