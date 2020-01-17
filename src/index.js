import React from 'react';
import ReactDOM from 'react-dom';
import authentication from '@kdpw/msal-b2c-react';

import './index.css';
import StarMatch from './StarMatch';
import * as serviceWorker from './serviceWorker';

const myScopes = [
    'https://BA04AADCPAY001.onmicrosoft.com/pachirapay-bo-test/user_read',
    'https://BA04AADCPAY001.onmicrosoft.com/pachirapay-bo-test/user_impersonation'
];

authentication.initialize({
    tenant: 'BA04AADCPAY001.onmicrosoft.com',
    signInPolicy: 'B2C_1_inscription_et_connexion',
    resetPolicy: 'B2C_1_reinitialisation_mot_de_passe',
    applicationId: '08228f0c-dad1-43cf-832f-789fb35a82dd',
    cacheLocation: 'sessionStorage',
    scopes: myScopes,
    redirectUri: 'http://localhost:3000/',
    postLogoutRedirectUri: 'http://localhost:3000/'
});

authentication.run(() => {
    ReactDOM.render(<StarMatch onDisconnectButtonClick={authentication.signOut} />, document.getElementById('root'));
    serviceWorker.unregister();
});
