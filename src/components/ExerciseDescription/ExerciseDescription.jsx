import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  Overlay,
  ExerciseDescriptionContent,
  ExerciseDescriptionClose,
  ExerciseDescriptionTitle,
  ExerciseDescriptionImg,
  ExerciseDescriptionDescr,
  ExerciseDescriptionSelect,
  ExerciseDescriptionOption,
  ExerciseDescriptionButton,
} from "./styled.js";

function ExerciseDescription({
  isExerciseDescr,
  active,
  id,
  selectedDay,
  getSelectedDay,
}) {
  const [exercise, takeExercise] = useState([]);
  const [sendButton, isSendButton] = useState(false);
  const [sent, isSent] = useState([]);

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

      const fetchExerciseGroups = async () => {
        const responce = await fetch(
          `http://localhost:8080/api/exercises/${id}`,
          requestOptions
        );
        const data = await responce.json();
        takeExercise(data);
      };
      fetchExerciseGroups();
    }
  }, [active, token, id]);

  useEffect(() => {
    if (selectedDay === "Add to my trainings") {
      isSendButton(false);
    } else {
      isSendButton(true);
    }
  }, [selectedDay]);

  function addExercise() {
    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "*/*",
        Authorization: `Bearer ${token}`,
      },
    };

    const fetchExercise = async () => {
      const responce = await fetch(
        `ttp://localhost:8080/api/user/addtraining/${username}?day=${selectedDay}`,
        requestOptions
      );
      const data = await responce.json();
      isSent(data);
    };
    fetchExercise();
  }

  return (
    <>
      <Overlay active={active} />
      <ExerciseDescriptionContent active={active}>
        <ExerciseDescriptionClose
          src="./assets/close_red.svg"
          alt="close"
          onClick={() => {
            isExerciseDescr(false);
            getSelectedDay("Add to my trainings");
          }}
        />
        <ExerciseDescriptionTitle>{exercise.name}</ExerciseDescriptionTitle>
        <ExerciseDescriptionImg src="#" alt="IMG" />
        <ExerciseDescriptionDescr>
          {exercise.description}
        </ExerciseDescriptionDescr>
        <ExerciseDescriptionSelect
          value={selectedDay}
          onChange={(e) => getSelectedDay(e.target.value)}
        >
          <ExerciseDescriptionOption>
            Add to my trainings
          </ExerciseDescriptionOption>
          <ExerciseDescriptionOption value="monday">
            Monday
          </ExerciseDescriptionOption>
          <ExerciseDescriptionOption value="tuesday">
            Tuesday
          </ExerciseDescriptionOption>
          <ExerciseDescriptionOption value="wednesday">
            Wednesday
          </ExerciseDescriptionOption>
          <ExerciseDescriptionOption value="thursday">
            Thursday
          </ExerciseDescriptionOption>
          <ExerciseDescriptionOption value="friday">
            Friday
          </ExerciseDescriptionOption>
          <ExerciseDescriptionOption value="saturday">
            Saturday
          </ExerciseDescriptionOption>
        </ExerciseDescriptionSelect>
        <ExerciseDescriptionButton
          active={sendButton}
          onClick={() => addExercise()}
        >
          Add
        </ExerciseDescriptionButton>
      </ExerciseDescriptionContent>
    </>
  );
}

export default ExerciseDescription;
