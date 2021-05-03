import React from "react";
import LoginForm from "./LoginForm/LoginForm";
import LoginFormInput from "./LoginForm/LoginFormInput";
import LoginFormButton from "./LoginForm/LoginFormButton";
import LoginFormLinks from "./LoginForm/LoginFormLinks";
import {Link} from "react-router-dom";



class Login extends React.Component {
  render() {
    return <LoginForm title="Zaloguj się">
      <LoginFormInput  title="Adres e-mail" type="e-mail" name="e-mail"/>
      <LoginFormInput title="Hasło" type="password" name="password"/>
      <LoginFormButton  name="Zaloguj się"/>

      <LoginFormLinks>
      <Link to="/password-reset">Przypomnij hasło.</Link>
      </LoginFormLinks>

    </LoginForm>;
  }
}
export default Login;
