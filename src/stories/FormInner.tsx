import React from 'react'
import { Button, Form, FormProps, Input } from '../components'

export const FormInner = (props: FormProps) => {
    const { size, ...rest } = props

    return <Form size={size} {...rest} onSubmit={(v, e) => {
        console.log(v)
    }}>
        <Input defaultValue='text' placeholder='hello' />
        <Button htmlType='submit' onClick={(e) => {
        }}>Submit</Button>
        <Button htmlType='reset'>Reset</Button>
    </Form>
}