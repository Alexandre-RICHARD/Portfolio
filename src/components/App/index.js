import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Contact from 'src/components/Contact';
import Curriculum from 'src/components/Curriculum';
import Header from 'src/components/Header';
import Home from 'src/components/Home';
import Projects from 'src/components/Projects';
import './style.scss';

const App = (() => (
  <div className="app">
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/curriculum" exact>
          <Curriculum />
        </Route>
        <Route path="/projects" exact>
          <Projects />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
      </Switch>
    </Router>
  </div>
));

App.propTypes = {

};

export default App;
