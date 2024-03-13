import { createContext, Context } from 'react';
import { FormContextProps } from './interface';

export const FormContext = createContext<FormContextProps>({
    size: 'md',
    disabled: false,
})