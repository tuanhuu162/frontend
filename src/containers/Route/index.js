import React from "react";
import {
    Route, Redirect
} from "react-router-dom";
import ROUTES from 'constants';
import {checkRole} from 'utils';

export const PublicRoute = (Component, ...rest) => (
    <Route 
        {...rest}
        render={(props) => {
            localStorage.getItem("accessToken") ? 
            <Redirect to={{pathname: ROUTES.HOME}}/>:
            <Component {...props}/>
        }}
    />
);

export const PrivateRoute = ({Component, protect, ...rest}) => {
    return (
        <Route
            {...rest}
            render={(props) => {
                localStorage.getItem("refreshToken") && checkRole(localStorage.getItem("accessToken"), protect) ?
                < Component {...props} />: 
                <Redirect 
                    to={{
                        pathname: ROUTES.LOGIN,
                        state: {
                            from: rest.path
                        }
                    }}
                />
            }}
        />
    )
}


