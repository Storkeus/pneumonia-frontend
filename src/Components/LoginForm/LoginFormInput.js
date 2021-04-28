import React from "react";
import {
  StyledLoginFormInput,
  StyledLoginFormInputGroup,
  StyledLoginFormInputLabel,
} from "./Styled";

class LoginFormInput extends React.Component {
  render() {
    return (
      <StyledLoginFormInputGroup>
        <StyledLoginFormInputLabel for={this.props.name}>
          {this.props.title}:
        </StyledLoginFormInputLabel>
        <StyledLoginFormInput
          name={this.props.name}
          type={this.props.type ? this.props.type : "text"}
        />
      </StyledLoginFormInputGroup>
    );
  }
}
export default LoginFormInput;