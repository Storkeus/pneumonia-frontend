import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Slices/Counter";
import userReducer from "./Slices/User";
import patientListReducer from "./Slices/PatientList";
import {SLICE_NAME as PATIENT_LIST_SLICE_NAME} from "./Slices/PatientList";
import {SLICE_NAME as USER_LIST_SLICE_NAME} from "./Slices/UserList";
import userListReducer from "./Slices/UserList";

export default configureStore({
    reducer: {
      counter: counterReducer,
      user: userReducer,
      [PATIENT_LIST_SLICE_NAME]: patientListReducer,
      [USER_LIST_SLICE_NAME]: userListReducer,
    },
  });
