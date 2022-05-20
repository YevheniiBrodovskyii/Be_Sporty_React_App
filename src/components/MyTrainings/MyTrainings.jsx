import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getData } from "../../store/userData.js";
import { getUserName } from "../../store/userName.js";
import { setError } from "../../store/errorInfo.js";
import { setLoading } from "../../store/loadingStatus.js";
import {
  MyTrainingsContainer,
  MytrainingsWarning,
  MytrainingsWarningImgContainer,
  MytrainingsWarningImg,
  MytrainingsWarningDescr,
  MytrainingsWarningButtonContainer,
  MytrainingsWarningButton,
} from "./styled.js";
import DayCard from "../DayCard/DayCard";
import Loader from "../Loader/Loader.jsx";

function MyTrainings({ active }) {
  const [userExercise, takeUserExercise] = useState([]);
  const [refetch, isRefetch] = useState(false);

  const token = useSelector((state) => state.data.data.token);
  const username = useSelector((state) => state.username.username);
  const loaded = useSelector((state) => state.loaded.loaded);

  const dispatch = useDispatch();

  function goLogin() {
    dispatch(getData([]));
    dispatch(getUserName(""));
  }

  useEffect(() => {
    if ((active || refetch) && token !== "quest") {
      const requestOptions = {
        method: "GET",
        headers: {
          Accept: "*/*",
          Authorization: `Bearer ${token}`,
        },
      };

      const fetchUserTrainings = async () => {
        const responce = await fetch(
          `http://localhost:8080/api/user/trainings/${username}`,
          requestOptions
        );
        if (responce.status !== 200) {
          const data = await responce.json();
          dispatch(setError(data.error_message));
          dispatch(getData([]));
          dispatch(getUserName(""));
        }
        const data = await responce.json();
        takeUserExercise(data);
        dispatch(setLoading(false));
      };
      fetchUserTrainings();

      isRefetch(false);
    }
  }, [active, token, username, refetch, dispatch]);

  return (
    <>
      {loaded ? (
        <Loader />
      ) : (
        <>
          {token === "quest" ? (
            <MytrainingsWarning>
              <MytrainingsWarningImgContainer>
                <MytrainingsWarningImg
                  src="./assets/exclamation.svg"
                  alt="exclamation"
                />
              </MytrainingsWarningImgContainer>
              <MytrainingsWarningDescr>
                Create an account to access this page
              </MytrainingsWarningDescr>
              <MytrainingsWarningButtonContainer>
                <MytrainingsWarningButton onClick={() => goLogin()}>
                  Create an account
                </MytrainingsWarningButton>
              </MytrainingsWarningButtonContainer>
            </MytrainingsWarning>
          ) : (
            <MyTrainingsContainer>
              {userExercise.map((item) => (
                <DayCard
                  key={item.id}
                  day={item.day}
                  exercisesPerDay={item.exercisesPerDay}
                  isRefetch={isRefetch}
                />
              ))}
            </MyTrainingsContainer>
          )}
        </>
      )}
    </>
  );
}

export default MyTrainings;
