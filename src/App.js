import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Router, Route, Switch} from 'react-router'
import {HashRouter} from 'react-router-dom'
function App() {
    return (
    <div className="App">
      <HashRouter>
          <Switch>
              <Route path="/about">
                 about
              </Route>
              <Route path="/topics">
                 tops
              </Route>
              <Route path="/">
                  home
              </Route>
          </Switch>
      </HashRouter>
      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      {/*  <p>*/}
      {/*    Edit <code>src/App.js</code> and save to reload.*/}
      {/*  </p>*/}
      {/*  <a*/}
      {/*    className="App-link"*/}
      {/*    href="https://reactjs.org"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Learn React*/}
      {/*  </a>*/}
      {/*</header>*/}
    </div>
  );
}

export default App;
