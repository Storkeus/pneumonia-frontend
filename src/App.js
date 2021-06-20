import React from "react";
import {Helmet} from "react-helmet";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./Components/Login";
import PasswordReset from "./Components/PasswordReset";
import PatientList from "./Components/PatientList";
import UserList from "./Components/UserList";
import UploadImage from "./Components/UploadImage";


class App extends React.Component {
  render() {
    return (
      <Router>
        <Helmet>
        <title>System Wspomagania Pracy Lekarza</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
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
          <Route path="/users">
            <UserList></UserList>
          </Route>
          <Route path="/">
          <UploadImage></UploadImage>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
