import React from "react";
import {
  StyledFormInput,
  StyledFormInputGroup,
  StyledFormInputLabel,
  StyledFormInputError,
} from "./Styled";

/**
 * Input component for Form component
 * @param {object} props
 * @param {null|string|number} props.value value of input if given from parent
 * @param {null|function} props.onChange change event handler if given from parent
 * @param {string} props.name input name
 * @param {string} props.title input title
 * @param {string} props.type input type
 * @param {string} props.errorInfo validation error info
 * @returns
 */
const FormInput = (props) => {
  return (
    <StyledFormInputGroup>
      <StyledFormInputLabel htmlFor={props.name}>
        {props.title}:
      </StyledFormInputLabel>
      <StyledFormInput
        name={props.name}
        id={props.name}
        value={props.value}
        accept={props.accept}
        type={props.type ? props.type : "text"}
        onChange={props.onChange ? props.onChange : null}
      />
      <StyledFormInputError>{props.errorInfo}</StyledFormInputError>
    </StyledFormInputGroup>
  );
};
export default FormInput;
