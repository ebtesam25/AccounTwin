import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

// import components
import App from "./App";
import Home from "./home";
import Login from "./login";
import Match from "./match";
import Cards from "./cards";


ReactDOM.render(
  <Router>
    <div className="App">
      <Route exact path="/" component={App} />
      <Route exact path="/home" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/match" component={Match} />
      <Route path="/cards" component={Cards} />
    </div>
  </Router>,
  document.getElementById("root")
);