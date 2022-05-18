import { useSelector } from "react-redux";
import {
  MyTrainingsPopupOverlay,
  MyTrainingsPopupWrapper,
  MyTrainingsPopupContent,
  MyTrainingsPopupTitle,
  MyTrainingsPopupClose,
  MyTrainingsPopupExerciseDelete,
  MyTrainingsPopupExercise,
  MyTrainingsPopupBtnContainer,
  MyTrainingsPopupBtn,
  MyTrainingsPopupWarning,
  MyTrainingsPopupEmptyWarning,
} from "./styled.js";

function MyTrainingsPopup(props) {
  const { isPopupOpen, day, exercisesPerDay, isRefetch } = props;

  const token = useSelector((state) => state.data.data.token);
  const username = useSelector((state) => state.username.username);

  function deleteExercise(exercise) {
    let dataExercise = {
      name: exercise,
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
        `http://localhost:8080/api/user/deletetraining/${username}?day=${day}`,
        requestOptions
      );
      await responce.json();
    };
    fetchExercise();
    isRefetch(true);
  }

  return (
    <MyTrainingsPopupOverlay>
      <MyTrainingsPopupWrapper>
        <MyTrainingsPopupContent>
          <MyTrainingsPopupClose
            src="./assets/close_black.svg"
            onClick={() => isPopupOpen(false)}
          />
          <MyTrainingsPopupTitle>{day}</MyTrainingsPopupTitle>
          {exercisesPerDay.length === 0 ? (
            <MyTrainingsPopupEmptyWarning>
              Empty...
            </MyTrainingsPopupEmptyWarning>
          ) : (
            <>
              {exercisesPerDay.map((item, idExercise) => (
                <MyTrainingsPopupExercise key={idExercise}>
                  <MyTrainingsPopupExerciseDelete
                    src="./assets/close_red.svg"
                    onClick={() => deleteExercise(item.name)}
                  />
                  {item.name}
                </MyTrainingsPopupExercise>
              ))}
            </>
          )}
          {exercisesPerDay.length >= 8 ? (
            <MyTrainingsPopupWarning>
              *Your training day should not consist of more than 8 exercises
            </MyTrainingsPopupWarning>
          ) : (
            <MyTrainingsPopupBtnContainer>
              <MyTrainingsPopupBtn to="/Cards">Add more...</MyTrainingsPopupBtn>
            </MyTrainingsPopupBtnContainer>
          )}
        </MyTrainingsPopupContent>
      </MyTrainingsPopupWrapper>
    </MyTrainingsPopupOverlay>
  );
}

export default MyTrainingsPopup;
