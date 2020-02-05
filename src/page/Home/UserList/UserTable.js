import React,{useEffect,useState} from 'react'
import { Table, Divider, Tag } from 'antd';
import firebase from '../../../config/FirebaseConfig'
export default function UserTable() {
    const [userList,setUserList] = useState([])

    useEffect(()=>{
        const fetchData =async()=>{
            const db = firebase.firestore()
            const data = await db.collection("Users").where("Role","==","User").get()
            setUserList(data.docs.map(doc=>doc.data()))
        }
        fetchData()
    },[])

    useEffect(()=>{
        console.log(userList)
    },[userList])
    
    return (
        <div>
            
        </div>
    )
}
