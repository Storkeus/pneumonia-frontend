import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AuthUser from "./Auth/AuthUser";
import Page from "./Page/Page";
import {
  selectSrc,
  selectBBoxes,
  selectDescription,
} from "../Redux/Slices/Image";
import { Link, Redirect } from "react-router-dom";
import PredictionCorrection from "./PredictionCorrection/PredictionCorrection";

/**
 * Prediction result page
 * @param {object} props
 * @returns {object} <AuthUser\>
 */
const Prediction = (props) => {
  const dispatch = useDispatch();
  const src = useSelector(selectSrc);
  const description = useSelector(selectDescription);
  const [bboxes, setBboxes] = useState([]);

  const resetBBoxes = () => {
    setBboxes([]);
  }

  return (
    <AuthUser>
      {src ? (
        <Page title="Wynik predykcji">
          <div style={{ textAlign: "center" }}>
            <PredictionCorrection
              bboxes={bboxes}
              setBboxes={setBboxes}
              src={`${process.env.REACT_APP_API_URL}/${src}`}
              alt=""
            />
            <button onClick={resetBBoxes}>Usuń zaznaczone obszary</button>
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
