import React from "react";
import { StyledLoginFormLinks } from "./Styled";

/**
 * Link component for LoginForm
 * @param {object} props
 * @param {object} props.children
 * @returns {object} \<StyledLoginFormLinks\>
 */
const LoginFormLinks = (props) => {
  return <StyledLoginFormLinks>{props.children}</StyledLoginFormLinks>;
};

export default LoginFormLinks;
