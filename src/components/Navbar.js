import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import fullPath from './services/pathSolver';

function Navbar({ user }) {
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
      </nav>
    </>
  );
}

export default Navbar;
