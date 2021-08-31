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
const Input = (props) => {
  const [inputValueHook, setInputValueHook] = useState("");

  const inputValue = props.value ? props.value : inputValueHook;
  const setInputValue = props.onChange ? props.onChange : setInputValueHook;

  const { innerRef = null, accept = null } = props;

  return (
    <input
      className={props.className}
      name={props.name}
      id={props.name}
      readOnly={props.readOnly}
      ref={innerRef}
      accept={accept}
      value={inputValue}
      type={props.type ? props.type : "text"}
      onChange={(e) => {
        if (props.type && props.type === "file") {
          setInputValue(e);
        } else {
          setInputValue(e.target.value);
        }
      }}
    />
  );
};
export default Input;
