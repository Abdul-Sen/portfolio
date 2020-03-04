import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/app';
import AppAlt from './components/appAlt/appAlt';

import { BrowserRouter } from 'react-router-dom'




ReactDOM.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
          {/* <App /> */}
          <AppAlt />
    </BrowserRouter>
    

, document.getElementById('root'));
