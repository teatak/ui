import React, { forwardRef, useContext } from "react";
import styled from "styled-components";
import classnames from 'classnames'
import { FormContext } from "../form/context"
import { InputProps } from "./interface";
import { withGlobalVariable } from '../../style'
import Styled from './styled'

export const Input = withGlobalVariable(forwardRef<HTMLButtonElement, InputProps>((props: InputProps, ref) => {
    const prefixClass = "tui-input"
    const {
        style,
        className,
        disabled,
        size,
        htmlType = "input",
        ...rest
    } = props

    let {
        startIcon,
        endIcon,
    } = props

    const { size: ctxSize } = useContext(FormContext);

    const classNamesRoot = classnames(
        `${prefixClass}-root`,
        `${prefixClass}-size-${size || ctxSize || "medium"}`,
        {
            [`${prefixClass}-disabled`]: disabled,
        }
    )

    const classNames = classnames(
        prefixClass,
        {
            [`${prefixClass}-has-start-icon`]: startIcon,
            [`${prefixClass}-has-end-icon`]: endIcon,
        },
        className,
    )

    return (
        <Styled
            className={classNamesRoot}
            style={style}
            $prefixClass={prefixClass}
        >
            <input
                style={style}
                className={classNames}
                disabled={disabled}
                {...rest}
            >
            </input>
        </Styled>
    )
}))
