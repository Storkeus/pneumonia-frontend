import React from "react";
import { StyledLoginFormButton } from "./Styled";

/**
 * Login form button component
 * @param {object} props
 * @param {sting} props.name button name
 * @returns \<StyledLoginFormButton\>
 */
const LoginFormButton = (props) => {
  return <StyledLoginFormButton>{props.name}</StyledLoginFormButton>;
};

export default LoginFormButton;
