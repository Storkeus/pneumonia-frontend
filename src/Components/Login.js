import React, { useState } from "react";
import LoginForm from "./LoginForm/LoginForm";
import LoginFormInput from "./LoginForm/LoginFormInput";
import LoginFormButton from "./LoginForm/LoginFormButton";
import LoginFormLinks from "./LoginForm/LoginFormLinks";
import { Link } from "react-router-dom";
import { checkIsValidEmail } from "../Common/FormValidation";
import { loginAsync } from "../Redux/Slices/User";
import { useDispatch } from "react-redux";
import AuthNotLogged from "./Auth/AuthNotLogged";

const Login = () => {
  const [email, setEmail] = useState("");
  const [emailErrorInfo, setEmailErrorInfo] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordErrorInfo, setPasswordErrorInfo] = useState(false);
  const dispatch = useDispatch();

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!checkIsValidEmail(email)) {
      setEmailErrorInfo("Adres e-mail jest nieprawidłowy");
      return;
    } else {
      setEmailErrorInfo("");
    }

    setPasswordErrorInfo("");
    dispatch(loginAsync(email, password)).then((isLogged) => {
      if (!isLogged) {
        setPasswordErrorInfo("Podane dane są nieprawidłowe");
      }
    });
  };

  return (
    <AuthNotLogged>
      <LoginForm onSubmit={handleFormSubmit} title="Zaloguj się">
        <LoginFormInput
          value={email}
          onChange={setEmail}
          errorInfo={emailErrorInfo}
          title="Adres e-mail"
          type="e-mail"
          name="e-mail"
        />
        <LoginFormInput
          value={password}
          onChange={setPassword}
          errorInfo={passwordErrorInfo}
          title="Hasło"
          type="password"
          name="password"
        />
        <LoginFormButton name="Zaloguj się" />
        <LoginFormLinks>
          <Link to="/password-reset">Przypomnij hasło.</Link>
        </LoginFormLinks>
      </LoginForm>
    </AuthNotLogged>
  );
};
export default Login;
