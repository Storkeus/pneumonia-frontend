import React from "react";
import {
  StyledFormContainer,
  StyledForm,
  StyledFormTitle,
  StyledFormContent,
} from "./Styled";

/**
 * Renders form
 * @param {object} props
 * @param {function} onSubmit form submit handler
 * @param {string} title form title
 * @param {object} props.children components with form controls
 * @returns \<StyledFormContainer\>
 */
const Form = (props) => {
  return (
    <StyledFormContainer>
      <StyledForm onSubmit={props.onSubmit}>
        <StyledFormTitle>{props.title}</StyledFormTitle>
        <StyledFormContent>{props.children}</StyledFormContent>
      </StyledForm>
    </StyledFormContainer>
  );
};

export default Form;
