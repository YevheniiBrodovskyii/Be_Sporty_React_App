import { useState } from "react";
import {
  Overlay,
  PopupMainContent,
  PopupMainTitle,
  PopupMainHr,
  PopupMainExercise,
  PopupMainExerciseQuestion,
  PopupMainBackContainer,
  PopupMainBack,
} from "./styled.js";

import ExerciseDescription from "../ExerciseDescription/ExerciseDescription.jsx";

function PopupMain(props) {
  const { popupMain, isPopupMainOpen } = props;
  const [exerciseDescr, isExerciseDescr] = useState(false);
  const [active, isActive] = useState(false);

  function closePopup() {
    isPopupMainOpen(false);
    isExerciseDescr(false);
  }

  function clickOnQuestion() {
    isActive(true);
    isExerciseDescr(true);
  }

  return (
    <>
      <Overlay active={popupMain} onClick={() => isPopupMainOpen(false)} />
      <PopupMainContent active={popupMain}>
        <PopupMainTitle>Arm day</PopupMainTitle>
        <PopupMainHr />
        <PopupMainExercise active={active}>
          Exercise
          <PopupMainExerciseQuestion
            src="./assets/popup_main_question.svg"
            alt="question"
            onClick={() => clickOnQuestion()}
          />
        </PopupMainExercise>
        <PopupMainBackContainer>
          <PopupMainBack
            src="./assets/popup_main_back.svg"
            alt="back"
            onClick={() => closePopup()}
          />
        </PopupMainBackContainer>
      </PopupMainContent>
      <ExerciseDescription
        isExerciseDescr={isExerciseDescr}
        active={exerciseDescr}
      />
    </>
  );
}

export default PopupMain;
