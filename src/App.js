import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import NotFound from './components/NotFound';
import fullPath from './components/services/pathSolver';
import About from './components/pages/About';
import firebase from './firebase'
import SignIn from './components/pages/SignIn';
import { ThingsProvider } from './context/userContexxt';
import PillowPage from './components/pages/PillowPage';
import Basket from './components/Basket';



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
            <Route path={fullPath('')} exact component={Home}></Route>
            <Route path={fullPath('services')} component={Services} />
            <Route path={fullPath('products/:id')} component={PillowPage} />
            <Route path={fullPath('products')} exact component={Products} />
            <Route path={fullPath('basket')} exact component={Basket} />
            <Route path={fullPath('basket/:id')}  component={Basket} />
            <Route path={fullPath('sign-up')} component={SignUp} />
            <Route path={fullPath('sign-in')} component={SignIn}></Route>
            <Route path={fullPath('about')} component={About}></Route>
            <Route path={fullPath('logout')} render={props => {
              firebase.auth().signOut();
              props.history.push(fullPath(''))
            }}></Route>
            <Route component={NotFound} />
          </Switch>
        </Router>

      </ThingsProvider>
    </>
  );
}

export default App;
