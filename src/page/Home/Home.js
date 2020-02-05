import React from 'react'
import firebase from '../../config/FirebaseConfig'
import {Button} from '../../style/Style'
import { useHistory } from "react-router-dom";
import Sidebar from '../../components/Sidebar/Sidebar'
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
            <Sidebar/>
            {/* <Button onClick={Logout}>Logout</Button> */}
        </div>
    )
}
