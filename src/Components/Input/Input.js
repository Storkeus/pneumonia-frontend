import React, { useState } from "react";
/**
 * Input component
 * @param {object} props
 * @param {null|string|number} props.value value of input if given from parent
 * @param {null|function} props.onChange change event handler if given from parent
 * @param {string} props.name input name
 * @param {string} props.type input type
 * @param {string} props.errorInfo validation error info
 * @returns
 */
const FormInput = (props) => {
  const [inputValueHook, setInputValueHook] = useState("");

  const inputValue = props.value ? props.value : inputValueHook;
  const setInputValue = props.onChange ? props.onChange : setInputValueHook;

  return (
    <input
      className={props.className}
      name={props.name}
      id={props.name}
      value={inputValue}
      type={props.type ? props.type : "text"}
      onChange={(e) => {
        setInputValue(e.target.value);
      }}
    />
  );
};
export default FormInput;
