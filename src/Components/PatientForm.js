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
import APIConnection from "../Common/APIConnection";
import { selectUser } from "../Redux/Slices/User";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

/**
 * Patient edit form
 * @param {object} props
 * @returns {object} \<AuthAdmin\>
 */
const PatientForm = (props) => {
  const dispatch = useDispatch();

  const { token } = useSelector(selectUser);

  const [firstName, setFirstName] = useState("");
  const [firstNameErrorInfo, setFirstNameErrorInfo] = useState(false);

  const [identificator, setIdentificator] = useState("");
  const [identificatorInfo, setIdentificatorInfo] = useState(false);

  const [birthDate, setBirthDate] = useState("");
  const [birthDateErrorInfo, setBirthDateErrorInfo] = useState(false);

  const [gender, setGender] = useState("1");
  const [genderErrorInfo, setGenderErrorInfo] = useState(false);

  const [lastName, setLastName] = useState("");
  const [lastNameErrorInfo, setLastNameErrorInfo] = useState(false);

  const { id = false } = useParams();

  const isEdit = !!id;

  const history = useHistory();

  const current = useSelector(selectSingle);
  const { birth_date = "", first_name = "", ident = "", last_name = '', sex = '1' } = current;

  /**
   * Loading list of patients
   */
  useEffect(() => {
    if (id) {
      dispatch(loadByIdAsync(id));
      setFirstName(first_name);
      setLastName(last_name);
      setIdentificator(identificator);
      setBirthDate(birth_date);
      setIdentificator(ident);
      setGender(sex);
    }
  }, [dispatch, id, first_name, last_name, identificator, birth_date, ident, sex]);

  const handleSubmit = async (e) => {
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

      if (!identificator) {
        setIdentificatorInfo(REQUIRED_VALIDATION_ERROR);
        isValidated = false;
      }

      if (!isValidated) {
        throw new Error("Validation error");
      }

      const connection = new APIConnection(`${process.env.REACT_APP_API_URL}/api/patients${id ? `/${id}` : ''}`).setBody({
        first_name: firstName,
        last_name: lastName,
        birth_date: birthDate,
        sex: gender,
        ident: identificator,

      }).authorizeJWT(token);

      if (id) {
        await connection.connectPUT();
      }
      else {
        await connection.connectPOST();
      }

      toast.success("Zapisano dane pacjenta!");
      history.push('/patients');
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
            value={identificator}
            onChange={setIdentificator}
            errorInfo={identificatorInfo}
            title="Identyfikator"
            type="text"
            name="identificator"
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
            title="Płeć "
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
