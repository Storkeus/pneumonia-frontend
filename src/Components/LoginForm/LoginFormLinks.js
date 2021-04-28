import React from "react";
import { StyledLoginFormLinks } from "./Styled";

class LoginFormLinks extends React.Component {
  render() {
    return <StyledLoginFormLinks>{this.props.children}</StyledLoginFormLinks>;
  }
}
export default LoginFormLinks;
