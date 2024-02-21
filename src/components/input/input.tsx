import React, { forwardRef, useContext, useRef } from "react";
import classnames from 'classnames'
import { FormContext } from "../form/context"
import { InputProps } from "./interface";
import { withGlobalVariable } from '../../style'
import Styled from './styled'

export const Input = withGlobalVariable(forwardRef<HTMLInputElement, InputProps>((props: InputProps, ref: any) => {
    const prefixClass = "tui-input"
    const {
        style,
        className,
        type = 'filled',
        disabled,
        size,
        htmlType = "text",
        startIcon,
        endIcon,
        onChange,
        ...rest
    } = props

    const { size: ctxSize } = useContext(FormContext);
    const inputRef = ref || useRef<HTMLInputElement>(null)

    const classNamesRoot = classnames(
        `${prefixClass}-root`,
        `${prefixClass}-${type}`,
        `${prefixClass}-size-${size || ctxSize || "medium"}`,
        {
            [`${prefixClass}-disabled`]: disabled,
        },
        className,
    )

    const classNames = classnames(
        prefixClass,
        {
            [`${prefixClass}-has-start-icon`]: startIcon,
            [`${prefixClass}-has-end-icon`]: endIcon,
        }
    )
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e.target.value, e);
    };

    return (
        <Styled
            className={classNamesRoot}
            style={style}
            $prefixClass={prefixClass}
        >
            {startIcon ? <span className={prefixClass + "-start-icon"}>{startIcon}</span> : null}
            <input
                ref={inputRef}
                className={classNames}
                disabled={disabled}
                type={htmlType}
                onChange={handleChange}
                {...rest}
            >
            </input>
            {endIcon ? <span className={prefixClass + "-end-icon"}>{endIcon}</span> : null}
        </Styled>
    )
}))
