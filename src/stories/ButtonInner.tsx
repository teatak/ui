import React from 'react';
import { Space, Button, ButtonProps } from '../components';

export const ButtonInner = (props: ButtonProps) => {
    const { type, ...rest } = props
    return <Space>
        <Button type={props.type} color='primary' {...rest} onClick={() => {
            console.log('clicked')
        }}>Primary</Button>
        <Button type={props.type} color='neutral' {...rest}>Neutral</Button>
        <Button type={props.type} color='success' {...rest}>Success</Button>
        <Button type={props.type} color='error' {...rest}>Error</Button>
        <Button type={props.type} color='warning' {...rest}>Warning</Button>
        <Button type={props.type} href='#' {...rest} >Link</Button>
        <Button type={props.type}  {...rest} disabled onClick={() => {
        }}>Disabled</Button>
        <Button type={props.type} color='primary' {...rest} loading  >Loading</Button>
        <Button type={props.type} color='neutral' {...rest} loading loadingPosition='end'>Loading end</Button>
        <Button type={props.type} color='success' {...rest} loading loadingPosition='center'>Center</Button>
    </Space>
}