import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from "./components/auth/Login"
import './App.css';

class App extends Component{
  render() {
    return(
      <Router>
        <>
          <Switch>
            <Route path="/" exact component={Login} />
          </Switch>
        </>
      </Router>
    )
  }
}



export default App;
