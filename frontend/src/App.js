import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';
import SingIn from './containers/signIn';
import SignUp from './containers/signUp';
import Header from './components/Header';
import Home from './containers/home';

function App() {
  return (
    <Router>
        <Header />
        <Switch>
          <Route path="/login">
            <SingIn />
          </Route>
          <Route path="/register">
            <SignUp />
          </Route>
          <PrivateRoute path="/">
            <Home />
          </PrivateRoute>
        </Switch>
    </Router>
  );
}

export default App;
