import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Partage from './components/pages/Services';
import Activites from './components/pages/Activites';
import FormSignup from './components/FormSignUp';
import Nutrition from "./components/pages/nutrition";
import NotFound from "./components/pages/NotFound";
import FormSignin from './components/FormSignIn';
import Conditions from './components/pages/Conditions'
import Objectifs from './components/pages/Objectifs'
import Encodage from './components/pages/Encodage'
import {isLoggedIn} from './components/auth.js';
import { PrivateRoute } from "./components/PrivateRoute.js";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <PrivateRoute exact isloggedin={isLoggedIn()} path="/objectifs" component={Objectifs} />
          <PrivateRoute exact isloggedin={isLoggedIn()} path="/encodage" component={Encodage} />
          <Route path='/partage' component={Partage} />
          <Route path='/activites' component={Activites} />
          <Route path='/sign-up' component={FormSignup} />
          <Route path='/login' component={FormSignin} />
          <Route path='/conditions' component={Conditions} />
          <Route component={NotFound} />

        </Switch>
      </Router>
    </>
  );
}

export default App;