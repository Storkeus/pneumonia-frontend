import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Slices/Counter";
import userReducer from "./Slices/User";
import patientReducer from "./Slices/Patient";

export default configureStore({
    reducer: {
      counter: counterReducer,
      user: userReducer,
      patient: patientReducer,
    },
  });
