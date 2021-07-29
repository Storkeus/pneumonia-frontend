import React, { useState } from "react";
import Form from "./Form/Form";
import FormInput from "./Form/FormInput";
import Page from "./Page/Page";
import { useHistory } from "react-router-dom";
import AuthUser from "./Auth/AuthUser";

const UploadModel = (props) => {
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();

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
          />

        </Form>
      </Page>
    </AuthUser>
  );
};

export default UploadModel;
