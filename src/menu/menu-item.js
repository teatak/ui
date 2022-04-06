import React, { useContext } from 'react'
import classnames from 'classnames'
import MenuContext from './menu-context'

const Item = (props) => {
    const { style, _key, className, prefixClass, ...rest } = props;
    const classNameString = className ? className : ""

    const menuContext = useContext(MenuContext)
    let selected = false
    if (menuContext.selectedKeys) {
        if (menuContext.selectedKeys.indexOf(_key) > -1) {
            selected = true
        }
    }
    const classNames = classnames(
        prefixClass,
        {
            [`${prefixClass}-selected`]: selected,
        },
        className,
    )
    return <li className={classNames} style={style} {...rest} >{props.children}</li>
}

Item.defaultProps = {
    prefixClass: "tui-menu-item",
};

export default Item