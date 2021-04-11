import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import NotFound from './components/NotFound';
import fP from './components/services/pathSolver';
import About from './components/pages/About';
import firebase from './firebase'
import SignIn from './components/pages/SignIn';
import { ThingsProvider } from './context/userContexxt';
import PillowPage from './components/pages/PillowPage';
import Basket from './components/Basket';
import MapComp from './components/MapComp';



function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    firebase.auth().onAuthStateChanged(setUser)
  }, [])
  return (
    <>
      <ThingsProvider value={user}>

        <Router>
          <Navbar user={user} />
          <Switch>
            <Route path='/' exact  ><Redirect to="/Moonpillows" /></Route>
            <Route path={fP('')} exact component={Home}></Route>
            <Route path={fP('services')} component={Services} />
            <Route path={fP('products/:id')} component={PillowPage} />
            <Route path={fP('products')} exact component={Products} />
            <Route path={fP('basket')} exact component={Basket} />
            <Route path={fP('basket/:id')}  component={Basket} />
            <Route path={fP('sign-up')} component={SignUp} />
            <Route path={fP('sign-in')} component={SignIn}></Route>
            <Route path={fP('about')} component={About}></Route>
            <Route path={fP('map')} component={MapComp}></Route>
            <Route path={fP('logout')} render={props => {
              firebase.auth().signOut();
              props.history.push(fP(''))
            }}></Route>
            <Route component={NotFound} />
          </Switch>
        </Router>

      </ThingsProvider>
    </>
  );
}

export default App;
