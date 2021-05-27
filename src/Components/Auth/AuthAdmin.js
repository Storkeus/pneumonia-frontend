import React from "react";
import Auth from "./Auth";
import { PERMISSIONS_ADMIN } from "../../Common/Permissions";

const AuthAdmin = (props) => {
  return (
    <Auth
      condition={(user) => !user || user.permissions !== PERMISSIONS_ADMIN}
      redirectOnFail="/login"
    >
      {props.children}
    </Auth>
  );
};

export default AuthAdmin;
