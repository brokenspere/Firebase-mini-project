import React,{useState} from 'react'
import Login from '../component/Login'

export const LoginContext = React.createContext()

export default function ContextLogin() {
    const [currentUser,setCurrentUser] = useState(null)
    return (
        <div>
            <LoginContext.Provider value={{
                user:currentUser,
                setUser:setCurrentUser
            }}>
                <Login/>
            </LoginContext.Provider>
        </div>
    )
}
