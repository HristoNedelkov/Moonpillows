import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import NotFound from './components/NotFound';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/Moonpillows' ><Redirect to="/"/></Route>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' exact component={Products} />
          <Route path='/sign-up' component={SignUp} />
          <Route component={NotFound}/>
        </Switch>
      </Router>

    </>
  );
}

export default App;
