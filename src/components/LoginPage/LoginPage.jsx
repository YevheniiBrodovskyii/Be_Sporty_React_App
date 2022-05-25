import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../store/userData.js";
import { getUserName } from "../../store/userName.js";
import { setError } from "../../store/errorInfo.js";
import {
  LoginPageContent,
  LoginPageTitle,
  LoginPageSubtitle,
  LoginPageInput,
  LoginPageButton,
  LoginPageButtonGuest,
  LoginError,
  LoginSuccess,
} from "./styled.js";

import CreateAccPage from "../CreateAccPage/CreateAccPage";

function LoginPage() {
  const [signUp, isSignUpOpen] = useState(false);
  const [username, isUsername] = useState("");
  const [password, isPassword] = useState("");

  const [successMessage, isSuccessMessage] = useState(false);

  const errorMessage = useSelector((state) => state.error.error);

  const dispatch = useDispatch();

  function LoginUser() {
    let user = {
      username: username,
      password: password,
    };

    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "*/*",
      },
      body: JSON.stringify(user),
    };

    const fetchToken = async () => {
      const responce = await fetch(
        "http://localhost:8080/api/login",
        requestOptions
      );
      if (responce.status !== 200) {
        const data = await responce.json();
        dispatch(setError(data.error_message));
        dispatch(getData([]));
        dispatch(getUserName(""));
      }
      const data = await responce.json();
      dispatch(getData(data));
      dispatch(getUserName(user.username));
    };
    fetchToken();
  }

  function asGuest() {
    dispatch(getData({ token: "quest" }));
    dispatch(getUserName("guest"));
    dispatch(setError(""));
  }

  function openSignUp() {
    dispatch(setError(""));
    isSignUpOpen(true);
  }

  return (
    <>
      {signUp ? (
        <CreateAccPage
          isSignUpOpen={isSignUpOpen}
          isSuccessMessage={isSuccessMessage}
        />
      ) : (
        <LoginPageContent>
          <LoginPageTitle>Sign in to SportApp</LoginPageTitle>
          <LoginPageSubtitle>Username:</LoginPageSubtitle>
          <LoginPageInput
            placeholder="Your name..."
            onChange={(e) => {
              isUsername(e.target.value);
            }}
          />
          <LoginPageSubtitle>Password:</LoginPageSubtitle>
          <LoginPageInput
            type="password"
            placeholder="Password..."
            onChange={(e) => {
              isPassword(e.target.value);
            }}
          />
          {errorMessage ? <LoginError>{errorMessage}</LoginError> : <></>}
          {successMessage ? (
            <LoginSuccess>Sign in using the created account</LoginSuccess>
          ) : (
            <></>
          )}
          <LoginPageButton onClick={() => LoginUser()}>Login</LoginPageButton>
          <LoginPageButton onClick={() => openSignUp()}>
            Sign Up
          </LoginPageButton>
          <LoginPageButtonGuest onClick={() => asGuest()}>
            Continiue as guest...
          </LoginPageButtonGuest>
        </LoginPageContent>
      )}
    </>
  );
}

export default LoginPage;
