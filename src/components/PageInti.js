import React from "react";

import "../assets/scss/style.scss";
import logo from "../simbol.svg";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home, About, Jokes, JoinUs } from "../views";

class NavTitle extends React.Component {
  render() {
    return (
      <div className="collapse navbar-collapse" id="navbarNav">
        <Link className="navbar-brand" to="/">
          <img src={logo} style={{ height: 60 }} alt="logo" />
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="navbar-brand" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/jokes">
              Jokes
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/joinus">
              Join Us
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

class PageInti extends React.Component {
  render() {
    return (
      <Router>
        {/* Bagian Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <NavTitle />
        </nav>
        <div className="containter">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/jokes">
              <Jokes />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/joinus">
              <JoinUs />
            </Route>
          </Switch>
        </div>
        {/* Bagian Footer */}
        <footer
          className="border-top p-3 text-white bg-dark"
          style={{ userSelect: "none" }}
        >
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-1">
                <img src={logo} style={{ width: 150 }} alt="logo" />
              </div>
            </div>
            <div className="row justify-content-between">
              <div className="col-5">
                <p>All rights Reserverd by 2 Cok &copy; Copyright 2020.</p>
              </div>
              <div className="col-6">
                <nav className="nav justify-content-end">
                  <p>
                    Handcrafted <span className="text-danger">❤</span> Rahmat
                    Subandi
                  </p>
                </nav>
              </div>
            </div>
          </div>
        </footer>
      </Router>
    );
  }
}

export default PageInti;
