import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router'
import routes from './Routes/routes.js'
import './index.css';
import Home from './Home';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Router routes = {routes} history={browserHistory}/>, document.getElementById('root'));
registerServiceWorker();
