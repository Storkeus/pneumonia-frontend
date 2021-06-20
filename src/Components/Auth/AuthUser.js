import React from "react";
import Auth from "./Auth";
import { PERMISSIONS_USER } from "../../Common/Permissions";

/**
 * Redirects to /login if currently logged user doesn't have an user permissions.
 * @param {object} props
 * @returns {object} <Auth>
 */
const AuthUser = (props) => {
  return (
    <Auth
      condition={(user) => !user || user.permissions !== PERMISSIONS_USER}
      redirectOnFail="/login"
    >
      {props.children}
    </Auth>
  );
};

export default AuthUser;
