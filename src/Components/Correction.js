import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AuthUser from "./Auth/AuthUser";
import Page from "./Page/Page";
import {
  selectSrc,
  selectBBoxes,
  selectId,
} from "../Redux/Slices/Image";
import { Redirect } from "react-router-dom";
import PredictionCorrection from "./PredictionCorrection/PredictionCorrection";
import { StyledFormButton, StyledFormButtonHorizontalContainer, StyledFormButtonSecondary, StyledFormInputList, StyledFormInputListItem } from "./Form/Styled";
import { HEALTHY, UNCLEAR, UNHEALTHY, PREDICTION_DESCRIPTION } from "../Common/PredictionConst";
import APIConnection from "../Common/APIConnection";
import { toast } from "react-toastify";
import { selectUser } from "../Redux/Slices/User";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

/**
 * Prediction result page
 * @param {object} props
 * @returns {object} <AuthUser\>
 */
const Prediction = (props) => {
  const src = useSelector(selectSrc);
  const initialBBoxes = useSelector(selectBBoxes);
  const testId = useSelector(selectId);
  const [bboxes, setBboxes] = useState([]);
  const [selectedResult, setSelectedResult] = useState(null);
  const { token } = useSelector(selectUser);
  const history = useHistory();

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

  const submitCorrection = async () => {


    try {
      /**
       *    
          user_id = request.json.get('user_id')
          status_correction = request.json.get('status_correction')
          description_correction = request.json.get('description_correction')
       * 
       */
      await new APIConnection(`${process.env.REACT_APP_API_URL}/api/tests/${testId}`).setBody({
        bboxes: bboxes,
        status_correction: selectedResult,
        description_correction: PREDICTION_DESCRIPTION[selectedResult]

      }).authorizeJWT(token).connectPUT();
      toast.success("Zapisano poprawione badanie.");
      history.push("/patients");
    } catch (error) {
      toast.error("Wystąpił błąd. Nie udało się zapisać poprawionego badania.");
    }

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
                  {PREDICTION_DESCRIPTION[HEALTHY]}
                </label>
              </StyledFormInputListItem>
              <StyledFormInputListItem>
                <label>
                  <input onClick={() => setSelectedResult(UNHEALTHY)} value={UNHEALTHY} checked={selectedResult === UNHEALTHY} name="result" type="radio" />
                  {PREDICTION_DESCRIPTION[UNHEALTHY]}
                </label>
              </StyledFormInputListItem>
              <StyledFormInputListItem>
                <label>
                  <input onClick={() => setSelectedResult(UNCLEAR)} value={UNCLEAR} checked={selectedResult === UNCLEAR} name="result" type="radio" />
                  {PREDICTION_DESCRIPTION[UNCLEAR]}
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
        <Redirect to="/" />
      )
      }
    </AuthUser >
  );
};

export default Prediction;
