import { configureStore } from '@reduxjs/toolkit'
import loginFormReducer from './Components/LoginForm/Reducer';

export default configureStore({
  reducer: {
    loginForm: loginFormReducer
  }
})