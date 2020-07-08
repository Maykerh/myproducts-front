import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { isSigned } from '../utils/session';

const PrivateRoute = ({ children, ...rest }) => {
    if (!isSigned()) {
        return <Redirect to="/" />;
    }

    return <Route {...rest}>{children}</Route>;
};

export default PrivateRoute;
