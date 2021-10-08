import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './style.scss';

const Header = ({
  headerClass,
  changeHeaderClass,
}) => {
  const scrollHeader = (() => {
    const scrollValue = document.body.scrollTop || document.documentElement.scrollTop;
    console.log(scrollValue);
    if (scrollValue > 50) {
      changeHeaderClass('headerClass', 'navList--box shrink');
      console.log("C'est plus");
    }
    else {
      changeHeaderClass('headerClass', 'navList--box');
      console.log("C'est moins");
    }
  });
  window.onscroll = () => {
    scrollHeader();
  };
  return (
    <div className={headerClass}>
      <Link className="navList--link" to="/">Accueil</Link>
      <Link className="navList--link" to="/curriculum">Curriculum</Link>
      <div className="navList--image" />
      <Link className="navList--link" to="/projects">Projets</Link>
      <Link className="navList--link" to="/contact">Contact</Link>
    </div>
  );
};

Header.defaultProps = {
  changeHeaderClass: () => {},
};

Header.propTypes = {
  headerClass: PropTypes.string.isRequired,
  changeHeaderClass: PropTypes.func,
};

export default Header;
