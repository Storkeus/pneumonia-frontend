import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { uploadImageAsync } from "../Redux/Slices/Image";
import Form from "./Form/Form";
import FormInput from "./Form/FormInput";
import Page from "./Page/Page";
import { useHistory } from "react-router-dom";
import AuthUser from "./Auth/AuthUser";

const UploadImage = (props) => {
  const history = useHistory();

  const [image, setImage] = useState("");
  const dispatch = useDispatch();

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(uploadImageAsync(image)).then(() => {
      history.push("/prediction");
    });
  };
  return (
    <AuthUser>
      <Page title="Prześlij zdjęcie">
        <Form onSubmit={handleSubmit} submitName="Wyślij">
          <FormInput
            onChange={handleImageChange}
            title="Zdjęcie"
            type="file"
            name="plik"
            accept="*/dicom,.dcm, image/dcm, */dcm, .dicom"
          />
        </Form>
      </Page>
    </AuthUser>
  );
};

export default UploadImage;
