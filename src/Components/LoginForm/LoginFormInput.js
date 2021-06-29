import React, { useState } from "react";
import {
  StyledLoginFormInput,
  StyledLoginFormInputGroup,
  StyledLoginFormInputLabel,
} from "./Styled";

/**
 * Input component for login form
 * @param {object} props
 * @param {null|string|number} props.value value of input if given from parent
 * @param {null|function} props.onChange change event handler if given from parent
 * @param {string} props.name input name
 * @param {string} props.title input title
 * @param {string} props.type input type
 * @param {string} props.errorInfo validation error info
 * @returns
 */
const LoginFormInput = (props) => {
  return (
    <StyledLoginFormInputGroup>
      <StyledLoginFormInputLabel htmlFor={props.name}>
        {props.title}:
      </StyledLoginFormInputLabel>
      <StyledLoginFormInput
        name={props.name}
        id={props.name}
        value={props.value}
        type={props.type ? props.type : "text"}
        onChange={props.onChange ? props.onChange : null}
      />
      <span>{props.errorInfo}</span>
    </StyledLoginFormInputGroup>
  );
};
export default LoginFormInput;
