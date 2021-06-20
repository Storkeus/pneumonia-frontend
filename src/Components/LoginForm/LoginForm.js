import React from "react";
import {
  StyledLoginFormContainer,
  StyledLoginForm,
  StyledLoginFormTitle,
} from "./Styled";

/**
 * Renders login form
 * @param {object} props
 * @param {function} onSubmit form submit handler
 * @param {string} title form title
 * @param {object} props.children components with form controls
 * @returns \<StyledLoginFormContainer\>
 */
const LoginForm = (props) => {
  return (
    <StyledLoginFormContainer>
      <StyledLoginForm onSubmit={props.onSubmit}>
        <StyledLoginFormTitle>{props.title}</StyledLoginFormTitle>
        <div className="login-form__input-container">{props.children}</div>
      </StyledLoginForm>
    </StyledLoginFormContainer>
  );
};

export default LoginForm;
