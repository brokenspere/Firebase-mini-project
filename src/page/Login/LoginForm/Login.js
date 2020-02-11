import React, { useState, useEffect, useContext } from 'react'
import { FormLogin, Container, SocialLogin, Formlabel,Button } from '../../../style/Style'
import { Form } from 'react-final-form'
import { Icon } from 'antd'
import { ThemeProvider } from 'styled-components'
import firebase from '../../../config/FirebaseConfig'
import { useHistory } from "react-router-dom";
import { UserContext } from '../../../Router'
import Fields from '../../../components/Form/Form'

export default function Login() {
    const { user, setUser } = useContext(UserContext)
    const history = useHistory();
    const [imageUrl, setImageUrl] = useState('')

    const onSubmit = async (values) => {
        const { email, password } = values
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(response => {
                //console.log(response)
                setUser(response.user)
                history.push('/home')
            })
            .catch(error => {
                alert(error)
            })
    }
    const Register =()=>{
        history.push('/register')
    }
    const FacebookLogIn = () => {
        const provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(({ user }) => {
                setImageUrl(`${user.photoURL}?height=500`)
                setUser({ user })
                history.push('/home')
            })
            .catch(function (error) {
                alert(error)
            });
    }

    const GoogleLogIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(({ user }) => {
                setImageUrl(`${user.photoURL}?height=500`)
                setUser({ user })
                history.push('/home')
            })
            .catch(function (error) {
                alert(error)
            });
    }

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                setUser(user)
                history.push('/home')
            } else {
                setUser(null)
            }
        })
        console.log(user);

    }, [user])
    return (
        <Container>
            <FormLogin>
                <div>
                    <h3 style={{fontWeight:'bold'}}>Welcome</h3>
                </div>
                <Form
                    onSubmit={onSubmit}
                    render={({ handleSubmit, form, submitting, pristine, values }) => (
                        <form onSubmit={handleSubmit}>
                           <Fields name={"email"} type={"email"} placeholder={"Email"}/>
                           <Fields name={"password"} type={"password"} placeholder={"Password"}/>
                            <div style={{marginLeft: '30px',display:'flex',flexDirection:'row'}}>
                                <Button type="submit" disabled={submitting}>
                                    Submit
                                </Button>
                                <Button
                                    type="button"
                                    onClick={form.reset}
                                    disabled={submitting || pristine}
                                >
                                    Reset
                                </Button>
                            </div>
                        </form>
                    )}
                />
                <ThemeProvider theme={{ main: "royalblue" }} >
                    <SocialLogin onClick={FacebookLogIn}>
                        <Icon type="facebook" /><span>Login with Facebook</span>
                    </SocialLogin>
                    <SocialLogin theme={{ main: "#dd4b39" }} onClick={GoogleLogIn}>
                        <Icon type="google" /> <span>Login with Google</span>
                    </SocialLogin>
                    or
                    <SocialLogin theme={{ main: "black" }} onClick={Register}>
                         <span>Register</span>
                    </SocialLogin>
                </ThemeProvider>
            </FormLogin>
        </Container>

    )
}
