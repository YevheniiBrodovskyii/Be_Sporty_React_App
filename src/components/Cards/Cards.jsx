import { CardsContainer } from "./styled.js";
import { useSelector, useDispatch } from "react-redux";
import Card from "../Card/Card";
import { useEffect, useState } from "react";
import { setLoading } from "../../store/loadingStatus.js";
import Loader from "../Loader/Loader.jsx";
function Cards() {
  const [exerciseGroups, takeExerciseGroups] = useState([]);

  const loaded = useSelector((state) => state.loaded.loaded);

  const dispatch = useDispatch();

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
      dispatch(setLoading(false));
    };
    fetchExerciseGroups();
  }, [dispatch]);

  return (
    <>
      {loaded ? (
        <Loader />
      ) : (
        <CardsContainer>
          {exerciseGroups.map((item) => (
            <Card
              key={item.id}
              name={item.name}
              id={item.id}
              img={item.imageSrc}
            />
          ))}
        </CardsContainer>
      )}
    </>
  );
}

export default Cards;
