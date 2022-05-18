import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { MyTrainingsContainer } from "./styled.js";
import DayCard from "../DayCard/DayCard";

function MyTrainings({ active }) {
  const [userExercise, takeUserExercise] = useState([]);
  const [refetch, isRefetch] = useState(false);

  const token = useSelector((state) => state.data.data.token);
  const username = useSelector((state) => state.username.username);

  useEffect(() => {
    if (active || refetch) {
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
      isRefetch(false);
    }
  }, [active, token, username, refetch]);

  return (
    <>
      <MyTrainingsContainer>
        {userExercise.map((item) => (
          <DayCard
            key={item.id}
            day={item.day}
            exercisesPerDay={item.exercisesPerDay}
            isRefetch={isRefetch}
            refetch={refetch}
          />
        ))}
      </MyTrainingsContainer>
    </>
  );
}

export default MyTrainings;
