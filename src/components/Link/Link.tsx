import React, { forwardRef, useContext } from 'react'
import classnames from 'classnames'
import styled, { css } from 'styled-components'
import theme, { mergeStyleOverrides, ColorTone, ColorVariant } from '@/style'
import { LinkProps, LinkOptionsProps } from './Link.types'
import { ControlContext } from '../Control';
import { mergeProps } from '@/helper/common';

const StyledComponent = (props: any) => {
    const { component: Component, ...rest } = props
    return <Component {...rest} />
}

const StyledLink = styled(StyledComponent) <{ $options: LinkOptionsProps }>`
    ${props => {
        const options = props.$options
        const { prefixClass: _, color, size } = options

        let baseSize = 8
        let textFontSize = 14
        let iconFontSize = 12
        switch (size) {
            case 'xs':
                baseSize = 6
                textFontSize = 11
                iconFontSize = baseSize * 2
                break
            case 'sm':
                baseSize = 7
                textFontSize = 12
                iconFontSize = baseSize * 2
                break
            case 'md':
                baseSize = 8
                textFontSize = 14
                iconFontSize = baseSize * 2
                break
            case 'lg':
                baseSize = 9
                textFontSize = 14
                iconFontSize = baseSize * 2
                break
            case 'xl':
                baseSize = 10
                textFontSize = 16
                iconFontSize = baseSize * 2
                break
        }
        //按照尺寸定义变量
        let palette = theme.vars.palette[color!] as ColorTone & ColorVariant
        if (palette === undefined) {
            palette = theme.vars.palette.primary
        }

        const foreColor = palette.main
        const hoverColor = palette.dark
        return css`
            --Link-baseSize: ${baseSize};
            --Icon-fontSize: ${iconFontSize};
            --Text-fontSize: ${textFontSize};
            color: ${foreColor};
            text-decoration: none;
            outline-offset:2px;
            outline-color:${foreColor};
            outline-width: 0px;
            outline-style: solid;
            border-radius: var(--Link-radius, ${theme.vars.radius.sm});
            font-family: var(--Link-fontFamily, ${theme.vars.fontFamily.body});
            font-size: calc(var(--Text-fontSize) * 1px);
            line-height: ${theme.vars.lineHeight.md};
            transition: 
                opacity 150ms ease 0ms,
                outline-width 250ms cubic-bezier(0, 0, 0, 3) 0ms;
         
            &.${_}-disabled {
                opacity: 0.5;
                pointer-events: none;
                cursor: not-allowed;
            }
            &:hover, &:active {
                color: ${hoverColor};;
            }
            &:focus-visible {
                outline-width: 2px;
            }
        `
    }}
    ${props => {
        return mergeStyleOverrides('TuiLink', props.$options)
    }}
`

const Link = forwardRef<HTMLLinkElement, LinkProps>((inProps, ref) => {
    const ctx = useContext(ControlContext)
    const props = mergeProps(ctx, inProps, {
        prefixClass: 'tui-link',
    }) as LinkProps

    const {
        prefixClass,
        className,
        disabled,
        onClick,
        component = 'a',
        ...rest
    } = props

    const classNames = classnames(
        prefixClass,
        {
            [`${prefixClass}-disabled`]: disabled,
        },
        className,
    )
    const handleClick = (e: any) => {
        if (disabled) {
            e.preventDefault();
            e.stopPropagation();
        } else {
            onClick && onClick(e);
        }
    }

    return <StyledLink
        component={component}
        $options={props}
        className={classNames}
        onClick={handleClick}
        {...rest} />
})
export default Link