import React from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import Login from "./Components/Login";
import PasswordReset from "./Components/PasswordReset";
import PatientList from "./Components/PatientList";
import UserList from "./Components/UserList";
import Prediction from "./Components/Prediction";
import Correction from "./Components/Correction";
import UploadImage from "./Components/UploadImage";
import UploadModel from "./Components/UploadModel";
import UserForm from "./Components/UserForm";
import PatientForm from "./Components/PatientForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TestList from "./Components/TestList";
import Profile from "./Components/Profile";
import PasswordResetSuccess from "./Components/PasswordResetSuccess";
import PasswordResetFailure from "./Components/PasswordResetFailure";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Helmet>
          <title>System Wspomagania Pracy Lekarza</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
        </Helmet>
        <Switch>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/profile">
            <Profile></Profile>
          </Route>
          <Route path="/password-reset">
            <PasswordReset></PasswordReset>
          </Route>
          <Route path="/patients/:id/upload-image">
            <UploadImage></UploadImage>
          </Route>
          <Route path="/patients/:id/tests">
            <TestList></TestList>
          </Route>
          <Route path="/patients/:id/edit">
            <PatientForm></PatientForm>
          </Route>
          <Route path="/patients/add">
            <PatientForm></PatientForm>
          </Route>
          <Route path="/patients">
            <PatientList></PatientList>
          </Route>
          <Route path="/users/:id/edit">
            <UserForm></UserForm>
          </Route>
          <Route path="/users/add">
            <UserForm></UserForm>
          </Route>
          <Route path="/users">
            <UserList></UserList>
          </Route>
          <Route path="/prediction">
            <Prediction></Prediction>
          </Route>
          <Route path="/correction">
            <Correction></Correction>
          </Route>
          <Route path="/update-model">
            <UploadModel></UploadModel>
          </Route>
          <Route path="/password-reset-success">
            <PasswordResetSuccess></PasswordResetSuccess>
          </Route>
          <Route path="/password-reset-failure">
            <PasswordResetFailure></PasswordResetFailure>
          </Route>
          <Route path="/">
            <Redirect to="/patients"></Redirect>
          </Route>
        </Switch>
        <ToastContainer pauseOnHover={false} position="bottom-right" />
      </Router>
    );
  }
}

export default App;
