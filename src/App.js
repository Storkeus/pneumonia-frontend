import React from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./Components/Login";
import PasswordReset from "./Components/PasswordReset";
import PatientList from "./Components/PatientList";
import UserList from "./Components/UserList";
import UploadImage from "./Components/UploadImage";
import UserForm from "./Components/UserForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
            <Login>test</Login>
          </Route>
          <Route path="/password-reset">
            <PasswordReset></PasswordReset>
          </Route>
          <Route path="/upload-image">
            <UploadImage></UploadImage>
          </Route>
          <Route path="/patients">
            <PatientList></PatientList>
          </Route>
          <Route path="/users/edit/:id">
            <UserForm></UserForm>
          </Route>
          <Route path="/users/add">
            <UserForm></UserForm>
          </Route>
          <Route path="/users">
            <UserList></UserList>
          </Route>
          <Route path="/">
            <UploadImage></UploadImage>
          </Route>
        </Switch>
        <ToastContainer pauseOnHover={false} position="bottom-right" />
      </Router>
    );
  }
}

export default App;
