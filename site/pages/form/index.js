import React, { useState } from 'react'
import { Input, Button, Form, Space, Select, Check, Row, Col } from "../../../src";
import "../../../src/input/style";
import "../../../src/select/style";
import "../../../src/button/style";
import "../../../src/check/style";
import "../../../src/form/style";
import "../../../src/space/style";
import "../../../src/row/style";
import "../../../src/col/style";

const CheckGroup = Check.Group

import {
    Delete,
    PhotoCamera,
    AddCircle,
    Visibility,
    VisibilityOff,
    SettingsPhone
} from '@mui/icons-material';
import Markdown from "../../components/markdown"
import "./index.css"

export default () => {

    const onSubmit = (e, errors, values) => {
        console.log(errors, values)
    };

    const [value, setValue] = useState(undefined)
    const [layout, setLayout] = useState("horizontal")
    const [size, setSize] = useState("medium")

    const [tip, setTip] = useState("")
    const [hasError, setHasError] = useState(false)


    function randomString(length) {
        var str = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var result = '';
        for (var i = length; i > 0; --i)
            result += str[Math.floor(Math.random() * str.length)];
        return result;
    }

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

    return <div>
        <h1>Form</h1>
        <h2>Submit</h2>
        <div className="examples">
            <Form
                layout={layout}
                size={size}
                onSubmit={onSubmit}
                // requiredSymbol={false}
                style={{ maxWidth: 600 }}
            >
                <Form.Item
                    label="Layout"
                >
                    <Space>
                        <Button type="outlined" onClick={() => {
                            setLayout("horizontal")
                        }} disabled={layout === "horizontal"}>horizontal</Button>
                        <Button type="outlined" onClick={() => {
                            setLayout("vertical")
                        }} disabled={layout === "vertical"}>vertical</Button>
                        <Button type="outlined" onClick={() => {
                            setLayout("inline")
                        }} disabled={layout === "inline"}>inline</Button>
                    </Space>
                </Form.Item>
                <Form.Item
                    label="Name"
                    field="name"
                    rules={[
                        { required: true, message: '请输入用户名!' },
                        { type: 'string', message: '请输入5-20位有效的用户名!', pattern: /^.{5,20}$/ },
                    ]}
                >
                    <Input defaultValue={value} style={{ width: "100%" }} />
                </Form.Item>
                <Form.Item
                    label="Password"
                    field="password"
                    rules={[
                        { required: true, message: '请输入密码!' },
                        { type: 'string', message: '请输入密码5-20位!', pattern: /^.{5,20}$/ },
                    ]}
                >
                    <Input type="password" style={{ width: "100%" }} />
                </Form.Item>
                <Form.Item
                    label="City"
                    htmlFor="city"
                    tip={tip}
                    hasError={hasError}
                    rules={[
                        { required: true },
                    ]}
                >
                    <Space>
                        <Form.Item
                            noStyle
                            field="city"
                            rules={[
                                { required: true, message: '请输入城市!' },
                            ]}
                            showErrorTip={(hasError, tip) => {
                                setHasError(hasError)
                                setTip(tip)
                            }}
                        >
                            <Select defaultValue={["beijing"]} multi >
                                <Select.Option value="beijing"  >Beijing</Select.Option>
                                <Select.Option value="shanghai"  >Shanghai</Select.Option>
                                <Select.Option value="shenzhen"  >Shenzhen</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            noStyle
                            field="cityName"
                        >
                            <Input defaultValue={value} style={{ width: "100%" }} />
                        </Form.Item>
                    </Space>
                </Form.Item>
                <Form.Item
                    label="Option"
                    field="option"
                    rules={[
                        { required: true, message: '请最少选一项!' },
                    ]}
                >
                    <CheckGroup
                        onChange={(newValue) => {
                            console.log(newValue)
                        }}
                        defaultValue={["1"]}
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
                    </CheckGroup>
                </Form.Item>
                <Form.Item
                    label="Check"
                    field="check"
                    triggerPropName='checked'
                    rules={[
                        { required: true },
                        {
                            validator: (_, value) =>
                                value ? Promise.resolve() : Promise.reject(new Error('请勾选我同意协议')),
                        },
                    ]}
                >
                    <Check defaultChecked={true}
                    >我同意协议<a href='#'>协议</a></Check>
                </Form.Item>
                <Form.Item>
                    <Space>
                        <Button
                            color="primary"
                            type="filled"
                            htmlType="submit"
                        >Submit</Button>
                        <Button
                            color="primary"
                            type="outlined"
                            onClick={() => {
                                setValue(randomString(5))
                            }}
                        >Fill</Button>
                    </Space>

                </Form.Item>
            </Form>
        </div>
        <Markdown children={`
> color: primary,danger
\`\`\`javascript
import React from "react";
import {Button} from "@teatak/ui";
import {
    Delete,
    PhotoCamera,
    AddCircle
} from '@material-ui/icons';

export default () => <div className="examples">
    <div>default:</div>
</div>    
\`\`\`
        `} />

        <Markdown children={`
## API

### Form

| Property  | Description | Type | Default |
| --------- | ------- | ------- | ------- |
| layout    | PropTypes.oneOf(['horizontal', 'vertical', 'inline']) | string | horizontal |
| size      | PropTypes.oneOf(['large', 'medium', 'small', 'tiny']) | string | medium |
| labelAlign | PropTypes.oneOf(['left', 'right', 'center']) | string | right |
| requiredSymbol | show * | boolean | true |
| labelCol   | label col config   | object | { span: 5 } |
| wrapperCol | wrapper col config | object | { span: 19 } |

### Form.Item

| Property  | Description | Type | Default |
| --------- | ------- | ------- | ------- |
| label | label name | string | - |
| field | field | string | - |
| showErrorTip | showErrorTip={(hasError, tip)} | (event) => void | - |
| htmlFor | html for | string | - |
| noStyle | no style | boolean | false |
| onChange | showErrorTip={(e, newValue)} | (event) => void | - |

        `} />
    </div>
}