import React from "react";
import styled from "styled-components";



class LoginForm extends React.Component {
  render() {
    return (
      <StyledLoginFormContainer>
        <StyledLoginForm>
          <StyledLoginFormTitle >{this.props.title}</StyledLoginFormTitle>

          <div className="login-form__input-container">
            {this.props.children}
          </div>
        </StyledLoginForm>
      </StyledLoginFormContainer>
    );
  }
}
export default LoginForm;

const StyledLoginForm = styled.form`
  display: flex;
  margin: 0 auto;
  flex-direction:column;
  background-color:#536162;
  padding:10px 15px 15px;
  color:#f3f4ed;
  width:calc(100% - 30px);
  margin:0 auto;
  max-width:600px;
  box-shadow: 10px 10px 18px -9px rgba(0,0,0,0.43);
`;

const StyledLoginFormTitle = styled.h2`
  display: flex;
  margin: 0 auto 0 0;
  flex-direction:column;
  text-transform:uppercase;
  letter-spacing:2px;
`;

const StyledLoginFormContainer = styled.div`
  display: flex;
  margin:50vh auto 0;
    transform: translateY(-50%);
  width:100%;
  height:100%;
  flex-direction:column;
  align-items:center;
  justify-content:center;
`;
