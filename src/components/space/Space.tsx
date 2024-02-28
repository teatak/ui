import React from 'react';
import classnames from 'classnames'
import Styled from './styled'
import { SpaceProps } from './interface';

export const Space = (props: SpaceProps) => {
    const {
        direction = 'horizontal',
        size = 'small',
        align,
        className,
        itemClassName,
        style,
        ...rest
    } = props

    const prefixClass = 'tui_space'

    const _align = align === undefined && direction === 'horizontal' ? 'center' : align;

    const classNames = classnames(
        prefixClass,
        `${prefixClass}-direction-${direction}`,
        `${prefixClass}-size-${size}`,
        {
            [`${prefixClass}-align-${_align}`]: _align,
        },
        className
    );
    const itemClassNames = classnames(
        `${prefixClass}-item`,
        itemClassName,
    )
    return <Styled $prefixClass={prefixClass} className={classNames} style={style} {...rest}>
        {React.Children.map(props.children, (item, index) => {
            return (
                <div key={index} className={itemClassNames}>
                    {item}
                </div>
            )
        })}
    </Styled>
}