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
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/partage' component={Partage} />
          <Route path='/activites' component={Activites} />
          <Route path='/sign-up' component={FormSignup} />
          <Route path='/login' component={FormSignin} />
          <Route path='/conditions' component={Conditions} />
          <Route path='/experts/nutrition' component={Nutrition} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
