import React, { useState } from 'react'
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
        document.body.setAttribute("data-color-mode", colorMode)
        document.body.setAttribute("data-light-theme", lightMode)
        document.body.setAttribute("data-dark-theme", darkMode)
        const el = document.querySelector("meta[name='color-scheme']");
        if (colorMode == "auto") {
            el.setAttribute('content', "light dark")
        }
        if (colorMode == "dark") {
            el.setAttribute('content', "dark light")
        }
    }
    willMount.current = false

    return <>{props.children}</>
}

const ColorMenu = (props) => {
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
        setVisible(false)
        if (window.localStorage) {
            let storage = window.localStorage;
            storage.COLOR_MODE = value
        }
        document.body.setAttribute("data-color-mode", value)
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
    };


    const iconStyle = {
        marginRight: 8,
        fontSize: 16,
        transform: 'translateY(2px)'
    };

    const dropList = (value) => {
        return <Menu
            className="color-switch-menu"
        // selectedKeys={[value]}
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

    const text = (value) => {
        switch (value) {
            case "auto":
                return <ContrastAlt className="arco-icon" />
                break;
            case "light":
                return <LightMode />
                break;
            case "dark":
                return <DarkMode />
                break;
            default:
                return <ContrastAlt className="arco-icon" />
                break;
        }
    }

    return <Trigger
        showArrow
        action="hover"
        popupVisible={visible}
        content={dropList(value)}
        onVisibleChange={(visible) => {
            setVisible(visible)
        }}
        position='topRight'
    >
        <Button className="btn-colormode" circle size='large'>
            {text(value)}
        </Button>
    </Trigger>
}

export default ColorMenu