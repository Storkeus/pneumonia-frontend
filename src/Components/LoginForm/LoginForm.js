import React from "react";
import {
  StyledLoginFormContainer,
  StyledLoginForm,
  StyledLoginFormTitle,
} from "./Styled";

const LoginForm = (props) => {
  return (
    <StyledLoginFormContainer>
      <StyledLoginForm>
        <StyledLoginFormTitle>{props.title}</StyledLoginFormTitle>

        <div className="login-form__input-container">{props.children}</div>
      </StyledLoginForm>
    </StyledLoginFormContainer>
  );
};

export default LoginForm;
