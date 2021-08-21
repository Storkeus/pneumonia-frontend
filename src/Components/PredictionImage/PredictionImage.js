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
const PredictionImage = ({ style, src, alt = "", bboxes = [] }) => {
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
        style={style}
      />
      {bboxes.map(({ x, y, width, height, correction = 0 }, key) => {
        x *= ratio;
        y *= ratio;
        width *= ratio;
        height *= ratio;
        return (
          <StyledPredictionImageBox
            key={key}
            style={{ left: x, top: y, width: width, height: height, borderColor: correction ? '#10f4ff' : 'red' }}
          />
        );
      })}
    </StyledPredictionImageContainer>
  );
};
export default PredictionImage;
