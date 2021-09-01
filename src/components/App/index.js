import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

function App({
  message,
}) {
  return (
    <div className="app">
      {message}
    </div>
  );
}

App.propTypes = {
  message: PropTypes.string.isRequired,
};

export default App;
