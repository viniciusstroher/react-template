import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Router, Route, Switch} from 'react-router'
import {HashRouter} from 'react-router-dom'
import ListEventsPage from './pages/ListEventsPage'
import DetailEventsPage from './pages/DetailEventsPage'
function App() {
    return (
    <div className="App" style={{/*display:"flex",justifyContent:"center"*/}}>
      <div style={{/*width:"80%"*/}}>
          <HashRouter>
              <Switch>
                  <Route path="/events" component={ListEventsPage} />
                  <Route path="/events/:id" component={DetailEventsPage} />
                  <Route path="/topics">
                      tops
                  </Route>
                  <Route path="/">
                      home
                  </Route>
              </Switch>
          </HashRouter>
      </div>
    </div>
  );
}

export default App;
