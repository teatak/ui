import React, { useState } from "react"
import { Check, Button, Space, Row, Col } from '../../../src'
import '../../../src/check/style'
import '../../../src/button/style'
import '../../../src/space/style'
import '../../../src/row/style'
import '../../../src/col/style'

const CheckGroup = Check.Group

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

    return <div className="page">
        <h1>Demo</h1>
        <div className="examples">
            <Row gap={[8, 16]}>
                <Col span="24">
                    <Space>
                        <Check checked={checked}>选择</Check>
                        <Check checked={checked}>
                            {(checked, indeterminate) => {
                                return checked ? "自定义已选择" : "自定义未选择"
                            }}
                        </Check>
                    </Space>
                </Col>
                <Col span="24">
                    <Button onClick={(e) => {
                        setChecked(!checked)
                    }} type="outlined" >点击选择</Button>
                </Col>
                <Col span="24">
                    <Check indeterminate>选择</Check>
                </Col>
                <Col span="24">
                    <CheckGroup
                        // direction="vertical"
                        options={options}
                        onChange={(newValue) => {
                            console.log(newValue)
                        }}
                        defaultValue={["1"]}
                    />
                </Col>
            </Row>
        </div>
    </div >
}