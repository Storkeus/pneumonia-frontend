import styled from "styled-components";

export const StyledPredictionCorrectionContainer = styled.div`
  display: inline-block;
  position: relative;
  margin: 0 auto;

  &::before
  {
      position:absolute;
      left:0;
      top:0;
      width:100%;
      height:100%;
      z-index:10;
      content:'';
  }
`;

export const StyledPredictionCorrection = styled.img`
  width: 100%;
  max-width: 60rem;
  height: auto;
  display: block;
`;

export const StyledPredictionCorrectionBox = styled.div`
  border: 0.3rem solid red;
  position: absolute;
`;
