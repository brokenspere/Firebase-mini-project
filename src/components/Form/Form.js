import React from 'react'
import { Field } from 'react-final-form'

const required = value => (value ? undefined : 'Required')
const Fields = ({name,type,placeholder }) => {
    return (
        <Field name={name} validate={required}>
            {({ input, meta }) => (
                <div style={{ margin: '10px' }}>
                    <input style={{ width: '250px' }} {...input} type={type} placeholder={placeholder} />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
            )}
        </Field>
    )
}
export default Fields
