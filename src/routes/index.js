import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PrivateRoute from './privateRoute';

import DefaultLayout from '../components/DefaultLayout';

import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Product from '../pages/Product';
import ProductForm from '../pages/ProductForm';

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/signup" component={SignUp} />
            <DefaultLayout>
                <PrivateRoute path="/products" exact component={Product} />
                <PrivateRoute path="/products/form" component={ProductForm} />
            </DefaultLayout>
        </Switch>
    );
};

export default Routes;
