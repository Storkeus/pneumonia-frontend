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
      console.log('test');
      state.email = "";
      state.token = "";
      state.permissions = "";
    },
  },
});

export const { loginSucess,logout } = userSlice.actions;

export const loginAsync = (email, password) => (dispatch) => {
  setTimeout(() => {
    if (email == "bartosz.lyzwa@o2.pl" && password == "password") {
      const token = "TEMP_TOKEN";
      const permissions = PERMISSIONS_ADMIN;
      dispatch(loginSucess({ email: email, token: token, permissions: permissions }));
      return true;
    } else {
      return false;
    }
  }, 1000);
};

export const selectUser = (state) => state.user;

export default userSlice.reducer;
