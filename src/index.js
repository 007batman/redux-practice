import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css'
import Store from './redux/store/Store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
  <Provider store={Store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


