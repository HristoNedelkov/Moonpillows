import React, { useState, useEffect, useContext } from 'react';
import { Button } from './Button';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import fullPath from './services/pathSolver';
import ThingsContext from '../context/userContexxt';

function Navbar({ user }) {
  const context = useContext(ThingsContext)


  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);


  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to={fullPath('')} className='navbar-logo' onClick={closeMobileMenu}>
            MP
            <i className='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <h1 style={{ color: 'white', marginLeft: '20px', fontSize: '22px' }}> {context ? `Welcome,  ${context.email}` : ''}</h1>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <NavLink to={fullPath('')} activeClassName="pressed" exact={true} className='nav-links' onClick={closeMobileMenu}>
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to={fullPath('services')}
                className='nav-links'
                onClick={closeMobileMenu}
                activeClassName="pressed"
                exact={true}
              >
                Services
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to={fullPath('products')}
                activeClassName="pressed"
                exact={true}
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Products
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to={fullPath('about')}
                activeClassName="pressed"
                exact={true}
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About
              </NavLink>
            </li>

            <li>
              <Link
                to={fullPath('sign-up')}
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>
            <Link
              to={!user ? fullPath('sign-up') : fullPath('logout')}
              id="last-button">
              {!user ? 'SIGN UP' : 'LOGOUT'}
            </Link>
          </Button>}
        </div>
        <Link to={fullPath('basket')}>
        {context ? (<img alt="" src="https://firebasestorage.googleapis.com/v0/b/moonpillows-676c2.appspot.com/o/images%2Fbasket.png?alt=media&token=b4fb3515-7268-4938-a924-f1368f2a889d"></img>) : ''}
        </Link>
      </nav>
    </>
  );
}

export default Navbar;
