import React from "react";
import {Helmet} from "react-helmet";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./Components/Login";
import PasswordReset from "./Components/PasswordReset";


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
          <Route path="/">
            <ul>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/password-reset">Reset hasła</Link>
              </li>
            </ul>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
