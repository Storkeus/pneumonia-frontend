import React, { } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import AuthNotLogged from "./Auth/AuthNotLogged";
import LoginForm from "./LoginForm/LoginForm";
import LoginFormLinks from "./LoginForm/LoginFormLinks";

const PasswordSetFailure = () => {



  return (
    <AuthNotLogged>
      <LoginForm title="Nie udało się zapisać hasła." >

        <LoginFormLinks>
          <Link to="/login"> Przejdź do logowania</Link>
        </LoginFormLinks>
      </LoginForm>
    </AuthNotLogged>
  );
};
export default PasswordSetFailure;
