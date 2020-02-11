import React,{useState} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from './page/Home/Home'
import Register from './page/Register/Register'
import Login from './page/Login/Login'
import Profile from './page/Home/Profile/Profile'

export const UserContext = React.createContext()

export default function Routers() {
    const [currentUser, setCurrentUser] = useState(null)
    return (
            <UserContext.Provider value={{
                user: currentUser,
                setUser: setCurrentUser
            }}>
                <Router>
                    <Switch>
                        <Route path="/" exact component={Login} />
                        <Route path="/home" exact component={Home} />
                        <Route path="/register" exact component={Register} />
                        <Route path="/profile" exact component={Profile} />
                    </Switch>
                </Router>
            </UserContext.Provider>

    )
}
