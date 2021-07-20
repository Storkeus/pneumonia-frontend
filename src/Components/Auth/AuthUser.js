import React from "react";
import Auth from "./Auth";
import { PERMISSIONS_ADMIN, PERMISSIONS_USER } from "../../Common/Permissions";

/**
 * Redirects to /login if currently logged user doesn't have an user permissions.
 * @param {object} props
 * @param {object} props.children //react component that requires auth
 * @returns {object} \<Auth\>
 */
const AuthUser = (props) => {
  return (
    <Auth
      condition={(user) =>
        !user ||
        ![PERMISSIONS_USER, PERMISSIONS_ADMIN].includes(user.permissions)
      }
      redirectOnFail="/login"
    >
      {props.children}
    </Auth>
  );
};

export default AuthUser;
