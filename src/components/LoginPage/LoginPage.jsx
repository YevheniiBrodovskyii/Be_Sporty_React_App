import { useState } from "react";
import { connect } from "react-redux";
import { getToken } from "../../index.js";
import {
  LoginPageContent,
  LoginPageTitle,
  LoginPageSubtitle,
  LoginPageInput,
  LoginPageButton,
  LoginPageButtonGuest,
  LoginError,
} from "./styled.js";

import CreateAccPage from "../CreateAccPage/CreateAccPage";

function LoginPage({ token }) {
  const [signUp, isSignUpOpen] = useState(false);
  const [username, isUsername] = useState("");
  const [password, isPassword] = useState("");

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
      getToken(data);
    };
    fetchToken();
  }

  return (
    <>
      {signUp ? (
        <CreateAccPage isSignUpOpen={isSignUpOpen} />
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
          <LoginError>Error Message</LoginError>
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
const mapStateToProps = (state) => ({
  loaded: state.loaded,
  token: state.token,
});
export default connect(mapStateToProps)(LoginPage);
