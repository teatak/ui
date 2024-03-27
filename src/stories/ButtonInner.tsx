import React from 'react';
import { Grid, Button, ButtonProps } from '../components';
import { SettingsRounded as Home } from '@teatak/icons';

export const ButtonInner = (props: ButtonProps) => {
    const [start, setStart] = React.useState<any>(null)
    const { variant, ...rest } = props
    return <Grid spacing={4}>
        <Button startDecorator={start} variant={variant} color='primary' {...rest} onClick={() => {
            if (start) {
                setStart(null)
            } else {
                setStart(<Home />)
            }
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