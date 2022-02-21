import React from 'react'
import { Input, Svg, Row, Col } from "../../../src";
import "../../../src/input/style";
import "../../../src/row/style";
import "../../../src/col/style";
import "../../../src/svg/style";

import {
    Delete,
    PhotoCamera,
    AddCircle,
    VisibilityOutlined,
} from '@mui/icons-material';
import Markdown from "../../components/markdown"
import "./index.css"



const EyeOff = (props) => {
    return <Svg viewBox="-8 0 144 64">
        <path d="M127.072 7.994c1.37-2.208.914-5.152-.914-6.87-2.056-1.717-4.797-1.226-6.396.982-.229.245-25.586 32.382-55.74 32.382-29.24 0-55.74-32.382-55.968-32.627-1.6-1.963-4.57-2.208-6.397-.49C-.17 3.086-.399 6.275 1.2 8.238c.457.736 5.94 7.36 14.62 14.72L4.17 35.96c-1.828 1.963-1.6 5.152.228 6.87.457.98 1.6 1.471 2.742 1.471s2.284-.49 3.198-1.472l12.564-13.983c5.94 4.416 13.021 8.587 20.788 11.53l-4.797 17.418c-.685 2.699.686 5.397 3.198 6.133h1.37c2.057 0 3.884-1.472 4.341-3.68L52.6 42.83c3.655.736 7.538 1.227 11.422 1.227 3.883 0 7.767-.49 11.422-1.227l4.797 17.173c.457 2.208 2.513 3.68 4.34 3.68.457 0 .914 0 1.143-.246 2.513-.736 3.883-3.434 3.198-6.133l-4.797-17.172c7.767-2.944 14.848-7.114 20.788-11.53l12.336 13.738c.913.981 2.056 1.472 3.198 1.472s2.284-.49 3.198-1.472c1.828-1.963 1.828-4.906.228-6.87l-11.65-13.001c9.366-7.36 14.849-14.474 14.849-14.474z"></path>
    </Svg>
}

export default () => {

    const [showPassword, setShowPassword] = React.useState(false);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return <div className="page">
        <h2>size</h2>
        <div className="examples">
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