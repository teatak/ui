import React from 'react';
import { Space, Button, ButtonProps } from '../components';

export interface ButtonPropsOverride {
    type?: 'text' | 'filled' | 'outlined'
    long?: boolean
    shape?: 'circle' | 'round' | 'square';
    loading?: boolean
    loadingPosition?: 'start' | 'end'
    size?: 'tiny' | 'small' | 'medium' | 'large'
}

export const ButtonWithType = (props: ButtonProps) => {
    const { type, ...rest } = props
    return <Space>
        <Button type={props.type} color="primary" loadingPosition="end" {...rest} onClick={() => {

        }}>Primary</Button>
        <Button type={props.type} color="secondary" {...rest}>Secondary</Button>
        <Button type={props.type} color="success" loadingPosition="start" {...rest}>Success</Button>
        <Button type={props.type} color="error" {...rest}>Error</Button>
        <Button type={props.type} color="info" {...rest}>Info</Button>
        <Button type={props.type} color="warning" {...rest}>Warning</Button>
        <Button type={props.type} href="#" {...rest} >Link</Button>
        <Button type={props.type}  {...rest} disabled onClick={() => {
        }}>Disabled</Button>
    </Space>
}