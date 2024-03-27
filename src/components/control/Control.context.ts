import React from 'react';
import { ControlContextValue } from './Control.types'

const ControlContext = React.createContext<ControlContextValue>({
    size: 'md',
    disabled: false,
})

export default ControlContext;