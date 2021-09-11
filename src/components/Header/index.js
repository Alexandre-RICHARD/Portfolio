import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

const Header = (() => (
  <div className="navList--box">
    <Link className="navList--link" to="/">Accueil</Link>
    <Link className="navList--link" to="/curriculum">Curriculum</Link>
    <div className="navList--image" />
    <Link className="navList--link" to="/projects">Projets</Link>
    <Link className="navList--link" to="/contact">Contact</Link>
  </div>
));

Header.propTypes = {

};

export default Header;
