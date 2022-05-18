import { CardsContainer } from "./styled.js";

import Card from "../Card/Card";
import { useEffect, useState } from "react";

function Cards() {
  const [exerciseGroups, takeExerciseGroups] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      headers: {
        Accept: "*/*",
      },
    };

    const fetchExerciseGroups = async () => {
      const responce = await fetch(
        "http://localhost:8080/api/exercises/group/all",
        requestOptions
      );
      const data = await responce.json();
      takeExerciseGroups(data);
    };
    fetchExerciseGroups();
  }, []);

  return (
    <CardsContainer>
      {exerciseGroups.map((item) => (
        <Card key={item.id} name={item.name} id={item.id} img={item.imageSrc} />
      ))}
    </CardsContainer>
  );
}

export default Cards;
