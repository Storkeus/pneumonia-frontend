import React, { useEffect, useState } from "react";
import LoginForm from "./LoginForm/LoginForm";
import LoginFormInput from "./LoginForm/LoginFormInput";
import LoginFormButton from "./LoginForm/LoginFormButton";
import LoginFormLinks from "./LoginForm/LoginFormLinks";
import { Link } from "react-router-dom";
import { checkIsValidEmail } from "../Common/FormValidation";
import { loginAsync, selectUser } from "../Redux/Slices/User";
import { useDispatch, useSelector } from "react-redux";
import AuthNotLogged from "./Auth/AuthNotLogged";

const Login = () => {
  const [email, setEmail] = useState("");
  const [emailErrorInfo, setEmailErrorInfo] = useState(false);
  const [password, setPassword] = useState("");
  const [isUser, setIsUser] = useState(false);
  const [passwordErrorInfo, setPasswordErrorInfo] = useState(false);
  const dispatch = useDispatch();

  const handleFormSubmit = (event) => {
    event.preventDefault();

    let isProperForm = true;
    if (!checkIsValidEmail(email)) {
      isProperForm = false;
      setEmailErrorInfo("Adres e-mail jest nieprawidłowy");
      return;
    } else {
      setEmailErrorInfo("");
    }


    // setPasswordErrorInfo("");
    dispatch(loginAsync(email, password)).then(()=>{

      setPasswordErrorInfo("Podane dane są nieprawidłowe");
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
          errorInfo={isUser?'':passwordErrorInfo}
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
