import { createSlice } from "@reduxjs/toolkit";
import APIConnection from "../../Common/APIConnection";

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

    if (!connection) {
      throw new Error('Connection error');
    }
    const { token, permissions } = connection;

    if (!token) {
      throw new Error('Invalid token');
    }


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
