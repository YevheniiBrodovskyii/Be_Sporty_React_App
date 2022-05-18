import { useState } from "react";

import {
  BurderOverlay,
  BurgerContainer,
  BurgerContent,
  BurgerLinks,
  BurgerLink,
  BurgerImgOpen,
  BurgerImgClose,
} from "./styled.js";

function Burger() {
  const [burgerOpen, isBurgerOpen] = useState(true);
  const [burgerClose, isBurgerClose] = useState(false);

  function handleBurgerOpen() {
    isBurgerOpen(false);
    isBurgerClose(true);
  }

  function handleBurgerClose() {
    isBurgerOpen(true);
    isBurgerClose(false);
  }

  return (
    <>
      <BurderOverlay active={burgerClose} onClick={() => handleBurgerClose()} />
      <BurgerContainer>
        <BurgerContent>
          <BurgerImgOpen
            active={burgerOpen}
            onClick={() => handleBurgerOpen()}
            src="./assets/burger.svg"
          />
          <BurgerImgClose
            active={burgerClose}
            onClick={() => handleBurgerClose()}
            src="./assets/close_black.svg"
          />
        </BurgerContent>
      </BurgerContainer>
      <BurgerLinks active={burgerClose}>
        <BurgerLink to="/MyTrainings">My trainings</BurgerLink>
        <BurgerLink to="/Cards">Main</BurgerLink>
        <BurgerLink to="/AboutUs">About us</BurgerLink>
      </BurgerLinks>
    </>
  );
}

export default Burger;
