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
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import APIConnection from "../Common/APIConnection";
import { selectUser } from "../Redux/Slices/User";

/**
 * User edit form
 * @param {object} props
 * @returns {object} \<AuthAdmin\>
 */
const UserForm = (props) => {
  const dispatch = useDispatch();

  const { token } = useSelector(selectUser);

  const [email, setEmail] = useState("");
  const [emailErrorInfo, setEmailErrorInfo] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [firstNameErrorInfo, setFirstNameErrorInfo] = useState(false);

  const [lastName, setLastName] = useState("");
  const [lastNameErrorInfo, setLastNameErrorInfo] = useState(false);

  const history = useHistory();

  const { id = false } = useParams();

  const isEdit = !!id;

  const current = useSelector(selectSingle);
  const { email: emailCurrent = "", first_name: firstNameCurrent = "", last_name: lastNameCurrent = "" } = current;

  /**
   * Loading list of patients
   */
  useEffect(() => {
    if (id) {
      dispatch(loadByIdAsync(id));
      setEmail(emailCurrent);
      setFirstName(firstNameCurrent);
      setLastName(lastNameCurrent);
    }
  }, [dispatch, id, emailCurrent, firstNameCurrent, lastNameCurrent]);

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

      new APIConnection(`${process.env.REACT_APP_API_URL}/api/users${id ? `/${id}` : ''}`).setBody({
        first_name: firstName,
        last_name: lastName,
        email: email
      }).authorizeJWT(token).connectPUT();

      toast.success("Zapisano dane użytkownika!");
      history.push('/users');
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
