import React from "react";
import { StyledLoginFormButton } from "./Styled";

const LoginFormButton = (props) => {
  return <StyledLoginFormButton>{props.name}</StyledLoginFormButton>;
};

export default LoginFormButton;
