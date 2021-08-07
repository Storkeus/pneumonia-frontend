import React, { useRef, useState } from "react";
import {
  StyledPredictionCorrection,
  StyledPredictionCorrectionBox,
  StyledPredictionCorrectionContainer,
} from "./Styled";
import { getMousePositionRelativeTo } from "../../Common/GetMousePosition";

/**
 * Prediction correction component
 * @param {object} props
 * @returns
 */
const PredictionCorrection = ({ src, bboxes, alt, setBboxes }) => {

  const [ratio, setRatio] = useState(1);
  const [currentAreaStartPosition, setCurrentAreaStartPosition] = useState({ x: false, y: false });
  const imageRef = useRef();



  const handleAreaMouseDown = (event) => {
    const mousePosition = getMousePositionRelativeTo(event, imageRef);


    if (mousePosition.x >= 0 && mousePosition.y >= 0) {
      setCurrentAreaStartPosition(mousePosition);
    }

  };


  const handleAreaMouseUp = (event) => {


    const mousePosition = getMousePositionRelativeTo(event, imageRef);
    if (!event.target.classList.contains('area-selector') || !(mousePosition.x >= 0 && mousePosition.y >= 0) || !currentAreaStartPosition.x || !currentAreaStartPosition.y) {

      setCurrentAreaStartPosition({ x: false, y: false })
      return;
    }

    const realStartPositionX = Math.min(currentAreaStartPosition.x, mousePosition.x);
    const realStopPositionX = Math.max(currentAreaStartPosition.x, mousePosition.x);
    const realStartPositionY = Math.min(currentAreaStartPosition.y, mousePosition.y);
    const realStopPositionY = Math.max(currentAreaStartPosition.y, mousePosition.y);



    const width = realStopPositionX - realStartPositionX;
    const height = realStopPositionY - realStartPositionY;
    const x = realStartPositionX;
    const y = realStartPositionY;


    const newBboxes = bboxes;
    newBboxes.push({ x: x / ratio, y: y / ratio, width: width / ratio, height: height / ratio })
    setBboxes(newBboxes);

    setCurrentAreaStartPosition({ x: false, y: false })
  };



  return (
    <StyledPredictionCorrectionContainer className="area-selector" onMouseDown={handleAreaMouseDown} onMouseUp={handleAreaMouseUp} >
      <StyledPredictionCorrection
        onLoad={() => {
          setRatio(imageRef.current.offsetWidth / imageRef.current.naturalWidth);
        }}
        ref={imageRef}
        src={src}
        alt={alt}
      />
      {bboxes.map(({ x, y, width, height }, key) => {
        return (
          <StyledPredictionCorrectionBox
            key={key}
            style={{ left: x * ratio, top: y * ratio, width: width * ratio, height: height * ratio }}
            isRemovable={true}
            handleRemove={null}
          />
        );
      })}
    </StyledPredictionCorrectionContainer>
  );
};

export default PredictionCorrection;
