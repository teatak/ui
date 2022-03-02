import React from 'react'
import { Select, Space } from "../../../src";
import "../../../src/select/style";
import "../../../src/space/style";

import {
    Delete,
    PhotoCamera,
    AddCircle,
    VisibilityOutlined,
} from '@mui/icons-material';
import Markdown from "../../components/markdown"
import "./index.css"


export default () => {

    return <div className="page">
        <h1>Input</h1>
        <h2>size</h2>
        <div className="examples">
            <Space>
                <Select defaultValue="beijing" size="large">
                    <Select.Option value="beijing" disabled >Beijing</Select.Option>
                    <Select.Option value="shanghai"  >Shanghai</Select.Option>
                </Select>
                <Select defaultValue="beijing">
                    <Select.Option value="beijing"  >Beijing</Select.Option>
                    <Select.Option value="shanghai"  >Shanghai</Select.Option>
                </Select>
                <Select defaultValue="beijing" size="small">
                    <Select.Option value="beijing"  >Beijing</Select.Option>
                    <Select.Option value="shanghai"  >Shanghai</Select.Option>
                </Select>
                <Select defaultValue="beijing" size="tiny">
                    <Select.Option value="beijing"  >Beijing</Select.Option>
                    <Select.Option value="shanghai"  >Shanghai</Select.Option>
                </Select>
            </Space>

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
| size      | PropTypes.oneOf(['large', 'medium', 'small']) | string | medium |
| disabled  | disabled state of input	 | boolean | false |
    `} />
    </div>
}