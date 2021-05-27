import React from "react";
import Auth from "./Auth";
import { PERMISSIONS_USER } from "../../Common/Permissions";


const AuthUser = (props) => {
  return (
    <Auth
      condition={(user)=>!user || user.permissions !== PERMISSIONS_USER}
      redirectOnFail="/login"
    >
      {props.children}
    </Auth>
  );
};

export default AuthUser;
