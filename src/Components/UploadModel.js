import React, { useState } from "react";
import Form from "./Form/Form";
import Page from "./Page/Page";
import AuthUser from "./Auth/AuthUser";
import { useSelector } from "react-redux";
import { selectUser } from "../Redux/Slices/User";
import APIConnection from "../Common/APIConnection";
import { toast } from "react-toastify";

const UploadModel = (props) => {
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
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
    if (!file) {
      toast.error('Wybierz plik do przesłania.');
      return;
    }

    setIsLoading(true);


    const formData = new FormData()

    formData.append('model', file);

    try {

      await new APIConnection(`${process.env.REACT_APP_API_URL}/api/update-model`).setBody(formData, 'form').authorizeJWT(token).connectPOST();
      toast.success("Zaktualizowano model.");
      setIsLoading(false);
    } catch (error) {
      toast.error("Wystąpił błąd. Nie udało zię zaktualizować modelu.");
    }


  };
  return (
    <AuthUser>
      <Page title="Prześlij model">
        <Form isLoading={isLoading} onSubmit={handleSubmit} submitName="Wyślij">
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
