import { useEffect, useState } from "react";
// import { getToken } from "../../index.js";

import {
  CreateAccContent,
  CreateAccTitle,
  CreateAccSubtitle,
  CreateAccInput,
  CreateAccButton,
  CreateAccError,
  CreateAccSuccess,
  CreateAccSuccessImgContainer,
  CreateAccSuccessImg,
} from "./styled.js";

function CreateAccPage(props) {
  const { isSignUpOpen, isSuccessMessage } = props;

  const [username, isUsername] = useState("");
  const [email, isEmail] = useState("");
  const [password, isPassword] = useState("");
  const [passwordRepeat, isPasswordRepeat] = useState("");
  const [newUser, isNewUser] = useState(false);

  const [errorUsernameEmpty, isErrorUsernameEmpty] = useState(false);
  const [errorEmailValid, isErrorEmailValid] = useState(false);
  const [passwordValid, isPasswordValid] = useState(false);
  const [passwordMatch, isPasswordMatch] = useState(false);

  function signUpUser() {
    if (
      !errorUsernameEmpty
      // !errorEmailValid &&
      // !passwordValid
      // !passwordMatch
    ) {
      let user = {
        username: username,
        email: email,
        password: password,
      };

      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*",
        },
        body: JSON.stringify(user),
      };

      const fetchToken = async () => {
        const responce = await fetch(
          "http://localhost:8080/api/signup",
          requestOptions
        );
        const data = await responce.json();
        // getToken(data);
      };
      fetchToken();
      isNewUser(true);
      isSuccessMessage(true);
      setTimeout(() => {
        isNewUser(false);
        isSignUpOpen(false);
      }, 3000);
    }
  }

  useEffect(() => {
    const validUsername = new RegExp(/^[A-Za-z][A-Za-z0-9_]{3,10}$/);
    const validEmail = new RegExp(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/);
    const validPassword = new RegExp(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
    );
    isErrorUsernameEmpty(!validUsername.test(username));
    isErrorEmailValid(!validEmail.test(email) || email.trim() === "");
    isPasswordValid(!validPassword.test(password));
    isPasswordMatch(password.value === passwordRepeat.value);
  }, [username, email, password, passwordRepeat]);

  return (
    <>
      {newUser ? (
        <CreateAccSuccess>
          Successful registration, please wait...
          <CreateAccSuccessImgContainer>
            <CreateAccSuccessImg src="./assets/success_icon.svg" />
          </CreateAccSuccessImgContainer>
        </CreateAccSuccess>
      ) : (
        <CreateAccContent>
          <CreateAccTitle>Create an account </CreateAccTitle>
          <CreateAccSubtitle>Username:</CreateAccSubtitle>
          <CreateAccInput
            placeholder="Your name..."
            onChange={(e) => {
              isUsername(e.target.value);
            }}
          />
          {errorUsernameEmpty ? (
            <CreateAccError>
              Min length - 4, can contain letters, numbers and "_"{" "}
            </CreateAccError>
          ) : (
            <></>
          )}
          <CreateAccSubtitle>E-mail:</CreateAccSubtitle>
          <CreateAccInput
            placeholder="example@gmail.com..."
            onChange={(e) => {
              isEmail(e.target.value);
            }}
          />
          {errorEmailValid ? (
            <CreateAccError>example@gmail.com</CreateAccError>
          ) : (
            <></>
          )}
          <CreateAccSubtitle>Password:</CreateAccSubtitle>
          <CreateAccInput
            placeholder="Password..."
            onChange={(e) => {
              isPassword(e.target.value);
            }}
          />
          {passwordValid ? (
            <CreateAccError>
              Min length - 8, must contain 1 symbol and 1 number
            </CreateAccError>
          ) : (
            <></>
          )}
          <CreateAccSubtitle>Confirm Password:</CreateAccSubtitle>
          <CreateAccInput
            placeholder="Confirm Password..."
            onChange={(e) => {
              isPasswordRepeat(e.target.value);
            }}
          />
          {passwordMatch ? (
            <CreateAccError>Passwords didn't match</CreateAccError>
          ) : (
            <></>
          )}
          <CreateAccButton onClick={() => isSignUpOpen(false)}>
            Back
          </CreateAccButton>
          <CreateAccButton onClick={() => signUpUser()}>
            Sign Up
          </CreateAccButton>
        </CreateAccContent>
      )}
    </>
  );
}
export default CreateAccPage;
