import React, { forwardRef } from 'react';
import { InputProps } from './interface';

const Input = forwardRef<HTMLButtonElement, InputProps>((props, ref) => {
    return <input />
})
export default Input