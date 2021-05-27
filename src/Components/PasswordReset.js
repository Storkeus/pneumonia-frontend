import React from "react";
import LoginForm from "./LoginForm/LoginForm";
import LoginFormInput from "./LoginForm/LoginFormInput";
import LoginFormButton from "./LoginForm/LoginFormButton";
import LoginFormLinks from "./LoginForm/LoginFormLinks";
import { Link } from "react-router-dom";
import AuthNotLogged from "./Auth/AuthNotLogged";

const PasswordReset = () => {
  return (
    <AuthNotLogged>
    <LoginForm title="Reset hasła">
      <LoginFormInput title="Adres e-mail" type="e-mail" name="e-mail" />
      <LoginFormInput title="Nowe hasło" type="password" name="password" />
      <LoginFormButton name="Resetuj hasło" />

      <LoginFormLinks>
        <Link to="/login">Powrót do logowania.</Link>
      </LoginFormLinks>
    </LoginForm>
    </AuthNotLogged>
  );
};

export default PasswordReset;
