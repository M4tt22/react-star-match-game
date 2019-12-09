import React from 'react';
import ReactDOM from 'react-dom';
import authentification from 'react-azure-adb2c';

import './index.css';
import StarMatch from './StarMatch';
import * as serviceWorker from './serviceWorker';

const myScopes = [
    'https://BA04AADCPAY001.onmicrosoft.com/pachirapay-bo-test/user_read'
]

authentification.initialize({
    tenant: 'BA04AADCPAY001.onmicrosoft.com',
    signInPolicy: 'B2C_1_inscription_et_connexion',
    applicationId: '08228f0c-dad1-43cf-832f-789fb35a82dd',
    cacheLocation: 'sessionStorage',
    scopes: myScopes,
    redirectUri: 'http://localhost:3000/',
    postLogoutRedirectUri: window.location.origin,
});

authentification.run(() => {
    ReactDOM.render(<StarMatch onDisconnectButtonClick={() => authentification.signOut} />, document.getElementById('root'));
    serviceWorker.unregister();
});

//ReactDOM.render(<Main />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
