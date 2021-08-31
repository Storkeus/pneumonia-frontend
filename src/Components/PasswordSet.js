import React, { useState } from "react";
import LoginForm from "./LoginForm/LoginForm";
import LoginFormInput from "./LoginForm/LoginFormInput";
import LoginFormButton from "./LoginForm/LoginFormButton";
import LoginFormLinks from "./LoginForm/LoginFormLinks";
import { Link, useParams } from "react-router-dom";
import AuthNotLogged from "./Auth/AuthNotLogged";
import { useDispatch } from "react-redux";
import { checkIsValidEmail } from "../Common/FormValidation";
import { passwordSet } from "../Redux/Slices/User";

/**
 * Password set page
 * @returns {object} \<AuthNotLogged\>
 */
const PasswordSet = () => {

  const { token, email: emailParam } = useParams();

  const [email, setEmail] = useState(decodeURIComponent(emailParam));
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
    dispatch(passwordSet(email, password, token)).then((isLogged) => {
      if (!isLogged) {
        setPasswordErrorInfo("Podane dane są nieprawidłowe");
      }
    });
  };

  return (
    <AuthNotLogged>
      <LoginForm onSubmit={handleFormSubmit} title="Ustawianie hasła">
        <LoginFormInput readOnly value={email} onChange={setEmail} errorInfo={emailErrorInfo} title="Adres e-mail" type="e-mail" name="e-mail" />
        <LoginFormInput value={password} onChange={setPassword} errorInfo={passwordErrorInfo} title="Hasło" type="password" name="password" />
        <LoginFormButton name="Zapisz hasło" />

        <LoginFormLinks>
          <Link to="/login">Przejdź do logowania.</Link>
        </LoginFormLinks>
      </LoginForm>
    </AuthNotLogged>
  );
};

export default PasswordSet;
