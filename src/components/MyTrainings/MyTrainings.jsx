import { useState } from "react";
import { MyTrainingsContainer } from "./styled.js";
import DayCard from "../DayCard/DayCard";

import MyTrainingsPopup from "../MyTrainingsPopup/MyTrainingsPopup.jsx";

function MyTrainings() {
  const [open, isOpen] = useState(false);

  return (
    <>
      <MyTrainingsContainer>
        <DayCard isOpen={isOpen} />
        <DayCard />
        <DayCard />
        <DayCard />
        <DayCard />
        <DayCard />
      </MyTrainingsContainer>
      {open ? <MyTrainingsPopup isOpen={isOpen} /> : <></>}
    </>
  );
}

export default MyTrainings;
