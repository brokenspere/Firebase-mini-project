import React,{useContext,useEffect} from 'react'
import { useHistory } from "react-router-dom";
import {UserContext} from '../../Router'
import Sidebar from '../../components/Sidebar/Sidebar'
export default function Home() {
    const { user } = useContext(UserContext)
    useEffect(()=>{
        console.log(user)
    },[user])
    return (
        <div>
            <Sidebar/>
        </div>
    )
}
