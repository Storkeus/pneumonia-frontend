import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PATIENT_MALE } from "../Common/PatientConst";
import {
  loadPatinentListAsync,
  selectPatientList,
} from "../Redux/Slices/Patient";
import AuthAdmin from "./Auth/AuthAdmin";
import Page from "./Page/Page";

const PatientList = (props) => {
  const dispatch = useDispatch();
  const patientList = useSelector(selectPatientList);
  const [patientListItems,setPatientListItems]=useState([]);

  //Loading list of patients
  useEffect(() => {
    dispatch(loadPatinentListAsync()); 
  },[]);


  //Updating items displaying list of patients - to be replaced with table elements or even unnecesary, depends of used table component.
  useEffect(()=>{
    setPatientListItems(patientList.map((patient, index)=><li key={index}>{patient.name} {patient.surname} ({patient.age} lat) - {patient.sex==PATIENT_MALE?'M':'K'}</li>));
  },[patientList]);
  
  // console.log("Outside useEffect",patientList);
  // console.log('Loading Patient List...');


  return (
    <AuthAdmin>
      <Page>
        <div>Lista pacjentów</div>
        <ul>
          {patientListItems}
        </ul>
      </Page>
    </AuthAdmin>
  );
};

export default PatientList;
