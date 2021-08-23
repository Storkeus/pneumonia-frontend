import React, { useState } from "react";
import LoginForm from "./LoginForm/LoginForm";
import LoginFormInput from "./LoginForm/LoginFormInput";
import LoginFormButton from "./LoginForm/LoginFormButton";
import LoginFormLinks from "./LoginForm/LoginFormLinks";
import { Link } from "react-router-dom";
import AuthNotLogged from "./Auth/AuthNotLogged";
import { useDispatch } from "react-redux";
import { checkIsValidEmail } from "../Common/FormValidation";
import { passwordReset } from "../Redux/Slices/User";

/**
 * Password reset page
 * @returns {object} \<AuthNotLogged\>
 */
const PasswordReset = () => {

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
    dispatch(passwordReset(email, password)).then((isLogged) => {
      if (!isLogged) {
        setPasswordErrorInfo("Podane dane są nieprawidłowe");
      }
    });
  };

  return (
    <AuthNotLogged>
      <LoginForm onSubmit={handleFormSubmit} title="Reset hasła">
        <LoginFormInput value={email} onChange={setEmail} errorInfo={emailErrorInfo} title="Adres e-mail" type="e-mail" name="e-mail" />
        <LoginFormInput value={password} onChange={setPassword} errorInfo={passwordErrorInfo} title="Nowe hasło" type="password" name="password" />
        <LoginFormButton name="Resetuj hasło" />

        <LoginFormLinks>
          <Link to="/login">Powrót do logowania.</Link>
        </LoginFormLinks>
      </LoginForm>
    </AuthNotLogged>
  );
};

export default PasswordReset;
