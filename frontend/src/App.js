import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Partage from './components/pages/Services';
import Activites from './components/pages/Activites';
import FormSignup from './components/FormSignUp';
import Nutrition from "./components/pages/nutrition";

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
          <Route path='/experts/nutrition' component={Nutrition} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
