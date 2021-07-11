import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { loadByIdAsync, selectSingle } from "../Redux/Slices/PatientList";
import AuthAdmin from "./Auth/AuthAdmin";
import Form from "./Form/Form";
import FormInput from "./Form/FormInput";
import FormSelect from "./Form/FormSelect";
import Page from "./Page/Page";
import { toast } from "react-toastify";
import { REQUIRED_VALIDATION_ERROR } from "../Common/FormValidation";

/**
 * Patient edit form
 * @param {object} props
 * @returns {object} \<AuthAdmin\>
 */
const PatientForm = (props) => {
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState("");
  const [firstNameErrorInfo, setFirstNameErrorInfo] = useState(false);

  const [birthDate, setBirthDate] = useState("");
  const [birthDateErrorInfo, setBirthDateErrorInfo] = useState(false);

  const [gender, setGender] = useState("");
  const [genderErrorInfo, setGenderErrorInfo] = useState(false);

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
      setFirstName(name);
      setLastName(surname);
    }
  }, [dispatch, id, login, name, surname]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setFirstNameErrorInfo("");
    setLastNameErrorInfo("");

    try {
      let isValidated = true;

      if (!firstName) {
        setFirstNameErrorInfo(REQUIRED_VALIDATION_ERROR);
        isValidated = false;
      }

      if (!lastName) {
        setLastNameErrorInfo(REQUIRED_VALIDATION_ERROR);
        isValidated = false;
      }

      if (!birthDate) {
        setBirthDateErrorInfo(REQUIRED_VALIDATION_ERROR);
        isValidated = false;
      }

      if (!gender) {
        setGenderErrorInfo(REQUIRED_VALIDATION_ERROR);
        isValidated = false;
      }

      if (!isValidated) {
        throw new Error("Validation error");
      }

      toast.success("Zapisano dane pacjenta!");
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
      <Page title={`${isEdit ? "Edycja" : "Dodawanie"} pacjenta`}>
        <Form onSubmit={handleSubmit}>
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

          <FormInput
            value={birthDate}
            onChange={setBirthDate}
            errorInfo={birthDateErrorInfo}
            title="Data urodzenia"
            type="date"
            name="birth-date"
          />

          <FormSelect
            value={gender}
            onChange={setGender}
            errorInfo={genderErrorInfo}
            title="Płeć"
            name="last-name"
            options={[
              { name: "Mężczyzna", value: 1 },
              { name: "Kobieta", value: 0 },
            ]}
          />
        </Form>
      </Page>
    </AuthAdmin>
  );
};

export default PatientForm;
