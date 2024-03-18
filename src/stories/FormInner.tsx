import React, { useRef } from 'react'
import { Button, Form, Input, FormProps, Grid } from '../components'

export const FormInner = (props: FormProps) => {
    const { size, ...rest } = props
    const inputRef = useRef<HTMLInputElement>(null);
    return <Form size={size} {...rest} onSubmit={(v, e) => {
        console.log(v)
    }}>
        <Grid spacing={8}>
            <Grid.Item span={12}>
                <Input defaultValue='check' ref={inputRef} />
            </Grid.Item >
            <Grid.Item span={12}>
                <Input defaultValue='abc' htmlType='password' placeholder='test' />
            </Grid.Item>
            <Grid.Item span={12}>
                <Grid spacing={4}>
                    <Button htmlType='submit' color='primary' onClick={(e) => {
                        //inputRef.current?.focus()
                    }}>Submit</Button>
                    <Button htmlType='reset' variant='outlined' color='primary'>Reset</Button>
                </Grid>
            </Grid.Item>
        </Grid>
    </Form>
}