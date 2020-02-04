import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from './page/Home'
import Login from './contexts/LoginContext'

export default function Routers() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/" exact component={Login}/>
                    <Route path="/home" exact component={Home}/>
                </Switch>
            </Router>  
        </div>
    )
}
