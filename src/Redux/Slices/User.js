import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    email: '',
    name: '',
    token: '',
    permissions: ''
  },
  reducers: {
    login: (state,action) => {
      const {email,token,permissions}=action;
      console.log('LOGOWANIE');
      state.email=email;
    },
  },
});

export const { login } = userSlice.actions;

export const loginAsync = (email,password) => dispatch => {
  console.log('LoginAsync fired');
  setTimeout(() => {
    const token='TEMP_TOKEN';
    const permissions='ADMIN';
    dispatch(login(email,token,permissions));
  }, 1000);
};


export const selectUser = state => state.user;

export default userSlice.reducer;