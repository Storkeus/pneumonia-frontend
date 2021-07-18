import React from "react";
import {
  StyledFormContainer,
  StyledForm,
  StyledFormTitle,
  StyledFormContent,
  StyledFormButton,
} from "./Styled";

/**
 * Renders form
 * @param {object} props
 * @param {function} onSubmit form submit handler
 * @param {string} title form title
 * @param {object} props.children components with form controls
 * @param {string} props.submitName text displayed on submit button
 * @returns \<StyledFormContainer\>
 */
const Form = (props) => {
  const { submitName = "Zapisz", onSubmit, title, children } = props;
  return (
    <StyledFormContainer>
      <StyledForm onSubmit={onSubmit}>
        <StyledFormTitle>{title}</StyledFormTitle>
        <StyledFormContent>{children}</StyledFormContent>
        <StyledFormButton>{submitName}</StyledFormButton>
      </StyledForm>
    </StyledFormContainer>
  );
};

export default Form;
