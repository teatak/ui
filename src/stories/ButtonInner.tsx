import React from 'react';
import { Grid, Button, ButtonProps } from '../components';
import { _10K } from '@teatak/icons';
import { createSvg } from '../icons/Svg'

const Test = createSvg(
    <path fill="none" d="M0 0h24v24H0z" />,
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-8.5 12H9v-4.5H7.5V9h3zm7 0h-1.75L14 12.75V15h-1.5V9H14v2.25L15.75 9h1.75l-2.25 3z" />
);

export const ButtonInner = (props: ButtonProps) => {
    const [start, setStart] = React.useState<any>(null)
    const { variant, ...rest } = props
    return <Grid spacing={4}>
        <Test /><_10K />
        <Button startDecorator={start} variant={variant} color='primary' {...rest} onClick={() => {
            if (start) {
                setStart(null)
            } else {
                setStart(<_10K />)
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