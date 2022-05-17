import { useState } from "react";

import { useDispatch } from "react-redux";
import { getData } from "../../store/userData.js";
import { getUserName } from "../../store/userName.js";
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

  const [errorMessage, isErrorMessage] = useState(false);
  const [successMessage, isSuccessMessage] = useState(false);

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
      const data = await responce.json();
      const getUserData = () => dispatch(getData(data));
      const getUserUsername = () => dispatch(getUserName(user.username));
      getUserData();
      getUserUsername();
    };
    fetchToken();
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
            placeholder="Password..."
            onChange={(e) => {
              isPassword(e.target.value);
            }}
          />
          {errorMessage ? <LoginError>Error Message</LoginError> : <></>}
          {successMessage ? (
            <LoginSuccess>Sign in using the created account</LoginSuccess>
          ) : (
            <></>
          )}
          <LoginPageButton onClick={() => LoginUser()}>Login</LoginPageButton>
          <LoginPageButton onClick={() => isSignUpOpen(true)}>
            Sign Up
          </LoginPageButton>
          <LoginPageButtonGuest>Continiue as guest...</LoginPageButtonGuest>
        </LoginPageContent>
      )}
    </>
  );
}

export default LoginPage;
