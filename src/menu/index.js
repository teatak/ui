import React, { useMemo } from 'react'
import PropTypes from "prop-types"
import classnames from "classnames"
import MenuContext from './menu-context'
import { useMergeState } from "../util"
import SubMenu from './menu-submenu'
import Item from './menu-item'

const Menu = (props) => {
    const { style, direction, selectable, className, prefixClass, onClickMenuItem, onClickSubMenu, ...rest } = props

    const [selectedKeys, setSelectedKeys] = useMergeState([], {
        value: props.selectedKeys,
        defaultValue: props.defaultSelectedKeys,
    })

    const [openedKeys, setOpenedKeys] = useMergeState([], {
        value: props.openedKeys,
        defaultValue: props.defaultOpenedKeys,
    })

    const momeMenu = () => {
        return {
            selectedKeys: selectedKeys,
            openedKeys: openedKeys,
            onClickMenuItem: (key, e) => {
                selectable && setSelectedKeys([key])
                onClickMenuItem && onClickMenuItem(key, e)
            },
            onClickSubMenu: (key) => {
                let newOpenedKeys = [...openedKeys]

                if (openedKeys.indexOf(key) > -1) {
                    newOpenedKeys = openedKeys.filter((item) => item !== key)
                } else {
                    newOpenedKeys = openedKeys.concat([key])
                }

                setOpenedKeys(newOpenedKeys)
                onClickSubMenu && onClickSubMenu(key, newOpenedKeys)
            },
        }
    }

    const menu = useMemo(() => momeMenu(), [selectedKeys, openedKeys])

    const classNames = classnames(
        prefixClass,
        `${prefixClass}-${direction}`,
        className,
    )

    const classInnerNames = classnames(
        `${prefixClass}-inner`
    )

    const renderChildren = (children, props) => {
        return React.Children.map(children, (item, index) => {
            if (!item || !item.props) {
                return item
            }
            const isHTMLElement = typeof item.type === 'string'

            return isHTMLElement
                ? item
                : React.cloneElement(item, {
                    ...props,
                    ...item.props,
                    _key: item.key || `$menu-${index}`,
                })
        })
    }

    return <div className={classNames} style={style} >
        <MenuContext.Provider value={menu} >
            <ul className={classInnerNames} >{renderChildren(props.children)}</ul>
        </MenuContext.Provider>
    </div>
}

Menu.propTypes = {
    direction: PropTypes.oneOf(['vertical', 'horizontal']),
}

Menu.defaultProps = {
    prefixClass: "tui-menu",
    direction: "vertical",
    selectable: true,
}

Menu.SubMenu = SubMenu
Menu.Item = Item

export default Menu