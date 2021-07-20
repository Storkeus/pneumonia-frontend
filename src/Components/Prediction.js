import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AuthUser from "./Auth/AuthUser";
import Page from "./Page/Page";
import {
  selectSrc,
  selectBBoxes,
  selectDescription,
} from "../Redux/Slices/Image";
import PredictionImage from "./PredictionImage/PredictionImage";
import { Redirect } from "react-router-dom";

/**
 * Prediction result page
 * @param {object} props
 * @returns {object} <AuthUser\>
 */
const Prediction = (props) => {
  const dispatch = useDispatch();
  const src = useSelector(selectSrc);
  const description = useSelector(selectDescription);
  const bboxes = useSelector(selectBBoxes);

  return (
    <AuthUser>
      {src ? (
        <Page title="Wynik predykcji">
          <div style={{ textAlign: "center" }}>
            <PredictionImage
              bboxes={bboxes}
              src={`${process.env.REACT_APP_API_URL}/${src}`}
              alt=""
            />
            <p>{description}</p>
          </div>
        </Page>
      ) : (
        <Redirect to="/image-upload" />
      )}
    </AuthUser>
  );
};

export default Prediction;
