import React from 'react'
import { Button, Form, FormProps, Input, Space } from '../components'

export const FormInner = (props: FormProps) => {
    const { size, ...rest } = props
    return <Form size={size} {...rest} onSubmit={(v, e) => {
        console.log(v)
    }}>
        <Space direction='vertical' size='small'>
            <Input defaultValue='text' placeholder='hello' />
            <Space>
                <Button htmlType='submit' color='primary' onClick={(e) => {
                }}>Submit</Button>
                <Button htmlType='reset' type='outlined'>Reset</Button>
            </Space>
        </Space>
    </Form>
}