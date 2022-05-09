import {
  MyTrainingsPopupOverlay,
  MyTrainingsPopupWrapper,
  MyTrainingsPopupContent,
  MyTrainingsPopupTitle,
  MyTrainingsPopupClose,
  MyTrainingsPopupExerciseClose,
  MyTrainingsPopupExercise,
  MyTrainingsPopupBtnContainer,
  MyTrainingsPopupBtn,
} from "./styled.js";

function MyTrainingsPopup(props) {
  const { isOpen } = props;

  return (
    <MyTrainingsPopupOverlay>
      <MyTrainingsPopupWrapper>
        <MyTrainingsPopupContent>
          <MyTrainingsPopupClose
            src="./assets/close_black.svg"
            onClick={() => isOpen(false)}
          />
          <MyTrainingsPopupTitle>Monday</MyTrainingsPopupTitle>
          <MyTrainingsPopupExercise>
            <MyTrainingsPopupExerciseClose src="./assets/close_red.svg" />
            Exercise 1
          </MyTrainingsPopupExercise>
          <MyTrainingsPopupExercise>
            <MyTrainingsPopupExerciseClose src="./assets/close_red.svg" />
            Exercise 2
          </MyTrainingsPopupExercise>
          <MyTrainingsPopupExercise>
            <MyTrainingsPopupExerciseClose src="./assets/close_red.svg" />
            Exercise 3
          </MyTrainingsPopupExercise>
          <MyTrainingsPopupExercise>
            <MyTrainingsPopupExerciseClose src="./assets/close_red.svg" />
            Exercise 4
          </MyTrainingsPopupExercise>
          <MyTrainingsPopupExercise>
            <MyTrainingsPopupExerciseClose src="./assets/close_red.svg" />
            Exercise 5
          </MyTrainingsPopupExercise>
          <MyTrainingsPopupExercise>
            <MyTrainingsPopupExerciseClose src="./assets/close_red.svg" />
            Exercise 6
          </MyTrainingsPopupExercise>
          <MyTrainingsPopupBtnContainer>
            <MyTrainingsPopupBtn to="/Cards">Add more...</MyTrainingsPopupBtn>
          </MyTrainingsPopupBtnContainer>
        </MyTrainingsPopupContent>
      </MyTrainingsPopupWrapper>
    </MyTrainingsPopupOverlay>
  );
}

export default MyTrainingsPopup;
