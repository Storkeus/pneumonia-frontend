import React, { useState } from "react";
/**
 * Select component
 * @param {object} props
 * @param {null|string|number} props.value value of select if given from parent
 * @param {null|function} props.onChange change event handler if given from parent
 * @param {string} props.name select name
 * @param {string} props.errorInfo validation error info
 * @returns
 */
const Select = (props) => {
  const [inputValueHook, setInputValueHook] = useState("");

  const inputValue = props.value ? props.value : inputValueHook;
  const setSelectValue = props.onChange ? props.onChange : setInputValueHook;
  const options = props.options
    ? props.options
    : [
        { name: "Tak", value: "1" },
        { name: "Nie", value: "0" },
      ];
  console.log(props);

  return (
    <select
      className={props.className}
      name={props.name}
      id={props.name}
      onChange={(e) => {
        setSelectValue(e.target.value);
      }}
    >
      {options.map(({ name, value }, key) => {
        return (
          <option value={value} key={key}>
            {name}
          </option>
        );
      })}
    </select>
  );
};
export default Select;