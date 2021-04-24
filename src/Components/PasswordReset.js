import React from "react";
import LoginForm from "./LoginForm/LoginForm";
import LoginFormInput from "./LoginForm/LoginFormInput";
import LoginFormButton from "./LoginForm/LoginFormButton";
import LoginFormLinks from "./LoginForm/LoginFormLinks";
import {Link} from "react-router-dom";


class PasswordReset extends React.Component {
  render() {
    return <LoginForm title="Reset hasła">
      <LoginFormInput title="Adres e-mail" type="e-mail" name="e-mail"/>
      <LoginFormInput title="Nowe hasło" type="password" name="password"/>
      <LoginFormButton  name="Resetuj hasło"/>

      <LoginFormLinks>
      <Link to="/login">Powrót do logowania.</Link>
      </LoginFormLinks>

    </LoginForm>;
  }
}
export default PasswordReset;