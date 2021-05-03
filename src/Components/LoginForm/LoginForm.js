import React, { useState } from "react";
import {
  StyledLoginFormContainer,
  StyledLoginForm,
  StyledLoginFormTitle,
} from "./Styled";




const LoginForm = (props) => {
  const [errorInfo, setErrorInfo]=useState(null); 

  const handleFormSubmit=(e)=>{
    e.preventDefault();
    
    
    setErrorInfo(<div>Adres e-mail jest nieprawidłowy</div>);
  }
  return (
    <StyledLoginFormContainer>
      <StyledLoginForm onSubmit={handleFormSubmit}>
        <StyledLoginFormTitle>{props.title}</StyledLoginFormTitle>
        {errorInfo}
        <div className="login-form__input-container">{props.children}</div>
      </StyledLoginForm>
    </StyledLoginFormContainer>
  );
};

export default LoginForm;
