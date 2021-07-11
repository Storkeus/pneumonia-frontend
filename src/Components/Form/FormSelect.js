import React, { useState } from "react";
import Select from "../Select/Select";
import {
  StyledFormSelect,
  StyledFormInputGroup,
  StyledFormInputLabel,
  StyledFormInputError,
} from "./Styled";

/**
 * Select component for Form component
 * @param {object} props
 * @param {null|string|number} props.value value of input if given from parent
 * @param {null|function} props.onChange change event handler if given from parent
 * @param {string} props.name input name
 * @param {string} props.title input title
 * @param {string} props.errorInfo validation error info
 * @returns
 */
const FormSelect = (props) => {
  return (
    <StyledFormInputGroup>
      <StyledFormInputLabel htmlFor={props.name}>
        {props.title}:
      </StyledFormInputLabel>
      <StyledFormSelect
        name={props.name}
        id={props.name}
        value={props.value}
        options={props.options}
        onChange={props.onChange ? props.onChange : null}
      />
      <StyledFormInputError>{props.errorInfo}</StyledFormInputError>
    </StyledFormInputGroup>
  );
};
export default FormSelect;
