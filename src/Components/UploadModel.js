import React, { useState } from "react";
import Form from "./Form/Form";
import FormInput from "./Form/FormInput";
import Page from "./Page/Page";
import { useHistory } from "react-router-dom";
import AuthUser from "./Auth/AuthUser";
import { useSelector } from "react-redux";
import { selectUser } from "../Redux/Slices/User";
import { readFile } from "../Common/ReadFile";
import APIConnection from "../Common/APIConnection";

const UploadModel = (props) => {
  const history = useHistory();
  const [file, setFile] = useState(null);

  const { token } = useSelector(selectUser);

  const handleFileChange = (event) => {
    try {

      const uploadedFile = event.target.files[0];
      setFile(uploadedFile);

    } catch (error) {
      return false;
    }


  }

  const handleSubmit = async (event) => {
    event.preventDefault();



    const { size } = file;
    const fileBinaryData = await readFile(file);

    await new APIConnection(`${process.env.REACT_APP_API_URL}/api/update-model`).setBody(fileBinaryData, 'binary').addHeader('Content-Length', size).authorizeJWT(token).connectPOST();


  };
  return (
    <AuthUser>
      <Page title="Prześlij model">
        <Form onSubmit={handleSubmit} submitName="Wyślij">
          <label htmlFor="UpdateModelInput">Prześlij nowy model w formacie .pkl </label>
          <input
            id="UpdateModelInput"
            title="Prześlij model"
            type="file"
            name="plik"
            accept=".pkl"
            onChange={handleFileChange}
          />

        </Form>
      </Page>
    </AuthUser>
  );
};

export default UploadModel;
