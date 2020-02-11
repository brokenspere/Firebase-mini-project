import React,{useEffect,useState} from 'react'
import { Table, Divider,Spin } from 'antd';
import firebase from '../../../config/FirebaseConfig'
export default function UserTable() {
    const [userList,setUserList] = useState([])
    const columns =[
        {
            title:'First name',
            dataIndex:'FirstName',
            key:'FirstName'
        },
        {
            title:'Last name',
            dataIndex:'LastName',
            key:'LastName'
        },
        {
            title:'Email',
            dataIndex:'Email',
            key:'Email'
        },
        {
            title: '',
            key: 'action',
            render: () => (
              <span>
                <a>Edit</a>
                <Divider type="vertical" />
                <a>Delete</a>
              </span>
            ),
          }
    ]
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
        userList.length > 0 ? (
        <div>
            <Table  rowKey="FirstName" dataSource={userList} columns={columns} />
        </div>
        ) : (
            <Spin style={{display:'flex',justifyContent:'center'}} tip="Loading..." />
          )
  
    )
}
