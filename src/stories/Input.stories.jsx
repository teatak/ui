import React, { useRef } from 'react'
import { Input } from '../components'

const InputWrap = (props) => {
    const inputRef = useRef(null)
    return <>
        <Input {...props} ref={inputRef}></Input>
        <button onClick={() => {
            inputRef.current.focus()
        }}>click</button>
    </>
}

export default {
    title: 'Components/Input',
    component: InputWrap,
    parameters: {
    },
    tags: ['autodocs'],
    argTypes: {
    },
}

export const Simple = {
    args: {
    }
}
