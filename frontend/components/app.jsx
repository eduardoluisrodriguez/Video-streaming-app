import React from 'react';
import { Link } from 'react-router';
import NavWelcomeContainer from './nav_welcome/nav_welcome_container';
import MainNavContainer from './main_nav/main_nav_container';
import Footer from './footer/footer';

const App = (props) => {
  let currentNavbar;
  let navbarClass;
  let path = props.location.pathname;
  if (path === '/' || path === '/login' || path === '/signup') {
    currentNavbar = <NavWelcomeContainer path={path}/>;
    navbarClass = 'auth-navbar mobile-white';
  } else {
    currentNavbar = <MainNavContainer />;
    navbarClass = 'auth-navbar';
  }

  return(
    <div className='main-top'>
      <div className={navbarClass}>
        { currentNavbar }
      </div>
      { props.children }
      < Footer />
    </div>
  );
};

export default App;
