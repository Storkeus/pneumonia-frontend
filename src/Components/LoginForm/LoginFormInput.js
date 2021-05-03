import React, { useState } from "react";
import {
  StyledLoginFormInput,
  StyledLoginFormInputGroup,
  StyledLoginFormInputLabel,
} from "./Styled";



const LoginFormInput = (props) => {

  const [inputValue,setInputValue]=useState('');

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
    </StyledLoginFormInputGroup>
  );
};
export default LoginFormInput;
