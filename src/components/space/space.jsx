import React, { forwardRef } from "react";
import PropTypes from 'prop-types';
import classnames from 'classnames'
import Styled from './styled'
import { withGlobalVariable } from '../../style'

const Space = withGlobalVariable(forwardRef((props, ref) => {
    const {
        prefixClass,
        direction,
        size,
        align,
        className,
        itemClassName,
        style,
        ...rest
    } = props

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
}))

Space.propTypes = {
    prefixClass: PropTypes.string,
    direction: PropTypes.oneOf(['horizontal', 'vertical']), //方向
    size: PropTypes.oneOf(['mini', 'small', 'medium', 'large']), //大小
    align: PropTypes.oneOf(['center', 'start', 'end', 'baseline', 'stretch']), //对齐方式
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element),
    ])
}

Space.defaultProps = {
    prefixClass: 'tui-space',
    direction: 'horizontal',
    size: 'small',
}

export default Space