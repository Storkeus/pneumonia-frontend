import { createSlice } from "@reduxjs/toolkit";
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
  const connection = await fetch("http://numbersapi.com/98", {
    mode: "no-cors", // no-cors, *cors, same-origin
  });
  // eslint-disable-next-line no-unused-vars
  const result = await connection.text();

  if (email === "bartosz.lyzwa@o2.pl" && password === "password") {
    const token = "TEMP_TOKEN";
    const permissions = PERMISSIONS_ADMIN;
    dispatch(
      loginSucess({ email: email, token: token, permissions: permissions })
    );
    return true;
  } else {
    return false;
  }
};

export const selectUser = (state) => state.user;

export default userSlice.reducer;
