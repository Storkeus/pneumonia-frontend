import React from "react";
import { selectUser } from "../../Redux/Slices/User";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

/**
 * General auth component used for creating more specific ones.
 * Redirect to address specfied in props.redirecOnFail if props.condition is not met,
 * renders props.children otherwise.
 * @param {object} props
 * @returns {object} props.children or <Redirect> component
 */
const Auth = (props) => {
  const user = useSelector(selectUser);

  const { condition = false } = props;

  const isConditionFunction = typeof condition === "function";
  if (
    (isConditionFunction && condition(user)) ||
    (!isConditionFunction && condition)
  ) {
    return <Redirect to={props.redirectOnFail} />;
  }

  return <>{props.children}</>;
};

export default Auth;
