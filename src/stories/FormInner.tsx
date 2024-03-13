import React from 'react'
import { Button, Form, FormProps, Grid } from '../components'

export const FormInner = (props: FormProps) => {
    const { size, ...rest } = props
    return <Form size={size} {...rest} onSubmit={(v, e) => {
        console.log(v)
    }}>
        <Grid spacing={8}>
            <Grid.Item span={12}>
                aaa
            </Grid.Item >
            <Grid.Item span={12}>
                aaa
            </Grid.Item>
            <Grid.Item span={12}>
                <Grid spacing={4}>
                    <Button htmlType='submit' color='primary' onClick={(e) => {
                    }}>Submit</Button>
                    <Button htmlType='reset' variant='outlined' color='primary'>Reset</Button>
                </Grid>
            </Grid.Item>
        </Grid>
    </Form>
}