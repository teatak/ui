import React from 'react';
import { Grid, Button, ButtonProps } from '../components';
import { _10K } from '@teatak/icons';

export const ButtonInner = (props: ButtonProps) => {
    const { variant, ...rest } = props
    return <Grid spacing={4}>
        <Button startDecorator={<_10K />} variant={variant} color='primary' {...rest} onClick={() => {
            console.log('clicked')
        }}>Primary</Button>
        <Button variant={variant} color='neutral' {...rest}>Neutral</Button>
        <Button variant={variant} color='success' {...rest}>Success</Button>
        <Button variant={variant} color='danger' {...rest}>Error</Button>
        <Button variant={variant} color='warning' {...rest}>Warning</Button>
        <Button variant={variant} href='#' {...rest} >Link</Button>
        <Button variant={variant}  {...rest} disabled onClick={() => {
        }}>Disabled</Button>
        <Button variant={variant} color='primary' {...rest} loading  >Loading</Button>
        <Button variant={variant} color='neutral' {...rest} loading loadingPosition='end'>Loading end</Button>
        <Button variant={variant} color='success' {...rest} loading loadingPosition='center'>Center</Button>
    </Grid>
}