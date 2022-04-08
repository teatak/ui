import React from 'react'
import { Input, Row, Col } from "../../../src";
import "../../../src/input/style";
import "../../../src/row/style";
import "../../../src/col/style";

import {
    Delete,
    PhotoCamera,
    AddCircle,
    VisibilityOutlined,
} from '@mui/icons-material';
import Markdown from "../../components/markdown"
import "./index.css"

import EyeOff from "../icons/eyeoff.svg"

export default () => {

    const [showPassword, setShowPassword] = React.useState(false);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return <div className="">
        <h1>Input</h1>
        <h2>size</h2>
        <div className="examples">
            <Row gap="16px">
                <Col xs="24" sm="12" lg="6">
                    <Input startIcon={<PhotoCamera />} size="large" placeholder="Name"></Input>
                </Col>
                <Col xs="24" sm="12" lg="6">
                    <Input placeholder="Name"></Input>
                </Col>
                <Col xs="24" sm="12" lg="6">
                    <Input endIcon={<Delete />} size="small" placeholder="Name" ></Input>
                </Col>
                <Col xs="24" sm="12" lg="6">
                    <Input endIcon={<Delete />} size="tiny" placeholder="Name" ></Input>
                </Col>
                <Col xs="24" sm="12" lg="6">
                    <Input
                        size="large"
                        placeholder="Password"
                        type={showPassword ? "text" : "password"}
                        defaultValue="Password"
                        endIcon={
                            <a onClick={handleShowPassword}>{
                                showPassword ? <VisibilityOutlined /> : <EyeOff />
                            }</a>
                        }>
                    </Input>
                </Col>
                <Col span="24">
                    <Input placeholder="Name" endIcon={<Delete />} disabled></Input>
                </Col>
            </Row>
        </div>

        <Markdown children={`
> size: 'large', 'medium', 'small'
\`\`\`javascript
import React from "react";
import { Button, Row, Col} from "@teatak/ui";
import {
    Delete,
    PhotoCamera,
    AddCircle,
    VisibilityOutlined,
} from '@mui/icons-material';
export default () => {

    const [showPassword, setShowPassword] = React.useState(false);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return <div className="examples">
        <Row gap="16px">
            <Col xs="24" sm="12" lg="6">
                <Input startIcon={<PhotoCamera />} size="large" placeholder="Name"></Input>
            </Col>
            <Col xs="24" sm="12" lg="6">
                <Input endIcon={<Delete />} placeholder="Name"></Input>
            </Col>
            <Col xs="24" sm="12" lg="6">
                <Input startIcon={<AddCircle />} endIcon={<Delete />} size="small" placeholder="Name" ></Input>
            </Col>
            <Col xs="24" sm="12" lg="6">
                <Input
                    placeholder="Password"
                    type={showPassword ? "text" : "password"}
                    defaultValue="Password"
                    endIcon={
                        <a onClick={handleShowPassword}>{
                            showPassword ? <VisibilityOutlined /> : <EyeOff />
                        }</a>
                    }>
                </Input>
            </Col>
            <Col span="24">
                <Input placeholder="Name" endIcon={<Delete />} disabled></Input>
            </Col>
        </Row>
    </div>
}
\`\`\`
        `} />

        <Markdown children={`
## API

| Property  | Description | Type | Default |
| --------- | ------- | ------- | ------- |
| type      | PropTypes.oneOf(['text', 'password']) | string | text |
| size      | PropTypes.oneOf(['large', 'medium', 'small', 'tiny']) | string | medium |
| disabled  | disabled state of input	 | boolean | false |
        `} />
    </div>
}