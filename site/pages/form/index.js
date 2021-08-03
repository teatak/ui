import React from 'react'
import {Input} from "../../../src";
import "../../../src/input/style";

import {Button} from "../../../src";
import "../../../src/button/style";

import {Form} from "../../../src";
import "../../../src/form/style";

import {
    Delete,
    PhotoCamera,
    AddCircle,
    Visibility,
    VisibilityOff
} from '@material-ui/icons';
import Markdown from "../../components/markdown"
import "./index.css"

export default () => {

    const onSubmit = (e, errors, values) => {
        e.preventDefault();
        console.log(e, errors, values);
    };
    return <div>
         <div className="examples">
            <div>default:</div>
            <Form onSubmit={onSubmit}>
                <Form.Item
                    name="name"
                    rules={[
                        {required: true, message: '请输入用户名!'},
                        {type: 'string', message: '请输入5-20位有效的用户名!', pattern: /^.{5,20}$/},
                    ]}
                >
                    <Input style={{width: "100%"}}/>
                </Form.Item>
                <Form.Item
                    name="name2"
                    rules={[
                        {required: true, message: '请输入用户名!'},
                        {type: 'string', message: '请输入5-20位有效的用户名!', pattern: /^.{5,20}$/},
                    ]}
                >
                    <input style={{width: "100%"}}/>
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {required: true, message: '请输入密码!'},
                        {type: 'string', message: '请输入密码5-20位!', pattern: /^.{5,20}$/},
                    ]}
                >
                    <Input type="password" style={{width: "100%"}}/>
                </Form.Item>
                <Form.Item
                    name="password2"
                    rules={[
                        {required: true, message: '请输入密码!'},
                        {type: 'string', message: '请输入密码5-20位!', pattern: /^.{5,20}$/},
                    ]}
                >
                    <Input type="password" disabled style={{width: "100%"}}/>
                </Form.Item>
                <Button
                    color="primary"
                    type="filled"
                    htmlType="submit"
                >Submit</Button>
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

| Property  | Description | Type | Default |
| --------- | ------- | ------- | ------- |
| type      | can be set to 'filled','outlined','default' | string | default |
| size      | can be set to small large or default | string | default |
| rounded   | rounded | boolean | false |
| disabled  | disabled state of button	 | boolean | false |
| htmlType  | htmlType | string | button |
| onClick   | set the handler to handle click event	| (event) => void | - |
        `} />
    </div>
}