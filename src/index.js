import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Twitter from './Twitter';
import * as serviceWorker from './serviceWorker';
import Twitter from './Twitter.js';

ReactDOM.render(<Twitter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
