import React from 'react';
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ children, ...rest }) {
    console.log(!!localStorage.getItem('token'));
    const isLoggedIn = !!localStorage.getItem('token');
    return (
        <Route
            {...rest}
            render={({ location }) =>
                isLoggedIn ?
                    (children) :
                    (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
}

export default PrivateRoute;