import {
  Overlay,
  ExerciseDescriptionContent,
  ExerciseDescriptionClose,
  ExerciseDescriptionTitle,
  ExerciseDescriptionImg,
  ExerciseDescriptionDescr,
  ExerciseDescriptionButton,
} from "./styled.js";

function ExerciseDescription({ isExerciseDescr, active }) {
  return (
    <>
      <Overlay active={active} />
      <ExerciseDescriptionContent active={active}>
        <ExerciseDescriptionClose
          src="./assets/close_red.svg"
          alt="close"
          onClick={() => isExerciseDescr(false)}
        />
        <ExerciseDescriptionTitle>Exercise</ExerciseDescriptionTitle>
        <ExerciseDescriptionImg src="#" alt="IMG" />
        <ExerciseDescriptionDescr>
          DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription
        </ExerciseDescriptionDescr>
        <ExerciseDescriptionButton>
          Add to my trainings
        </ExerciseDescriptionButton>
      </ExerciseDescriptionContent>
    </>
  );
}

export default ExerciseDescription;
