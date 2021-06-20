import React from "react";
import { selectUser } from "../../Redux/Slices/User";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const Auth = (props) => {
  const user = useSelector(selectUser);

  const {condition=false}=props;


  const isConditionFunction=typeof(condition)==="function";
    if ((isConditionFunction&&condition(user)||!isConditionFunction&&condition)) {
      return <Redirect to={props.redirectOnFail} />;
    }
  
    return <>{props.children}</>;


};

export default Auth;
