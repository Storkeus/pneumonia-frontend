import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slices/User";
import patientListReducer from "./Slices/PatientList";
import { SLICE_NAME as PATIENT_LIST_SLICE_NAME } from "./Slices/PatientList";
import { SLICE_NAME as USER_LIST_SLICE_NAME } from "./Slices/UserList";
import userListReducer from "./Slices/UserList";

import { loadState, saveState } from "../Common/Storage";

const applicationState = loadState();
console.log(applicationState);
const store = configureStore({
  reducer: {
    user: userReducer,
    [PATIENT_LIST_SLICE_NAME]: patientListReducer,
    [USER_LIST_SLICE_NAME]: userListReducer,
  },
  preloadedState: applicationState,
});

store.subscribe(() => {
  saveState({ user: store.getState().user });
});

export default store;
