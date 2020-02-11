import React , { useContext, useEffect } from 'react'
import Sidebar from '../../../components/Sidebar/Sidebar'
import ProfileCard from './ProfileCard'
import { UserContext } from '../../../Router'
export default function Profile() {
    const { user, setUser } = useContext(UserContext)

    useEffect(() => {
        console.log(user)
    }, [user])
    return (
        <Sidebar>
            <ProfileCard/>
        </Sidebar>
    )
}
