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
    }
  },
});

export const { loginSucess,logout } = userSlice.actions;

export const loginAsync = (email, password) => async (dispatch) => {

  const connection=await fetch('http://numbersapi.com/98',{
    mode: 'no-cors', // no-cors, *cors, same-origin
  });
  const result=await connection.text();

    if (email == "bartosz.lyzwa@o2.pl" && password == "password") {
      const token = "TEMP_TOKEN";
      const permissions = PERMISSIONS_ADMIN;
     
      return dispatch(loginSucess({ email: email, token: token, permissions: permissions }));;
    } else {
      return  dispatch(logout);;
    }

};

export const selectUser = (state) => state.user;

export default userSlice.reducer;
