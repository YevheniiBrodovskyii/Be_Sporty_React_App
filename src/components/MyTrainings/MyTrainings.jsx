import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { MyTrainingsContainer } from "./styled.js";
import DayCard from "../DayCard/DayCard";

import MyTrainingsPopup from "../MyTrainingsPopup/MyTrainingsPopup.jsx";

function MyTrainings({ active }) {
  const [open, isOpen] = useState(false);
  const [userExercise, takeUserExercise] = useState([]);

  const token = useSelector((state) => state.data.data.token);
  const username = useSelector((state) => state.username.username);

  useEffect(() => {
    if (active) {
      const requestOptions = {
        method: "GET",
        headers: {
          Accept: "*/*",
          Authorization: `Bearer ${token}`,
        },
      };

      const getUserExercise = async () => {
        const responce = await fetch(
          `http://localhost:8080/api/user/trainings/${username}`,
          requestOptions
        );
        const data = await responce.json();
        takeUserExercise(data);
      };
      getUserExercise();
    }
  }, [active, token, username]);

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
