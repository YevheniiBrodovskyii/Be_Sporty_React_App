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
  const { popupMain, isPopupMainOpen, name, exercises } = props;
  const [exerciseDescr, isExerciseDescr] = useState(false);
  const [active, isActive] = useState(false);
  const [exerciseId, getExerciseId] = useState(null);
  const [exerciseName, getExerciseName] = useState("");
  const [selectedDay, getSelectedDay] = useState("Add to my trainings");

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
        <PopupMainTitle>{name}</PopupMainTitle>
        <PopupMainHr />
        {exercises.map((item) => (
          <PopupMainExercise active={active} key={item.id}>
            {item.name}
            <PopupMainExerciseQuestion
              src="./assets/popup_main_question.svg"
              alt="question"
              onClick={() => {
                clickOnQuestion();
                getSelectedDay("Add to my trainings");
                getExerciseId(item.id);
                getExerciseName(item.name);
              }}
            />
          </PopupMainExercise>
        ))}
        <PopupMainBackContainer>
          <PopupMainBack
            src="./assets/popup_main_back.svg"
            alt="back"
            onClick={() => {
              closePopup();
              getSelectedDay("Add to my trainings");
            }}
          />
        </PopupMainBackContainer>
      </PopupMainContent>
      <ExerciseDescription
        isExerciseDescr={isExerciseDescr}
        active={exerciseDescr}
        id={exerciseId}
        name={exerciseName}
        selectedDay={selectedDay}
        getSelectedDay={getSelectedDay}
      />
    </>
  );
}

export default PopupMain;
