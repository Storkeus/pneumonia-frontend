import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { loadByIdAsync, selectSingle } from "../Redux/Slices/UserList";
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

/**
 * User edit form
 * @param {object} props
 * @returns {object} \<AuthAdmin\>
 */
const UserForm = (props) => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [emailErrorInfo, setEmailErrorInfo] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [firstNameErrorInfo, setFirstNameErrorInfo] = useState(false);

  const [lastName, setLastName] = useState("");
  const [lastNameErrorInfo, setLastNameErrorInfo] = useState(false);

  const { id = false } = useParams();

  const isEdit = !!id;

  const current = useSelector(selectSingle);
  const { login = "", name = "", surname = "" } = current;

  /**
   * Loading list of patients
   */
  useEffect(() => {
    if (id) {
      dispatch(loadByIdAsync(id));
      setEmail(login);
      setFirstName(name);
      setLastName(surname);
    }
  }, [dispatch, id, login, name, surname]);

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

      toast.success("Zapisano dane użytkownika!");
    } catch (exception) {
      return false;
    }
  };

  useEffect(() => {
    if (id) {
      dispatch(loadByIdAsync(id));
    }
  }, [id, dispatch]);

  return (
    <AuthAdmin>
      <Page title={`${isEdit ? "Edycja" : "Dodawanie"} użytkownika`}>
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
        </Form>
      </Page>
    </AuthAdmin>
  );
};

export default UserForm;
