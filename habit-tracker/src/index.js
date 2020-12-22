import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '@fortawesome/fontawesome-free/js/all.js';
import App from './App';
import SimpleHabit from './components/SimpleHabit';

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <SimpleHabit/> */}
  </React.StrictMode>,
  document.getElementById('root')
);
