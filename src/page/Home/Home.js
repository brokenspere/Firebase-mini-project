import React from 'react'
import firebase from '../../config/FirebaseConfig'
import {Button} from 'antd'
import { useHistory } from "react-router-dom";
export default function Home() {
    const history = useHistory();
    const Logout =()=>{
        firebase.auth().signOut().then(function() {
            history.push('/')
          }).catch(function(error) {
            alert(error)
          });
    }
    return (
        <div>
            <Button onClick={Logout}>Logout</Button>
        </div>
    )
}
