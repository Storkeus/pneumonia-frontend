import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AuthUser from "./Auth/AuthUser";
import Page from "./Page/Page";
import {
  selectSrc,
  selectBBoxes,
} from "../Redux/Slices/Image";
import { Redirect } from "react-router-dom";
import PredictionCorrection from "./PredictionCorrection/PredictionCorrection";
import { StyledFormButton, StyledFormButtonHorizontalContainer, StyledFormButtonSecondary, StyledFormInputList, StyledFormInputListItem } from "./Form/Styled";
import { HEALTHY, UNCLEAR, UNHEALTHY } from "../Common/PredictionConst";

/**
 * Prediction result page
 * @param {object} props
 * @returns {object} <AuthUser\>
 */
const Prediction = (props) => {
  const src = useSelector(selectSrc);
  const initialBBoxes = useSelector(selectBBoxes);
  const [bboxes, setBboxes] = useState([]);
  const [selectedResult, setSelectedResult] = useState(null);

  useEffect(() => {
    setBboxes([...initialBBoxes]);
  }, [initialBBoxes]);

  useEffect(() => {
    if (selectedResult !== UNHEALTHY) {
      setBboxes([]);
    }
  }, [selectedResult])

  const resetBBoxes = () => {
    setBboxes([]);
  }

  const submitCorrection = () => {

  }

  return (
    <AuthUser>
      {src ? (
        <Page title="Wynik predykcji">
          <div style={{ textAlign: "center" }}>
            <StyledFormInputList>
              <StyledFormInputListItem>
                <label>
                  <input onClick={() => setSelectedResult(HEALTHY)} value={HEALTHY} checked={selectedResult === HEALTHY} name="result" type="radio" />
                  Płuca zdrowe. Nie potrzeba analizować zdjęcia
                </label>
              </StyledFormInputListItem>
              <StyledFormInputListItem>
                <label>
                  <input onClick={() => setSelectedResult(UNHEALTHY)} value={UNHEALTHY} checked={selectedResult === UNHEALTHY} name="result" type="radio" />
                  Zapalenie płuc. Należy dokładnie przyjrzeć się zdjęciu!
                </label>
              </StyledFormInputListItem>
              <StyledFormInputListItem>
                <label>
                  <input onClick={() => setSelectedResult(UNCLEAR)} value={UNCLEAR} checked={selectedResult === UNCLEAR} name="result" type="radio" />
                  Nie stwierdzono zapalenia płuc, ale płuca też nie są zdrowe. Zalecana jest powierzchowna analiza.
                </label>
              </StyledFormInputListItem>
            </StyledFormInputList>
            <PredictionCorrection
              bboxes={bboxes}
              setBboxes={selectedResult === UNHEALTHY ? setBboxes : () => { setBboxes([]) }}
              src={`${process.env.REACT_APP_API_URL}/${src}`}
              alt={selectedResult}
            />
            <StyledFormButtonHorizontalContainer>

              <StyledFormButtonSecondary onClick={resetBBoxes}>Usuń zaznaczone obszary</StyledFormButtonSecondary>
              <StyledFormButton onClick={submitCorrection}>Zapisz poprawione wyniki</StyledFormButton>

            </StyledFormButtonHorizontalContainer>
          </div>
        </Page>
      ) : (
        <Redirect to="/image-upload" />
      )
      }
    </AuthUser >
  );
};

export default Prediction;
