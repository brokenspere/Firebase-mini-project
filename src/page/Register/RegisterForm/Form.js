import React,{useState} from 'react'
import { FormLogin, Container, SocialLogin, Formlabel, Button } from '../../../style/Style'
import { Form, Field } from 'react-final-form'
import firebase from '../../../config/FirebaseConfig'
import { ThemeProvider } from 'styled-components'

export default function Register () {
    const [role] = useState('User')
    const onSubmit = async (values) => {
        const { email, password,firstname,lastname } = values
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(response => {
                firebase.firestore().collection('Users').doc(response.user.uid).set({
                    FirstName:firstname,
                    LastName:lastname,
                    Role:role
                })
                alert('Register complete')
            })
            .catch(error => {
                console.log(error)
                alert('Cannot Register')
            })
    }
    const required = value => (value ? undefined : 'Required')

    return (
        <Container>
            <FormLogin>
                <div>
                    <h3>Register</h3>
                </div>
                <Form
                    onSubmit={onSubmit}
                    render={({ handleSubmit, form, submitting, pristine, values }) => (
                        <form onSubmit={handleSubmit}>
                            <Field name="email" validate={required}>
                                {({ input, meta }) => (
                                    <div style={{ margin: '10px' }}>
                                        <Formlabel>Email</Formlabel>
                                        <input {...input} type="email" placeholder="Email" />
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                    </div>
                                )}
                            </Field>
                            <Field name="password" validate={required}>
                                {({ input, meta }) => (
                                    <div style={{ margin: '10px' }}>
                                        <Formlabel>Password</Formlabel>
                                        <input {...input} type="password" placeholder="Password" />
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                    </div>
                                )}
                            </Field>
                            <Field name="firstname" validate={required}>
                                {({ input, meta }) => (
                                    <div style={{ margin: '10px' }}>
                                        <Formlabel>Firstname</Formlabel>
                                        <input {...input} type="text" placeholder="Firstname" />
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                    </div>
                                )}
                            </Field>
                            <Field name="lastname" validate={required}>
                                {({ input, meta }) => (
                                    <div style={{ margin: '10px' }}>
                                        <Formlabel>Lastname</Formlabel>
                                        <input {...input} type="text" placeholder="Lastname" />
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                    </div>
                                )}
                            </Field>
                            <div style={{ marginLeft: '50px',display:'flex',flexDirection:'row' }}>
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
