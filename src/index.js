import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import configureStore from "./redux-store/redux-store-configuration";
import { Provider } from "react-redux";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Provider store={configureStore()}><App/></Provider>, document.getElementById('root'));

// If you want your application to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();