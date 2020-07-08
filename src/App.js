import React from 'react';
import { Router } from 'react-router-dom';

import Routes from './routes';
import history from './services/history';

import GlobalStyle from './styles/global';
import { validateSession } from './utils/session';

validateSession();

const App = () => (
    <Router history={history}>
        <GlobalStyle />
        <Routes />
    </Router>
);

export default App;
