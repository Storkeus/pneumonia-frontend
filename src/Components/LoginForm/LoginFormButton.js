import React from "react";
import { StyledLoginFormButton } from "./Styled";

class LoginFormButton extends React.Component {
  render() {
    return <StyledLoginFormButton>{this.props.name}</StyledLoginFormButton>;
  }
}
export default LoginFormButton;
