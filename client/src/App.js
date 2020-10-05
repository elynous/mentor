import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { SignUp } from "./components/SignUp/SignUp";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Hero} />
        <Route exact path="/signup" component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;
