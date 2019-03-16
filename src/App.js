import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import Index from "./components/index";
import Home from "./components/home";

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/home" component={Home} />
          <Route component={Index} />
        </Switch>
      </div>
    );
  }
}

export default App;
