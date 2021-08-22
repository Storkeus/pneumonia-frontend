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
    const chancePercent = parseInt(chance * 1000) / 100;

    if (chancePercent < 10) {
      return 'znikome';
    }

    if (chancePercent < 30) {
      return 'bardzo niskie'
    }

    if (chancePercent < 40) {
      return 'niskie'
    }

    if (chancePercent < 60) {
      return 'niejednoznaczne'
    }

    if (chancePercent < 70) {
      return 'średnie'
    }

    if (chancePercent < 85) {
      return 'wysokie'
    }

    return 'bardzo wysokie';

  };

  return (
    <AuthUser>
      {src ? (
        <Page title="Wynik predykcji">
          <div style={{ textAlign: "center" }}>
            <p>{description}</p>
            <p>Prawdopodobieńśtwo wystąpienia zapalenia płuc: <strong style={{ textDecoration: 'underline dashed', cursor: 'pointer' }} title="0%-10% - znikome,
            11%-30% - bardzo niskie,
            31%-40% - niskie,
            41%-60% - niejednoznaczne,
            61%-70% - średnie,
            71%-85% - wysokie,
            86%-100% - bardzo wysokie
             ">{chanceToText(chance)}</strong></p>
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
