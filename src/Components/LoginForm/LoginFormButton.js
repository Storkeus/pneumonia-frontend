import React from "react";
import styled from "styled-components";


class LoginFormButton extends React.Component {
  render() {
    return (
      <StyledLoginFormButton>
        {this.props.name}
      </StyledLoginFormButton>
    );
  }
}
export default LoginFormButton;

const StyledLoginFormButton= styled.button`
display:flex;
jusitfy-content:center;
align-items:center;
text-align:center;
background-color:#c06014;
color:#f3f4ed;
border-color:#fff;
font-size:22px;
border:none;
padding:5px 13px;
margin: 35px 0 15px auto;
`;
