import React from 'react'

const item = (props) => {
    return <li className={props.className}>{props.children}</li>
}

const menu = (props) => {
    return <ul className={props.className}>{props.children}</ul>
} 
menu.Item = item
export default menu