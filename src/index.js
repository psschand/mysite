import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from "@sentry/browser";
import * as serviceWorker from "./serviceWorker";
import "typeface-roboto";
import './index.css';
// import App from './App';
import App from "./components/App";

// import * as serviceWorker from './serviceWorker';

Sentry.init({
  dsn: process.env.REACT_APP_SENTRY_DSN,
  release: `${process.env.REACT_APP_NAME}@${process.env.REACT_APP_VERSION}`,
});

ReactDOM.render(
  // <React.StrictMode>
    <App />,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
