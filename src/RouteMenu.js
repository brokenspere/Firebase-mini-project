import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import UserTable from './page/Home/UserList/UserTable'
import Profile from './page/Home/Profile/Profile'
export default function RouteMenu() {
    return (
        <Router>
            <Switch>
                <Route path="/userTable" exact component={UserTable} />
                <Route path="/profile" exact component={Profile} />
            </Switch>
        </Router>
    )
}
