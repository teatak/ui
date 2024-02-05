import React from 'react';
import { Space, Button } from '../components';

export interface ButtonPropsOverride {
    type?: 'standard' | 'filled' | 'outlined'
    long?: boolean
    rounded?: boolean
    circle?: boolean
    size?: 'tiny' | 'small' | 'medium' | 'large'
}

export const ButtonWithType = (props: ButtonPropsOverride) => {
    const { type, ...rest } = props
    return <Space>
        <Button type={props.type} color="primary" {...rest} onClick={() => {
            console.log(11111)
        }}>Primary</Button>
        <Button type={props.type} color="secondary" {...rest}>Secondary</Button>
        <Button type={props.type} color="success" {...rest}>Success</Button>
        <Button type={props.type} color="error" {...rest}>Error</Button>
        <Button type={props.type} color="info" {...rest}>Info</Button>
        <Button type={props.type} color="warning" {...rest}>Warning</Button>
        <Button type={props.type} disabled {...rest} onClick={() => {
            console.log(2222)
        }}>Disabled</Button>
    </Space>
}