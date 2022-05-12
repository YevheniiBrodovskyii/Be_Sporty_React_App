import styled, {keyframes} from "styled-components";
import { NavLink } from "react-router-dom";
import { headShake } from "react-animations";

const shaker = keyframes`${headShake}`;


const NavBarContainer = styled.nav`
    position: relative;
    top: 10px;
    width: 100%;
    margin: 0 auto;
    height: 100px;
    background: #ffffff;
    border-radius: 30px;
    @media (min-width: 320px) and (max-width: 768px) {
      position:fixed;
      top:0;
      left:0;
      border-top-left-radius:0;
      border-top-right-radius:0;
    }
  `;

  const NavBarLinks = styled.div`
    display: flex;
    justify-content: center;
    width: 50%;
    margin: 0 auto;
    @media (min-width: 769px) and (max-width: 1600px) {
      width: 70%;
    }
  `;

  const StyledLink = styled(NavLink)`
    line-height: 100px;
    color: #000000;
    text-decoration: none;
    font-weight: 900;
    font-size: 30px;
    margin: 0 30px 0 30px;
    letter-spacing: 1px;
    word-spacing: -4px;
    &.active {
      height: 75px;
      border-bottom: 3px solid black ;
    }
    @media (min-width: 769px) and (max-width: 1024px) {
      font-size:18px;
    }
    @media (min-width: 320px) and (max-width: 768px) {
      display:none;
    }
  `;

  const NavBarLogo = styled.img`
    position: absolute;
    top: 15px;
    left: 15px;
    @media (min-width: 320px) and (max-width: 480px) {
      width:60px;
    }
  `;

  const NavBarButton = styled.button`
    position: absolute;
    top: 10px;
    right: 15px;
    width: 80px;
    height: 80px;
    border-radius: 50px;
    border: none;
    background-color: #252525;
    color: white;
    font-size: 25px;
    cursor: pointer;
    &:hover {
      animation: 1s ${shaker};
    }
    @media (min-width: 320px) and (max-width: 480px) {
      width: 65px;
      height: 65px;
      top: 15px;
    }
  `;

  


export {NavBarContainer,NavBarLinks,StyledLink, NavBarLogo, NavBarButton};