import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import APIConnection from "../../Common/APIConnection";
import { PERMISSIONS_ADMIN, PERMISSIONS_USER } from "../../Common/Permissions";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    email: "",
    first_name: "",
    last_name: "",
    token: "",
    permissions: "",
  },
  reducers: {
    loginSucess: (state, action) => {
      const { email, token, permissions, first_name, last_name } = action.payload;
      state.email = email;
      state.token = token;
      state.first_name = first_name;
      state.last_name = last_name;
      state.permissions = permissions;
    },
    update: (state, action) => {
      const { email, first_name, last_name, is_admin } = action.payload;
      state.email = email;
      state.first_name = first_name;
      state.last_name = last_name;
      state.permissions = is_admin ? PERMISSIONS_ADMIN : PERMISSIONS_USER;
    },
    logout: (state) => {
      state.email = "";
      state.token = "";
      state.permissions = "";
    },
  },
});

export const { loginSucess, logout, update } = userSlice.actions;

export const loginAsync = (email, password) => async (dispatch) => {
  try {

    const connection = await new APIConnection(`${process.env.REACT_APP_API_URL}/api/token`).authorizeBasic(email, password).connectPOST();

    if (!connection) {
      throw new Error('Connection error');
    }
    const user = connection;

    if (!user.token) {
      throw new Error('Invalid token');
    }


    dispatch(
      loginSucess(user)
    );

    return true;
  } catch {
    return false;
  }
};

export const passwordReset = (email, password) => async (dispatch) => {
  try {

    const connection = await new APIConnection(`${process.env.REACT_APP_API_URL}/api/password-reset`)
      .setBody({ email: email, password: password }).connectPOST();

    if (!connection) {
      throw new Error('Connection error');
    }

    toast.success('Wysłano link potwierdzajacy zmianę hasła na adres e-mail.');
    return true;
  } catch {
    toast.success('Wystąpił błąd podczas resetu hasła.');

    return false;
  }
};


export const passwordSet = (email, password, token) => async (dispatch) => {
  try {

    const connection = await new APIConnection(`${process.env.REACT_APP_API_URL}/api/password-set`)
      .setBody({ email: email, password: password, token: token }).connectPUT();

    if (!connection) {
      throw new Error('Connection error');
    }
    toast.success('Zapisano hasło.');

    return true;
  } catch {
    toast.success('Wystąpił błąd podczas ustawiania hasła.');
    return false;
  }
};

export const updateAsync = (userData) => async (dispatch, getState) => {
  try {

    const { token } = getState()['user'];
    const connection = await new APIConnection(`${process.env.REACT_APP_API_URL}/api/profile`)
      .setBody(userData).authorizeJWT(token).connectPUT();

    if (!connection) {
      throw new Error('Connection error');
    }
    const user = connection;

    if (!user) {
      throw new Error('Invalid token');
    }


    dispatch(
      update(user)
    );

    return true;
  } catch {
    return false;
  }
};


export const selectUser = (state) => state.user;

export default userSlice.reducer;
