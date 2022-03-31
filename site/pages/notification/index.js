import React, { useState } from "react"
import Markdown from "../../components/markdown"

import { Button, Space } from '../../../src'
import '../../../src/button/style'
import '../../../src/space/style'

import { useNotification } from '../../../src'
import '../../../src/notification/style'

export default () => {
    const [notification, setConfig] = useNotification()
    setConfig({ maxCount: 20 })
    return <div className="page">
        <h1>Notification</h1>
        <div className="examples">
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
        </div>
        <Markdown children={`
\`\`\`javascript
export default () => {
    const [notification, setChecked] = useNotification()
    setChecked({ maxCount: 20 })
    return <div className="page">
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
    </div>
}
\`\`\`
        `} />
    </div>
}