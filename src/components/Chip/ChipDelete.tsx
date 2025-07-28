import React, { forwardRef, useRef, useImperativeHandle, useEffect, useState } from 'react'
import { ChipProps } from './Chip.types'
import { StyledChipDelete } from './Chip.styled';

import classnames from 'classnames'

const ChipDelete = forwardRef<HTMLButtonElement, ChipProps>((props, ref) => {
    const {
        style,
        prefixClass = "tui-chip-delete",
        className,
        children,
        onClick,
        disabled,
        ...rest
    } = props
    const buttonRef = useRef<HTMLButtonElement>(null)
    useImperativeHandle(ref, () => buttonRef.current!, [])
    const timerRef = useRef<null | NodeJS.Timeout>(null)
    useEffect(() => {
        return () => clearTimeout(timerRef.current as NodeJS.Timeout)
    }, [])
    const [clicked, setClicked] = useState(false)


    const classNames = classnames(
        `${prefixClass}-root`,
        {
            [`${prefixClass}-disabled`]: disabled,
            [`clicked`]: clicked,
        },
        className,
    )

    const handleClick: React.MouseEventHandler<HTMLElement> = (event: any): void => {
        if (disabled) {
            event.stopPropagation()
            event.preventDefault()
            return
        }
        onClick && onClick(event)
        if (onClick) {
            setClicked(true)
            if (timerRef) {
                timerRef.current = setTimeout(() => {
                    setClicked(false)
                }, 100)
            }
        }
    }
    const options = {
        ...props,
        prefixClass
    }
    return <StyledChipDelete style={style} className={classNames} $options={options}>
        <button type='button' className={prefixClass + '-element'} ref={buttonRef} disabled={disabled} onClick={handleClick} />
        <span className={prefixClass + '-span'} >{children}</span>
    </StyledChipDelete>
})

export default ChipDelete