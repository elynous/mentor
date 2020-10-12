import React from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Login } from "./components/Login/Login";
import "bootstrap/dist/css/bootstrap.css"
import Button from "react-bootstrap/Button"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/Login'>
            <Header />
            <Login />
          </Route>

          <Route path='/'>
            <Header />
            <Hero />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
