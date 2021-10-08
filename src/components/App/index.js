import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

import Contact from 'src/components/Contact';
import Curriculum from 'src/components/Curriculum';
import Header from 'src/containers/Header';
// import Home from 'src/components/Home';
import Homes from 'src/components/Homes';
import Projects from 'src/components/Projects';
import './style.scss';

const App = (() => (
  <div className="app">
    <Router>
      <Header />
      <div className="content">
        <Homes />
        <Curriculum />
        <Projects />
        <Contact />
      </div>
    </Router>
  </div>
));

App.propTypes = {

};

export default App;
