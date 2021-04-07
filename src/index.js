import '@capacitor/core';

import React from 'react';
import ReactDOM from 'react-dom';

import Framework7 from 'framework7/lite-bundle';

import Framework7React from 'framework7-react';

import 'framework7/framework7-bundle.css';

import './css/icons.css';
import './css/app.css';

import App from './components/app.jsx';

Framework7.use(Framework7React);

ReactDOM.render(React.createElement(App), document.getElementById('app'));
