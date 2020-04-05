import React, { Component } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Home from './shared/pages/Home';
import About from './shared/pages/About';
import s from './style.module.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <div className={s.AppWrapper}>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
              <li>
                <Link to={`/`} className="nav-link">
                  Home
                </Link>
              </li>
              {/* <li>
                <Link to={`/about`} className="nav-link">
                  About
                </Link>
              </li> */}
            </ul>
          </nav>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
