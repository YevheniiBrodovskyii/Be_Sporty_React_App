import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import {
  CardContent,
  CardName,
  CardImageContainer,
  CardImage,
} from "./styled.js";

import PopupMain from "../PopupMain/PopupMain.jsx";

function Card({ name, id }) {
  const [exercises, takeExercises] = useState([]);

  const token = useSelector((state) => state.data.data.token);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      headers: {
        Accept: "*/*",
        Authorization: `Bearer ${token}`,
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
  }, [token, id]);

  const [popupOpen, isPopupOpen] = useState(false);

  return (
    <>
      <CardContent onClick={() => isPopupOpen(true)}>
        <CardImageContainer>
          <CardImage src="" />
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
