import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';
import Login from './containers/login';
import SignIn from './containers/signIn';
import Header from './components/Header';
import Home from './containers/home';

function App() {
  return (
    <Router>
        <Header />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <SignIn />
          </Route>
          <PrivateRoute path="/">
            <Home />
          </PrivateRoute>
        </Switch>
    </Router>
  );
}

export default App;
