import { useState } from "react";

import {
  CardContent,
  CardName,
  CardImageContainer,
  CardImage,
} from "./styled.js";

import PopupMain from "../PopupMain/PopupMain.jsx";

function Card() {
  const [popupOpen, isPopupOpen] = useState(false);

  return (
    <>
      <CardContent onClick={() => isPopupOpen(true)}>
        <CardImageContainer>
          <CardImage src="" />
        </CardImageContainer>
        <CardName>Arm Day</CardName>
      </CardContent>
      <PopupMain popupMain={popupOpen} isPopupMainOpen={isPopupOpen} />
    </>
  );
}

export default Card;
