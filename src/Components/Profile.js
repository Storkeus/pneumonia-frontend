import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AuthAdmin from "./Auth/AuthAdmin";
import Form from "./Form/Form";
import FormInput from "./Form/FormInput";
import Page from "./Page/Page";
import { toast } from "react-toastify";
import {
  checkIsValidEmail,
  MAIL_VALIDATION_ERROR,
  REQUIRED_VALIDATION_ERROR,
} from "../Common/FormValidation";
import { selectUser, updateAsync } from "../Redux/Slices/User";

/**
 * User edit form
 * @param {object} props
 * @returns {object} \<AuthAdmin\>
 */
const Profile = (props) => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [emailErrorInfo, setEmailErrorInfo] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [firstNameErrorInfo, setFirstNameErrorInfo] = useState(false);

  const [lastName, setLastName] = useState("");
  const [lastNameErrorInfo, setLastNameErrorInfo] = useState(false);

  const [password, setPassword] = useState("");


  const current = useSelector(selectUser);
  const { email: login = "", first_name: name = "", last_name: surname = "" } = current;

  /**
   * Loading list of patients
   */
  useEffect(() => {

    setEmail(login);
    setFirstName(name);
    setLastName(surname);

  }, [current, login, name, surname]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setEmailErrorInfo("");
    setFirstNameErrorInfo("");
    setLastNameErrorInfo("");

    try {
      let isValidated = true;

      if (!checkIsValidEmail(email)) {
        setEmailErrorInfo(MAIL_VALIDATION_ERROR);
        isValidated = false;
      }

      if (!firstName) {
        setFirstNameErrorInfo(REQUIRED_VALIDATION_ERROR);
        isValidated = false;
      }

      if (!lastName) {
        setLastNameErrorInfo(REQUIRED_VALIDATION_ERROR);
        isValidated = false;
      }

      if (!isValidated) {
        throw new Error("Validation error");
      }

      dispatch(updateAsync({ email: login, first_name: firstName, last_name: lastName, password: password }));

      toast.success("Zapisano dane użytkownika!");

    } catch (exception) {
      return false;
    }
  };

  return (
    <AuthAdmin>
      <Page title={`Zmiana danych konta`} >
        <Form onSubmit={handleSubmit}>
          <FormInput
            value={email}
            onChange={setEmail}
            errorInfo={emailErrorInfo}
            title="Adres e-mail"
            type="e-mail"
            name="e-mail"
          />
          <FormInput
            value={firstName}
            onChange={setFirstName}
            errorInfo={firstNameErrorInfo}
            title="Imię"
            type="text"
            name="first-name"
          />
          <FormInput
            value={lastName}
            onChange={setLastName}
            errorInfo={lastNameErrorInfo}
            title="Nazwisko"
            type="text"
            name="last-name"
          />
          <br /><br />
          <FormInput
            value={password}
            onChange={setPassword}
            title="Nowe hasło"
            type="password"
            name="password"
          />
        </Form>
      </Page>
    </AuthAdmin>
  );
};

export default Profile;
