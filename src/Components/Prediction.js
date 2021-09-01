import React from "react";
import { useSelector } from "react-redux";
import AuthUser from "./Auth/AuthUser";
import Page from "./Page/Page";
import {
  selectSrc,
  selectBBoxes,
  selectDescription,
  selectChance,
} from "../Redux/Slices/Image";
import PredictionImage from "./PredictionImage/PredictionImage";
import { Redirect } from "react-router-dom";
import { StyledLink } from "./StyledLink";

/**
 * Prediction result page
 * @param {object} props
 * @returns {object} <AuthUser\>
 */
const Prediction = (props) => {
  const src = useSelector(selectSrc);
  const description = useSelector(selectDescription);
  const bboxes = useSelector(selectBBoxes);
  const chance = useSelector(selectChance);

  const chanceToText = chance => {
    const chancePercent = parseInt(chance * 100);

    let result = `${chancePercent}%`;

    if (chancePercent >= 40 && chancePercent <= 60) {
      result += ' - wynik niepewny';
    }


    return result;
  };

  return (
    <AuthUser>
      {src ? (
        <Page title="Wynik predykcji">
          <div style={{ textAlign: "center" }}>
            <p>{description}</p>
            <p>Prawdopodobieństwo wystąpienia zapalenia płuc: <strong>{chanceToText(chance)}</strong></p>
            <PredictionImage
              bboxes={bboxes}
              src={`${process.env.REACT_APP_API_URL}/${src}`}
              alt=""
            />
            <StyledLink to="/correction">Popraw predykcję</StyledLink>
          </div>
        </Page>
      ) : (
        <Redirect to="/" />
      )}
    </AuthUser>
  );
};

export default Prediction;
