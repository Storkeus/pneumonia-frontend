import React from "react";
import Auth from "./Auth";
import { PERMISSIONS_ADMIN } from "../../Common/Permissions";

/**
 * Redirects to /login if currently logged user doesn't have an admin permissions.
 * @param {object} props
 * @returns {object} <Auth>
 */
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
