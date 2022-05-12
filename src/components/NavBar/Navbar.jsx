import {
  NavBarContainer,
  NavBarLinks,
  StyledLink,
  NavBarLogo,
  NavBarButton,
} from "./styled.js";
import Burger from "../Burger/Burger.jsx";
import { useState } from "react";

import NavBarPopup from "../NavBarPopup/NavBarPopup";

function NavBar() {
  const [popupOpen, isPopupOpen] = useState(false);

  return (
    <>
      <NavBarContainer>
        <Burger />
        <NavBarLogo src="./assets/logo.svg" alt="logo" />
        <NavBarLinks>
          <StyledLink to="/MyTrainings">My trainings</StyledLink>
          <StyledLink to="/Cards">Main</StyledLink>
          <StyledLink to="/AboutUs">About us</StyledLink>
        </NavBarLinks>
        <NavBarButton onClick={() => isPopupOpen(true)}>AA</NavBarButton>
      </NavBarContainer>
      <NavBarPopup popupOpen={popupOpen} isPopupOpen={isPopupOpen} />
    </>
  );
}

export default NavBar;
