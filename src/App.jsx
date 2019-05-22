import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import Blank from "./components/Blank";
import Grid from "./components/Grid";
import Blank2 from "./components/Blank2";
//TODO Web Template Studio: Add routes for your new pages here.
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          < Redirect exact path = "/" to = "/Blank" />
          < Route path = "/Blank" component = { Blank } />
          < Route path = "/Grid" component = { Grid } />
          < Route path = "/Blank2" component = { Blank2 } />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
