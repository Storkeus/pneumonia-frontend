import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { uploadImageAsync } from "../Redux/Slices/Image";
import Form from "./Form/Form";
import Page from "./Page/Page";
import { useHistory } from "react-router-dom";
import AuthUser from "./Auth/AuthUser";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";


const UploadImage = (props) => {

  const { id: userId } = useParams();
  const history = useHistory();

  const [isLoading, setIsLoading] = useState(false);

  const [image, setImage] = useState("");
  const dispatch = useDispatch();

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    dispatch(uploadImageAsync(userId, image)).then(() => {
      history.push("/prediction");
    });
  };
  return (
    <AuthUser>
      <Page title="Prześlij zdjęcie">

        <Form onSubmit={handleSubmit} isLoading={isLoading} submitName="Analizuj zdjęcie">
          <input
            onChange={handleImageChange}
            title="Prześlij zdjęcie"
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
