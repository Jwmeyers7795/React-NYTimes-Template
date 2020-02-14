import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './App.css';
import Loginpage from './components/Loginpage'
import Homepage from './components/Homepage'


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/Login" component={Loginpage} />
          <Route path="/" component={Homepage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
