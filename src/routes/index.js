import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Product from '../pages/Product';

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/products" exact component={Product} />
        </Switch>
    );
};

export default Routes;
