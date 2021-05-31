import React from "react";
import {
    BrowserRouter, Switch, Route, Redirect
} from "react-router-dom";
import ROUTES from 'constants';

import LoginPage from "./containers/LoginPage";
import RegisterPage from "./containers/RegisterPage";
import {PublicRoute, PrivateRoute} from "./containers/Route"
import ForgotPage from "./containers/ForgotPage";

const define_routes = [
    {
        Component: LoginPage,
        extract: true,
        protect: false,
        path: ROUTES.LOGIN
    },
    {
        Component: RegisterPage,
        extract: true,
        protect: false,
        path: ROUTES.SIGN_UP
    },
    {
        Component: ForgotPage,
        extract: true,
        protect: false,
        path: ROUTES.FORGOT_PASSWORD
    }
]


export default (props) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" render={(
                    (props) => <Redirect to={ROUTES.HOME}/>
                )} />
                {
                    define_routes.map((route, index) => {
                        route.protect ?
                        <PrivateRoute {...route} key={index}/>: 
                        <PublicRoute {...route} key={index}/>
                    })  
                }
            </Switch>
        </BrowserRouter>
    )
}
