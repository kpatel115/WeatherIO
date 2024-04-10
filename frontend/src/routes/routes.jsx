import React from "react";
import { Redirect, Switch, Route, Router } from "react-router-dom";
import RouteGuard from "../components/RouteGaurd";

//history
import { history } from './helpers/history';

//pages
import Home from "./pages/Home"
import Login from "./pages/Login"

const Routes = () => {
    return (
        <Router history={history}>
            <Switch>
                <RouteGuard
                    exact
                    path="/"
                    component={Login}
                />
                {/* User must Create an User to Access Weather Page */}
                <Route
                    path="/home"
                    component={Home}
                />
                <Redirect to="/" />
            </Switch>
        </Router>
    );
}

export default Routes