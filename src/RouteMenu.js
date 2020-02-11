import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import UserTable from './page/Home/UserList/UserTable'
import Profile from './page/Home/Profile/Profile'
import Sidebar from './components/Sidebar/Sidebar'
export default function RouteMenu() {
    return (
        <Sidebar>
            <Router>
                <Switch>
                    <Route path="/userTable" exact component={UserTable} />
                    <Route path="/profile" exact component={Profile} />
                </Switch>
            </Router>
        </Sidebar>
    )
}
