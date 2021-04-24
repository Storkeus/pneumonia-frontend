import React from "react";
import styled from "styled-components";


class LoginFormLinks extends React.Component {
  render() {
    return (
      <StyledLoginFormLinks>
        {this.props.children}
      </StyledLoginFormLinks>
    );
  }
}
export default LoginFormLinks;

const StyledLoginFormLinks = styled.div`
display:flex;
align-items:center;
justify-content:flex-start;

& a
{
  color:#f3f4ed;
  text-decoration:none;
}
`;


