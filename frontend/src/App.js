import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Partage from './components/pages/Services';
import Activites from './components/pages/Activites/Activites';
import Malbouffe from './components/pages/Nutrition/malbouffe'
import FormSignup from './components/FormSignUp';
import NotFound from "./components/pages/NotFound/NotFound";
import FormSignin from './components/FormSignIn';
import Conditions from './components/pages/ConditionsGénérales/Conditions';
import Objectifs from './components/pages/Objectifs/Objectifs';
import Distance from './components/pages/Encodage_distance';
import Score from './components/pages/Encodage_score';
import Aquatique from './components/pages/Encodage_aquatique';
import {isLoggedIn} from './components/auth.js';
import { PrivateRoute } from "./components/PrivateRoute.js";
import Contact from "./components/pages/FormulaireContact/Contact";
import Sidebar from "./components/sidebar";
import BarChart from "./components/pages/Statistiques/Statistiques";
import DonneesPersonnels from "./components/pages/DonneesPersonnels/DonneesPersonnels";

import Nutrition from "./components/pages/Nutrition/nutrition";

import Premium from "./components/pages/Premium";


function App() {
  if(isLoggedIn() && localStorage.getItem("premium") !== "false"){
     return(
         <>
      <Router>
        <Navbar />

        <Switch>
          <Route path='/' exact component={Home} />
          <PrivateRoute exact isloggedin={isLoggedIn()} path="/mes-donnees" component={DonneesPersonnels} />
          <PrivateRoute exact isloggedin={isLoggedIn()} path="/mes-statistiques" component={BarChart} />
          <PrivateRoute exact isloggedin={isLoggedIn()} path="/objectifs" component={Objectifs} />
          <PrivateRoute exact isloggedin={isLoggedIn()} path="/encodage_distance" component={Distance} />
          <PrivateRoute exact isloggedin={isLoggedIn()} path="/encodage_score" component={Score} />
          <PrivateRoute exact isloggedin={isLoggedIn()} path="/encodage_aquatique" component={Aquatique} />
          <PrivateRoute exact isloggedin={isLoggedIn()} path="/malbouffe" component={Malbouffe} />
          <PrivateRoute exact isloggedin={isLoggedIn()} path='/nutrition' component={Nutrition} />
          <Route path='/partage' component={Partage} />
          <Route path='/activites' component={Activites} />
          <Route path='/sign-up' component={FormSignup} />
          <Route path='/login' component={FormSignin} />
          <Route path='/conditions' component={Conditions} />
          <Route path='/contact' component={Contact} />
          <Route path='/premium' component={Premium} />

          <Route component={NotFound} />

        </Switch>
      </Router>
    </>
    )
  }
  else if(isLoggedIn() && localStorage.getItem("premium") == "false"){
    return(
         <>
      <Router>
        <Navbar />
        <Sidebar/>
        <Switch>
          <Route path='/' exact component={Home} />
          <PrivateRoute exact isloggedin={isLoggedIn()} path="/mes-donnees" component={DonneesPersonnels} />
          <PrivateRoute exact isloggedin={isLoggedIn()} path="/mes-statistiques" component={BarChart} />
          <PrivateRoute exact isloggedin={isLoggedIn()} path="/objectifs" component={Objectifs} />
          <PrivateRoute exact isloggedin={isLoggedIn()} path="/encodage_distance" component={Distance} />
          <PrivateRoute exact isloggedin={isLoggedIn()} path="/encodage_score" component={Score} />
          <PrivateRoute exact isloggedin={isLoggedIn()} path="/encodage_aquatique" component={Aquatique} />
          <Route path='/partage' component={Partage} />
          <Route path='/activites' component={Activites} />
          <Route path='/sign-up' component={FormSignup} />
          <Route path='/login' component={FormSignin} />
          <Route path='/conditions' component={Conditions} />
          <Route path='/contact' component={Contact} />
          <Route path='/premium' component={Premium} />

          <Route component={NotFound} />

        </Switch>
      </Router>
    </>
    )
  }else{
  return (
    <>
      <Router>
        <Navbar data-testid="navbar" />
        <Switch>
          <Route path='/' exact component={Home} />
          <PrivateRoute exact isloggedin={isLoggedIn()} path="/objectifs" component={Objectifs} />
          <PrivateRoute exact isloggedin={isLoggedIn()} path="/encodage_distance" component={Distance} />
          <PrivateRoute exact isloggedin={isLoggedIn()} path="/encodage_score" component={Score} />
          <PrivateRoute exact isloggedin={isLoggedIn()} path="/encodage_aquatique" component={Aquatique} />
          <Route path='/partage' component={Partage} />
          <Route path='/activites' component={Activites} />
          <Route path='/sign-up' component={FormSignup} />
          <Route path='/login' component={FormSignin} />
          <Route path='/conditions' component={Conditions} />
          <Route path='/contact' component={Contact} />
          <Route path='/premium' component={Premium} />

          <Route component={NotFound} />

        </Switch>
      </Router>
    </>
  );}
}

export default App;