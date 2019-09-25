import React from 'react';
import ReactDOM from 'react-dom';
import authentification from 'react-azure-adb2c';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const myScopes = [
    'https://paymentbackoffice.onmicrosoft.com/paymentbackofficeapp/user.read'
]

authentification.initialize({
    tenant: 'paymentbackoffice.onmicrosoft.com',
    signInPolicy: 'B2C_1_pomiesmatthieu',
    applicationId: '30ae102e-5ed1-45e5-ba75-939c795569cd',
    cacheLocation: 'sessionStorage',
    scopes: myScopes,
    redirectUri: 'http://localhost:3000/',
    postLogoutRedirectUri: window.location.origin,
});

authentification.run(() => {
    ReactDOM.render(<App />, document.getElementById('root'));
    serviceWorker.unregister();
});

//ReactDOM.render(<Main />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
