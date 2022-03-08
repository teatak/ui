import React, { useRef, useState } from 'react'
import { Trigger, Button, Space } from "../../../src";
import "../../../src/trigger/style";
import "../../../src/button/style";
import "../../../src/space/style";

import Markdown from "../../components/markdown"
import "./index.css"
import {
    Delete,
} from '@mui/icons-material';


export default () => {
    const [visible, setVisible] = useState(false)
    return <div className="page">
        <h1>Trigger</h1>
        <h2>visible onVisibleChange</h2>
        <div className="examples">
            <Space>
                <Button type="outlined" onClick={(e) => {
                    e.stopPropagation()
                    setVisible(!visible)
                }}>click to trigger</Button>
                <Trigger
                    visible={visible}
                    position="topLeft"
                    content={<div>content</div>}
                    onVisibleChange={(v) => {
                        setVisible(v)
                    }}
                >
                    <Button rounded type="outlined">click</Button>
                </Trigger>
            </Space>
        </div>
        <Markdown children={`
\`\`\`javascript
export default () => {
    const [visible, setVisible] = useState(false)
    return <div className="page">
        <h1>Trigger</h1>
        <div className="examples">
            <Space>
                <Button type="outlined" onClick={(e) => {
                    e.stopPropagation()
                    setVisible(!visible)
                }}>click to trigger</Button>
                <Trigger
                    visible={visible}
                    content={<div>content</div>}
                    onVisibleChange={(v) => {
                        setVisible(v)
                    }}
                >
                    <Button type="outlined">click</Button>
                </Trigger>
            </Space>
        </div>
    </div>
}
\`\`\`
`} />
        <h2>tooltip</h2>
        <div className="examples">
            <Trigger
                tooltip
                content={<div>tooltip content on hover</div>}
            >
                <Button type="filled">hover</Button>
            </Trigger>
        </div>
        <Markdown children={`
## API

| Property  | Description | Type | Default |
| --------- | ------- | ------- | ------- |
| action           | PropTypes.oneOf(['click', 'hover']) | string | click |
| position         | PropTypes.oneOf(['top', 'topLeft', 'topRight', 'bottom', 'bottomLeft', 'bottomRight']) | string | bottom |
| autoFit          | auto fit | boolean | true |
| arrow            | show arrow | boolean | true |
| tooltip          | tooltip style | boolean | false |
| visible          | visible | boolean | false |
| defaultVisible   | defaultVisible | boolean | false |
| content          | pop content | element | - |
| transitionClass  | transition class suffix | string | fade |
| onVisibleChange  | call back | (visible: boolean) => void | - |

`} />
    </div >
}