import React from "react";
import { selectUser } from "../../Redux/Slices/User";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const Auth = (props) => {
  const user = useSelector(selectUser);
  if (props.condition(user)) {
    return <Redirect to={props.redirectOnFail} />;
  }

  return <>{props.children}</>;
};

export default Auth;
