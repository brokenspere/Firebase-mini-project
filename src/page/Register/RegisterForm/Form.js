import React, { useState, useContext } from 'react'
import { FormLogin, Container, SocialLogin, Formlabel, Button } from '../../../style/Style'
import { Form, Field } from 'react-final-form'
import firebase from '../../../config/FirebaseConfig'
import { UserContext } from '../../../Router'
import { useHistory } from 'react-router-dom'
import Fields from '../../../components/Form/Form'


export default function Register() {
    const history = useHistory()
    const { setUser } = useContext(UserContext)
    const [role] = useState('User')
    const onSubmit = async (values) => {
        const { email, password, firstname, lastname } = values
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(response => {
                firebase.firestore().collection('Users').doc(response.user.uid).set({
                    FirstName: firstname,
                    LastName: lastname,
                    Email:email,
                    Role: role
                })
                alert('Register complete')
                setUser(response.user)
                history.push('/home')
            })
            .catch(error => {
                console.log(error)
                alert('Cannot Register')
            })
    }
    return (
        <Container>
            <FormLogin>
                <div>
                    <h3 style={{ fontWeight: 'bold' }}>Register</h3>
                </div>
                <Form
                    onSubmit={onSubmit}
                    render={({ handleSubmit, form, submitting, pristine, values }) => (
                        <form onSubmit={handleSubmit}>
                            <Fields name={"email"} type={"email"} placeholder={"Email"} />
                            <Fields name={"password"} type={"password"} placeholder={"Password"} />
                            <Fields name={"firstname"} type={"text"} placeholder={"Firstname"} />
                            <Fields name={"lastname"} type={"text"} placeholder={"Lastname"} />
                            <div style={{ marginLeft: '30px', display: 'flex', flexDirection: 'row' }}>
                                <Button type="submit" disabled={submitting}>
                                    Register
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
            </FormLogin>
        </Container>
    )
}
