import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../../store/userData.js";
import { getUserName } from "../../store/userName.js";
import { setStatus } from "../../store/statusMessage.js";
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
  ExerciseDescriptionSignUp,
} from "./styled.js";

function ExerciseDescription({
  isExerciseDescr,
  active,
  id,
  name,
  selectedDay,
  getSelectedDay,
}) {
  const [exercise, takeExercise] = useState([]);
  const [sendButton, isSendButton] = useState(false);

  const token = useSelector((state) => state.data.data.token);
  const username = useSelector((state) => state.username.username);

  const dispatch = useDispatch();

  useEffect(() => {
    if (active) {
      const requestOptions = {
        method: "GET",
        headers: {
          Accept: "*/*",
        },
      };

      const fetchExerciseGroups = async () => {
        const responce = await fetch(
          `http://localhost:8080/api/exercises/${id}/details`,
          requestOptions
        );
        const data = await responce.json();
        takeExercise(data);
      };
      fetchExerciseGroups();
    }
  }, [active, id]);

  useEffect(() => {
    if (selectedDay === "Add to my trainings") {
      isSendButton(false);
    } else {
      isSendButton(true);
    }
  }, [selectedDay]);

  function addExercise() {
    let dataExercise = {
      name: name,
    };
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(dataExercise),
    };

    const fetchExercise = async () => {
      const responce = await fetch(
        `http://localhost:8080/api/user/addtraining/${username}?day=${selectedDay}`,
        requestOptions
      );
      if (responce.status !== 200) {
        const data = await responce.json();
        dispatch(setStatus(data.error_message));
      } else {
        dispatch(setStatus("Successfully added"));
      }
    };
    fetchExercise();
  }

  function goLogin() {
    dispatch(getData([]));
    dispatch(getUserName(""));
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
        <ExerciseDescriptionTitle>{name}</ExerciseDescriptionTitle>
        <ExerciseDescriptionImg src={exercise.imageSrc} alt="IMG" />
        <ExerciseDescriptionDescr>
          {exercise.description}
        </ExerciseDescriptionDescr>
        {token === "quest" ? (
          <ExerciseDescriptionSignUp onClick={() => goLogin()}>
            Create an account
          </ExerciseDescriptionSignUp>
        ) : (
          <>
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
          </>
        )}
      </ExerciseDescriptionContent>
    </>
  );
}

export default ExerciseDescription;
