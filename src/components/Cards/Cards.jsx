import { CardsContainer } from "./styled.js";
import { useSelector } from "react-redux";

import Card from "../Card/Card";
import { useEffect, useState } from "react";

function Cards() {
  const [exerciseGroups, takeExerciseGroups] = useState([]);

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
        "http://localhost:8080/api/exercises/group/all",
        requestOptions
      );
      const data = await responce.json();
      takeExerciseGroups(data);
    };
    fetchExerciseGroups();
  }, [token]);

  return (
    <CardsContainer>
      {exerciseGroups.map((item) => (
        <Card key={item.id} name={item.name} id={item.id} />
      ))}
    </CardsContainer>
  );
}

export default Cards;
