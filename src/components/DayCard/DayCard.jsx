import {
  DayCardContent,
  DayCardNameContainer,
  DayCardName,
  DayCardExercise,
} from "./styled.js";

function DayCard(props) {
  const { isOpen } = props;

  return (
    <>
      <DayCardContent onClick={() => isOpen(true)}>
        <DayCardNameContainer>
          <DayCardName>Monday</DayCardName>
        </DayCardNameContainer>
        <DayCardExercise>Exercise 1</DayCardExercise>
        <DayCardExercise>Exercise 2</DayCardExercise>
        <DayCardExercise>Exercise 3</DayCardExercise>
        <DayCardExercise>Exercise 4</DayCardExercise>
        <DayCardExercise>Exercise 5</DayCardExercise>
        <DayCardExercise>Exercise 6</DayCardExercise>
        <DayCardExercise>Exercise 7</DayCardExercise>
      </DayCardContent>
    </>
  );
}

export default DayCard;
