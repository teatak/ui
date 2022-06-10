import React, { useState, useRef } from 'react'
import classnames from "classnames"

import { Menu, Trigger, Button } from "../"
import "../menu/style"
import "../trigger/style"
import "../button/style"

import DarkMode from '../svg/icons/DarkMode'
import LightMode from '../svg/icons/LightMode'
import ContrastAlt from '../svg/icons/ContrastAlt'

const ColorMode = (props) => {
    const willMount = useRef(true)
    if (willMount.current) {
        let colorMode = "auto";
        let darkMode = "dark";
        let lightMode = "light";
        if (window.localStorage) {
            let storage = window.localStorage;
            if (storage.COLOR_MODE != null) {
                colorMode = storage.COLOR_MODE
            }
        }
        document.documentElement.setAttribute("data-color-mode", colorMode)
        document.documentElement.setAttribute("data-light-theme", lightMode)
        document.documentElement.setAttribute("data-dark-theme", darkMode)
        const el = document.querySelector("meta[name='color-scheme']");
        if (el) {
            // <meta name="color-scheme" content="dark light">
            if (colorMode == "auto") {
                el.setAttribute('content', "light dark")
            }
            if (colorMode == "dark") {
                el.setAttribute('content', "dark light")
            }
        }
    }
    willMount.current = false

    return props.children
}

const ColorMenu = (props) => {

    const { prefixClass, className, fixed } = props

    const classNamesBtn = classnames(
        `${prefixClass}-btn`,
        className,
    )
    const [visible, setVisible] = React.useState(false);

    const [value, setValue] = useState(() => {
        let colorMode = "auto";
        if (window.localStorage) {
            let storage = window.localStorage;
            if (storage.COLOR_MODE != null) {
                colorMode = storage.COLOR_MODE
            }
        }
        return colorMode;
    });

    const saveVaule = (value) => {
        if (window.localStorage) {
            let storage = window.localStorage;
            storage.COLOR_MODE = value
        }
        document.documentElement.setAttribute("data-color-mode", value)
        const el = document.querySelector("meta[name='color-scheme']");
        if (el) {
            if (value == "auto") {
                el.setAttribute('content', "light dark")
            }
            if (value == "dark") {
                el.setAttribute('content', "dark light")
            }
        }
        setValue(value)
        setVisible(false)
    };


    const iconStyle = {
        marginRight: 8,
        fontSize: 16,
        transform: 'translateY(2px)'
    };

    const dropList = (value) => {
        return <Menu
            className={`${prefixClass}`}
            selectedKeys={[value]}
        >
            <Menu.Item key='auto' onClick={() => {
                saveVaule("auto")
            }}>
                <ContrastAlt style={iconStyle} />
                跟随系统
            </Menu.Item>
            <Menu.Item key='light' onClick={() => {
                saveVaule("light")
            }}>
                <LightMode style={iconStyle} />
                明亮模式
            </Menu.Item>
            <Menu.Item key='dark' onClick={() => {
                saveVaule("dark")
            }}>
                <DarkMode style={iconStyle} />
                暗黑模式
            </Menu.Item>
        </Menu>
    }

    const [options, setOptions] = useState(['auto', 'light', 'dark'])

    const text = (value) => {
        switch (value) {
            case "auto":
                return <ContrastAlt />
                break;
            case "light":
                return <LightMode />
                break;
            case "dark":
                return <DarkMode />
                break;
            default:
                return <ContrastAlt />
                break;
        }
    }

    return <>
        <Trigger
            showArrow
            action="hover"
            visible={visible}
            content={dropList(value)}
            onVisibleChange={(visible) => {
                setVisible(visible)
            }}
            className={`${prefixClass}-trigger`}
            position='topRight'
            transitionClass="slide"
            fixed={fixed}
        >
            <Button className={classNamesBtn} circle size='large'>
                {text(value)}
            </Button>
        </Trigger>
    </>
}

ColorMenu.defaultProps = {
    prefixClass: "tui-color-menu",
}

ColorMode.Menu = ColorMenu

export default ColorMode
export { ColorMenu }