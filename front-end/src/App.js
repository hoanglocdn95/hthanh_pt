import React from "react";

import Home from "screen/Home/index";
import PersonalTrainer from "screen/PersonalTrainer/index";
import Login from "screen/Authen/Login";
import Register from "screen/Authen/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { RouterConstant } from "constants";

function App() {
  return (
    <Router>
      <Switch>
        <Route path={RouterConstant.Home} exact component={Home} />
        <Route path={RouterConstant.Login} exact component={Login} />
        <Route path={RouterConstant.Register} exact component={Register} />
        <Route
          path={RouterConstant.PersonalTrainer}
          exact
          component={PersonalTrainer}
        />
      </Switch>
    </Router>
  );
}

export default App;
