import React, { useState } from "react"
import Markdown from '../../components/markdown'
import { Delete, PhotoCamera, AddCircle } from '@mui/icons-material'
import { Check, Button, Space, Row, Col } from '../../../src'
import '../../../src/check/style'
import '../../../src/button/style'
import '../../../src/space/style'
import '../../../src/row/style'
import '../../../src/col/style'

export default () => {
    const [checked, setChecked] = useState(false)
    const options = [
        {
            label: 'Option 1',
            value: '1',
        },
        {
            label: 'Option 2',
            value: '2',
            disabled: true,
        },
        {
            label: 'Option 3',
            value: '3',
        },
        {
            label: 'Option 4',
            value: '4',
        },
    ];
    return <div className="">
        <h1>Check</h1>
        <h2>自定义</h2>
        <div className="examples">
            <Space>
                <Check checked={checked}>选择</Check>
                <Check checked={checked}>
                    {(checked, indeterminate) => {
                        return checked ?
                            <div style={{ background: "#d0d0d0", padding: "10px" }}><Delete /></div> :
                            <div style={{ padding: "10px" }}><Delete /></div>
                    }}
                </Check>
                <Button onClick={(e) => {
                    setChecked(!checked)
                }} type="outlined" >点击选择</Button>
            </Space>
        </div>
        <Markdown
            children={`
\`\`\`javascript
export default () => {
    const [checked, setChecked] = useState(false)
    return <div className="examples">
        <Space>
            <Check checked={checked}>选择</Check>
            <Check checked={checked}>
                {(checked, indeterminate) => {
                    return checked ?
                        <div style={{ background: "#d0d0d0", padding: "10px" }}><Delete /></div> :
                        <div style={{ padding: "10px" }}><Delete /></div>
                }}
            </Check>
            <Button onClick={(e) => {
                setChecked(!checked)
            }} type="outlined" >点击选择</Button>
        </Space>
    </div>    
}  
\`\`\`
`}
        />
        <h2>Indeterminate</h2>
        <div className="examples">
            <Space>
                <Check indeterminate>选择</Check>
            </Space>
        </div>
        <Markdown
            children={`
\`\`\`javascript
export default () => {
    return <div className="examples">
        <Space>
            <Check indeterminate>选择</Check>
        </Space>
    </div>    
}  
\`\`\`
`}
        />
        <h2>Group</h2>
        <div className="examples">
            <Check.Group
                checkAll="全选"
                onChange={(newValue) => {
                    console.log(newValue)
                }}
                defaultValue={["2"]}
            >
                <Row gap={[8, 8]}>
                    {options.map((option) => {
                        const label = option.label
                        const checkValue = option.value
                        return (
                            <Col span={6} key={checkValue}>
                                <Check
                                    disabled={option.disabled}
                                    value={checkValue}
                                >
                                    {label}
                                </Check>
                            </Col>
                        );
                    })}
                </Row>
            </Check.Group>
        </div>
        <Markdown
            children={`
\`\`\`javascript
export default () => {
    const options = [
        {
            label: 'Option 1',
            value: '1',
        },
        {
            label: 'Option 2',
            value: '2',
            disabled: true,
        },
        {
            label: 'Option 3',
            value: '3',
        },
        {
            label: 'Option 4',
            value: '4',
        },
    ];
    return <div className="examples">
        <Space>
            <Check.Group
                checkAll="全选"
                onChange={(newValue) => {
                    console.log(newValue)
                }}
                defaultValue={["2"]}
            >
                <Row gap={[8, 8]}>
                    {options.map((option) => {
                        const label = option.label
                        const checkValue = option.value
                        return (
                            <Col span={6} key={checkValue}>
                                <Check
                                    disabled={option.disabled}
                                    value={checkValue}
                                >
                                    {label}
                                </Check>
                            </Col>
                        );
                    })}
                </Row>
            </Check.Group>         
        </Space>
    </div>    
}  
\`\`\`
`}
        />

        <Markdown children={`
## API

### Check

| Property  | Description | Type | Default |
| --------- | ------- | ------- | ------- |
| checked   | checked | boolean | - |
| defaultChecked | defaultChecked | boolean | - |
| indeterminate  | indeterminate | boolean | - |
| value     | value | string | - |

### Check.Group

| Property  | Description | Type | Default |
| --------- | ------- | ------- | ------- |
| direction | direction | 'horizontal', 'vertical' | horizontal |
| options   | options | array,{value,label,disabled} | - |
| value     | value   | [] | - |
        `} />
    </div >
}