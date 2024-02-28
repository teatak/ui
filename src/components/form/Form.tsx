import React, { forwardRef, useMemo, useContext } from 'react';
import classnames from 'classnames'
import { FormProps } from './interface'
import { FormContext } from './context'
import Styled from './styled'

export const Form = forwardRef<HTMLFormElement, FormProps>((props: FormProps, ref) => {
    const prefixClass = 'tui-form'
    const {
        style,
        size = 'medium',
        layout = 'horizontal',
        className,
        disabled,
        onSubmit,
        children,
        ...rest
    } = props
    const momeForm = () => {
        return {
            size: size,
            disabled: disabled,
        }
    }
    const classNames = classnames(
        prefixClass,
        `${prefixClass}-size-${size}`,
        `${prefixClass}-layout-${layout}`,
        className,
    )

    const form = useMemo(() => momeForm(), [props])

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e: any): void => {
        e.preventDefault()
        e.stopPropagation()
        if (onSubmit) {

        }
        //onSubmit && onSubmit({}, e)
    };

    return <FormContext.Provider value={form}>
        <Styled $prefixClass={prefixClass} className={classNames} style={style} onSubmit={handleSubmit} {...rest}>
            {children}
        </Styled>
    </FormContext.Provider>
})