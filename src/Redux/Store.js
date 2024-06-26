import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slices/User";
import patientListReducer from "./Slices/PatientList";
import patientTestListReducer from "./Slices/PatientTestList";
import { SLICE_NAME as PATIENT_LIST_SLICE_NAME } from "./Slices/PatientList";
import { SLICE_NAME as PATIENT_TESTS_LIST_SLICE_NAME } from "./Slices/PatientTestList";
import { SLICE_NAME as USER_LIST_SLICE_NAME } from "./Slices/UserList";
import userListReducer from "./Slices/UserList";
import imageReducer from "./Slices/Image";

import { loadState, saveState } from "../Common/Storage";

const applicationState = loadState();
const store = configureStore({
  reducer: {
    user: userReducer,
    [PATIENT_LIST_SLICE_NAME]: patientListReducer,
    [PATIENT_TESTS_LIST_SLICE_NAME]: patientTestListReducer,
    [USER_LIST_SLICE_NAME]: userListReducer,
    image: imageReducer,
  },
  preloadedState: applicationState,
});

store.subscribe(() => {
  saveState({ user: store.getState().user });
});

export default store;
