import { createSlice } from "@reduxjs/toolkit";
import { PATIENT_FEMALE, PATIENT_MALE } from "../../Common/PatientConst";

export const patientSlice = createSlice({
  name: "patient",
  initialState: {
    patientList: [],
    page: 1,
    search: "",
  },
  reducers: {
    setPatientList: (state, action) => {
      const  patientList  = action.payload;
      state.patientList = patientList;
    },
    setPage: (state, action) => {
      const { page } = action.payload;
      state.page = page;
    },
    setSearch: (state, action) => {
      const { search } = action.payload;
      state.search = search;
    },
  },
});

export const { setPatientList, setPage,setSearch} = patientSlice.actions;

export const loadPatinentListAsync = () => (dispatch) => {

  console.log('Loading Patient List...');

  setTimeout(() => {
    console.log('Setting Patient List...');
    dispatch(
      setPatientList([
        { name: "Jan", surname: "Kowalski", age: 45, sex: PATIENT_MALE },
        { name: "Janinia", surname: "Kowalska", age: 34, sex: PATIENT_FEMALE },
      ])
    );
  }, 1000);
};

export const selectPatientList = state => state.patient.patientList;

export default patientSlice.reducer;
