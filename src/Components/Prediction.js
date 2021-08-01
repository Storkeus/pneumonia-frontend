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
import { Link, Redirect } from "react-router-dom";
import { StyledLink } from "./StyledLink";

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
            <p>{description}</p>
            <PredictionImage
              bboxes={bboxes}
              src={`${process.env.REACT_APP_API_URL}/${src}`}
              alt=""
            />
            <StyledLink to="/correction">Popraw predykcję</StyledLink>
          </div>
        </Page>
      ) : (
        <Redirect to="/image-upload" />
      )}
    </AuthUser>
  );
};

export default Prediction;
