import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Translate from "./Translate";
import Detect from "./Detect";
import About from "./About";

export class DashBoard extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/" component={Translate}></Route>
            <Route exact path="/detect" component={Detect}></Route>
            <Route exact path="/about" component={About}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default DashBoard;
