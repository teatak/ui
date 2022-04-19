import React, { useState, useRef, useContext } from 'react'
import classnames from 'classnames'
import KeyboardArrowRight from '../svg/icons/KeyboardArrowRight'
import MenuContext from './menu-context'
import { CSSTransition } from 'react-transition-group';

const SubMenu = (props) => {
    const { prefixClass, _key, className, title, style, children } = props
    const timeout = 225

    const subMenuRef = useRef()
    const menuContext = useContext(MenuContext)

    const isOpened = menuContext.openedKeys?.indexOf(_key) > -1;
    const [height, setHeight] = useState(isOpened ? 'auto' : 0);

    // useComponentWillMount(() => {
    //     let temp = false
    //     if (menuContext.openedKeys) {
    //         if (menuContext.openedKeys.indexOf(_key) > -1) {
    //             temp = true
    //         }
    //     }
    //     React.Children.map(children, (item, index) => {
    //         if (menuContext.selectedKeys.indexOf(item.key) > -1) {
    //             temp = true
    //         }
    //     })
    //     //return temp
    //     initOpened = temp
    // });
    // const initOpen = () => {
    //     let temp = false
    //     if (menuContext.openedKeys) {
    //         if (menuContext.openedKeys.indexOf(_key) > -1) {
    //             temp = true
    //         }
    //     }
    //     React.Children.map(children, (item, index) => {
    //         if (menuContext.selectedKeys.indexOf(item.key) > -1) {
    //             temp = true
    //         }
    //     })
    //     return temp
    // }
    // const initOpened = initOpen()//useMemo(() => initOpen(), [menuContext.selectedKeys])
    // const [subMenuVisible, setSubMenuVisible] = useState(initOpened)

    // useEffect(() => {
    //     // setSubMenuVisible(initOpened)
    // }, [menuContext.selectedKeys])

    const classNames = classnames(
        prefixClass,
        {
            [`${prefixClass}-opened`]: isOpened,
        },
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
                })
        })
    }

    return <li className={classNames} style={style}>
        <div className={`${prefixClass}-title`} onClick={(e) => {
            //setSubMenuVisible(!subMenuVisible)
            menuContext.onClickSubMenu(_key)
        }}>
            {title}
            <KeyboardArrowRight className={`${prefixClass}-title-suffix`} />
        </div>
        <CSSTransition
            in={isOpened}
            timeout={timeout}
            classNames={`${prefixClass}-inner`}
            onEnter={(e) => {
                setHeight(0)
            }}
            onEntering={(e) => {
                setHeight(e.scrollHeight)
            }}
            onEntered={(e) => {
                setHeight('auto');
            }}
            onExit={(e) => {
                setHeight(e.scrollHeight)
                e.style.height = `${e.scrollHeight}px`;
            }}
            onExiting={(e) => {
                setHeight(0)
            }}
            onExited={(e) => {
                setHeight(0)
            }}
        >
            <ul ref={subMenuRef} style={{ height }} className={`${prefixClass}-inner`}>
                {renderChildren(children)}
            </ul>
        </CSSTransition>
    </li>
}

SubMenu.defaultProps = {
    prefixClass: "tui-menu-submenu",
};

export default SubMenu