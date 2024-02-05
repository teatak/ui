import React from 'react';
import { Space, Button } from '../components';

export interface ButtonPropsOverride {
    type?: 'filled' | 'outlined' | 'standard'
    long?: boolean
    rounded?: boolean
    size?: 'tiny' | 'small' | 'medium' | 'large'
}

export const ButtonWithType = (props: ButtonPropsOverride) => {
    const { type, ...rest } = props
    return <Space>
        <Button type={props.type} color="primary" {...rest}>Primary</Button>
        <Button type={props.type} color="secondary" {...rest}>Secondary</Button>
        <Button type={props.type} color="success" {...rest}>Success</Button>
        <Button type={props.type} color="error" {...rest}>Error</Button>
        <Button type={props.type} color="info" {...rest}>Info</Button>
        <Button type={props.type} color="warning" {...rest}>Warning</Button>
        <Button type={props.type}>Disabled</Button>
    </Space>
}