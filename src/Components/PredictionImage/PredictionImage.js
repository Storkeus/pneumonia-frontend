import React, { useRef, useState } from "react";
import {
  StyledPredictionImage,
  StyledPredictionImageBox,
  StyledPredictionImageContainer,
} from "./Styled";

/**
 * Prediction image component
 * @param {object} props
 * @returns
 */
const PredictionImage = ({ src, alt = "", bboxes = [] }) => {
  const [ratio, setRatio] = useState(1);
  const imageRef = useRef();


  return (
    <StyledPredictionImageContainer>
      <StyledPredictionImage
        onLoad={() => {
          setRatio(imageRef.current.offsetWidth / imageRef.current.naturalWidth);
        }}
        ref={imageRef}
        src={src}
        alt={alt}
      />
      {bboxes.map(({ x, y, width, height }, key) => {
        x *= ratio;
        y *= ratio;
        width *= ratio;
        height *= ratio;
        return (
          <StyledPredictionImageBox
            key={key}
            style={{ left: x, top: y, width: width, height: height }}
          />
        );
      })}
    </StyledPredictionImageContainer>
  );
};
export default PredictionImage;
