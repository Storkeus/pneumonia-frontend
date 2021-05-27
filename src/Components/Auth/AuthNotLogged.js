import React from "react";
import Auth from "./Auth";
import { PERMISSIONS_ADMIN, PERMISSIONS_USER } from "../../Common/Permissions";

const AuthNotLogged = (props) => {
  return (
    <Auth
      condition={(user)=>
        user &&
        (user.permissions == PERMISSIONS_USER ||
          user.permissions == PERMISSIONS_ADMIN)
      }
      redirectOnFail="/"
    >
      {props.children}
    </Auth>
  );
};

export default AuthNotLogged;
