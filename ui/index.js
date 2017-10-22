import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// These may have side effects and load pages
import './legacy.js';

// If there's nothing on the page, try loading client-side app.
const mainEl = document.querySelector('#main');
if (mainEl.innerHTML === '') ReactDOM.render(<App />, mainEl);