import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './Main';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import authentification from 'react-azure-adb2c';

authentification.initialize({
    tenant: 'testreactjs.onmicrosoft.com',
    signInPolicy: 'B2C_1_pomiesmatthieu',
    applicationId: '23b4d5e4-220e-4281-9335-7173cda2882f',
    cacheLocation: 'sessionStorage',
    scopes: ['https://testreactjs.onmicrosoft.com/TestReactJsApp/user_impersonation'],
    redirectUri:'http://localhost:3000/',
    postLogoutRedirectUri: window.location.origin,
});

authentification.run(() => {
    ReactDOM.render(<Main />, document.getElementById('root'));    
    serviceWorker.unregister();
});

//ReactDOM.render(<Main />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();