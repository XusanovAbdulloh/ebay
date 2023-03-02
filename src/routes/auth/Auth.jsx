import React from 'react';
import "./Auth.css";
import { Route, Switch } from 'react-router-dom';
import Create from "./create/Create"
import Login from "./login/Login"

const Auth = () => {
    return (
        <div>
            <Switch>
                <Route path="/auth/create">
                    <Create />
                </Route>
                <Route path="/auth/login">
                    <Login />
                </Route>
            </Switch>
        </div>
    );
}

export default Auth;
