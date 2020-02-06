import React, { useContext, useEffect } from 'react'
import { useHistory,useLocation } from "react-router-dom";
import { UserContext } from '../../Router'
import Sidebar from '../../components/Sidebar/Sidebar'
export default function Home() {
    const { user } = useContext(UserContext)
    const location = useLocation();
    React.useEffect(() => {
        // ga.send(["pageview", location.pathname]);
        console.log(location.pathname)
    }, [location]);
   

    return (
        <div>
            <Sidebar />
        </div>
    )
}
