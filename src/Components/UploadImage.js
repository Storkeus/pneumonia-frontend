import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { uploadImageAsync } from "../Redux/Slices/Image";
import AuthAdmin from "./Auth/AuthAdmin";
import Form from "./Form/Form";
import FormInput from "./Form/FormInput";
import Page from "./Page/Page";

const UploadImage = (props) => {
  const [image, setImage] = useState("");
  const dispatch = useDispatch();

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(uploadImageAsync(image));
  };
  return (
    <AuthAdmin>
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
    </AuthAdmin>
  );
};

export default UploadImage;
