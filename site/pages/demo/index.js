import React, { useState } from "react"
import { Check, Button, Space, Row, Col } from '../../../src'
import '../../../src/check/style'
import '../../../src/button/style'
import '../../../src/space/style'
import '../../../src/row/style'
import '../../../src/col/style'
import { useNotification } from '../../../src'
import '../../../src/notification/style'

const CheckGroup = Check.Group

export default () => {
    const [checked, setChecked] = useState(false)
    const [notification] = useNotification()
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
        <h1>Demo</h1>
        <div className="examples">
            <Row gap={[8, 16]}>
                <Col span="24">
                    <Space>
                        <Button
                            onClick={() => {
                                notification.info({
                                    position: 'top',
                                    content: 'This is an info message!',
                                    closeable: true,
                                });
                            }}
                            type='filled'
                        >
                            top
                        </Button>
                        <Button
                            color="warning"
                            onClick={() => {
                                notification.warning({
                                    position: 'bottom',
                                    content: 'This is an info message!'
                                });
                            }}
                            type='filled'
                        >
                            bottom
                        </Button>
                        <Button
                            color="success"
                            onClick={() => {
                                notification.success({
                                    position: 'topLeft',
                                    content: 'This is an info message!'
                                });
                            }}
                            type='filled'
                        >
                            top left
                        </Button>
                        <Button
                            color="error"
                            onClick={() => {
                                notification.error({
                                    position: 'topRight',
                                    content: 'This is an info message!'
                                });
                            }}
                            type='filled'
                        >
                            top right
                        </Button>
                        <Button
                            onClick={() => {
                                notification.info({
                                    closeable: true,
                                    duration: 0,
                                    showIcon: false,
                                    position: 'bottomLeft',
                                    content: 'This is an info message!'
                                });
                            }}
                            type='filled'
                        >
                            bottom left
                        </Button>
                        <Button
                            onClick={() => {
                                notification.info({
                                    position: 'bottomRight',
                                    content: 'This is an info message!',
                                    actions: <Space>
                                        <Button size="tiny" onClick={(e) => {
                                            console.log("clicked")
                                        }}>click me</Button>
                                    </Space>
                                });
                            }}
                            type='filled'
                        >
                            bottom right
                        </Button>
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