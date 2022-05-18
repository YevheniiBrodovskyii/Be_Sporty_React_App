import { useEffect, useState } from "react";

import {
  CardContent,
  CardName,
  CardImageContainer,
  CardImage,
} from "./styled.js";

import PopupMain from "../PopupMain/PopupMain.jsx";

function Card({ name, img, id }) {
  const [exercises, takeExercises] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      headers: {
        Accept: "*/*",
      },
    };

    const fetchExerciseGroups = async () => {
      const responce = await fetch(
        `http://localhost:8080/api/exercises/group/${id}`,
        requestOptions
      );
      const data = await responce.json();
      takeExercises(data);
    };
    fetchExerciseGroups();
  }, [id]);

  const [popupOpen, isPopupOpen] = useState(false);

  return (
    <>
      <CardContent onClick={() => isPopupOpen(true)}>
        <CardImageContainer>
          <CardImage src={img} />
        </CardImageContainer>
        <CardName>{name}</CardName>
      </CardContent>
      <PopupMain
        popupMain={popupOpen}
        isPopupMainOpen={isPopupOpen}
        name={name}
        exercises={exercises}
      />
    </>
  );
}

export default Card;
