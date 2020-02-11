import React from 'react'
import UserTable from '../Home/UserList/UserTable'
import Sidebar from '../../components/Sidebar/Sidebar'


export default function Home() {
    return (
        <Sidebar>
            <UserTable/>
        </Sidebar>
    )
}
