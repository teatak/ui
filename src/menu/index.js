import React, { useMemo } from 'react'
import PropTypes from "prop-types"
import classnames from "classnames"
import Item from './menu-item'
import MenuContext from './menu-context'
import { useMergeState } from "../util"

const Menu = (props) => {
    const { style, direction, className, prefixClass, ...rest } = props;

    const [selectedKeys, setSelectedKeys] = useMergeState([], {
        value: props.selectedKeys,
        defaultValue: props.defaultSelectedKeys,
    })

    const momeMenu = () => {
        return {
            selectedKeys: selectedKeys,
        }
    }

    const menu = useMemo(() => momeMenu(), [props])

    const classNames = classnames(
        prefixClass,
        `${prefixClass}-${direction}`,
        className,
    )

    const renderChildren = (children, props) => {
        return React.Children.map(children, (item, index) => {
            if (!item || !item.props) {
                return item;
            }
            const isHTMLElement = typeof item.type === 'string';

            return isHTMLElement
                ? item
                : React.cloneElement(item, {
                    ...props,
                    ...item.props,
                    _key: item.key || `$menu-${index}`,
                });
        })
    }

    return <MenuContext.Provider value={menu} >
        <ul className={classNames} style={style}>{renderChildren(props.children)}</ul>
    </MenuContext.Provider>
}

Menu.propTypes = {
    direction: PropTypes.oneOf(['vertical', 'horizontal']),
};

Menu.defaultProps = {
    prefixClass: "tui-menu",
    direction: "vertical",
};

Menu.Item = Item
export default Menu