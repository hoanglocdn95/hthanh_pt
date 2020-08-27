import React from "react";

import Home from "screen/Home";
import Login from "screen/Login";
import Register from "screen/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
      </Switch>
    </Router>
  );
}

export default App;
