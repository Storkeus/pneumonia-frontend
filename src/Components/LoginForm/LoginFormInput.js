import React, { useState } from "react";
import {
  StyledLoginFormInput,
  StyledLoginFormInputGroup,
  StyledLoginFormInputLabel,
} from "./Styled";



const LoginFormInput = (props) => {

  const [inputValueHook,setInputValueHook]=useState('');

  const inputValue=props.value?props.value:inputValueHook;
  const setInputValue=props.onChange?props.onChange:setInputValueHook;

  return (
    <StyledLoginFormInputGroup>
      <StyledLoginFormInputLabel htmlFor={props.name}>
        {props.title}:
      </StyledLoginFormInputLabel>
      <StyledLoginFormInput
        name={props.name}
        id={props.name}
        value={inputValue}
        type={props.type ? props.type : "text"}
        onChange={(e)=>{setInputValue(e.target.value)}}
      />
      <span>{props.errorInfo}</span>
    </StyledLoginFormInputGroup>
  );
};
export default LoginFormInput;
