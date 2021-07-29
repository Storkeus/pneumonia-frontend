import { createSlice } from "@reduxjs/toolkit";
import APIConnection from "../../Common/APIConnection";
import { PERMISSIONS_ADMIN } from "../../Common/Permissions";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    email: "",
    name: "",
    token: "",
    permissions: "",
  },
  reducers: {
    loginSucess: (state, action) => {
      const { email, token, permissions } = action.payload;
      state.email = email;
      state.token = token;
      state.permissions = permissions;
    },
    logout: (state) => {
      state.email = "";
      state.token = "";
      state.permissions = "";
    },
  },
});

export const { loginSucess, logout } = userSlice.actions;

export const loginAsync = (email, password) => async (dispatch) => {
  try {

    const connection = await new APIConnection(`${process.env.REACT_APP_API_URL}/api/token`).authorizeBasic(email, password).connectPOST();
    const { token } = connection;

    const permissions = PERMISSIONS_ADMIN;
    dispatch(
      loginSucess({ email: email, token: token, permissions: permissions })
    );

    return true;
  } catch {
    return false;
  }
};

export const selectUser = (state) => state.user;

export default userSlice.reducer;
