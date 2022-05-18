import {
  DayCardContent,
  DayCardNameContainer,
  DayCardName,
  DayCardExercise,
  DayCardWarning,
} from "./styled.js";

import MyTrainingsPopup from "../MyTrainingsPopup/MyTrainingsPopup.jsx";
import { useState } from "react";

function DayCard(props) {
  const { day, exercisesPerDay, isRefetch, refetch } = props;
  const [popupOpen, isPopupOpen] = useState(false);

  const dayUppercase = day.charAt(0).toUpperCase() + day.slice(1);

  return (
    <>
      <DayCardContent onClick={() => isPopupOpen(true)}>
        <DayCardNameContainer>
          <DayCardName>{dayUppercase}</DayCardName>
        </DayCardNameContainer>
        {exercisesPerDay.length === 0 ? (
          <DayCardWarning>Empty...</DayCardWarning>
        ) : (
          <>
            {exercisesPerDay.map((item, idDay) => (
              <DayCardExercise key={idDay}>{item.name}</DayCardExercise>
            ))}
          </>
        )}
      </DayCardContent>
      {popupOpen ? (
        <MyTrainingsPopup
          isPopupOpen={isPopupOpen}
          day={day}
          exercisesPerDay={exercisesPerDay}
          isRefetch={isRefetch}
          refetch={refetch}
        />
      ) : (
        <></>
      )}
    </>
  );
}

export default DayCard;
