import React, { useState } from 'react'
import { Select, Space, Row, Col, Button } from "../../../src";
import "../../../src/select/style";
import "../../../src/space/style";
import "../../../src/row/style";
import "../../../src/col/style";
import "../../../src/button/style";

import {
    Delete,
    PhotoCamera,
    AddCircle,
    VisibilityOutlined,
} from '@mui/icons-material';
import Markdown from "../../components/markdown"
import "./index.css"


export default () => {
    const [options, setOptions] = useState(['Beijing', 'Shanghai', 'Guangzhou', 'Disabled'])
    return <div className="page">
        <h1>Select</h1>
        <h2>Basic</h2>
        <div className="examples" >
            <Row gap="16px" style={{ width: 500 }}>
                <Col xs="24" sm="12" lg="12">
                    <Select placeholder="Select City" defaultValue="Shanghai" >
                        {options.map((option, index) => (
                            <Select.Option key={option} disabled={index === 3} value={option} name={index + ". " + option}>
                                {option}
                            </Select.Option>
                        ))}
                    </Select>
                </Col>
                <Col xs="24" sm="12" lg="12">
                    <Select placeholder="Select City" disabled value="Beijing">
                        {options.map((option, index) => (
                            <Select.Option key={option} disabled={index === 3} value={option}>
                                {option}
                            </Select.Option>
                        ))}
                    </Select>
                </Col>
            </Row>
        </div>
        <Markdown children={`
\`\`\`javascript
export default () => {
    const options = ['Beijing', 'Shanghai', 'Guangzhou', 'Disabled'];
    return <div className="page">
        <div className="examples" >
            <Row gap="16px" style={{ width: 500 }}>
                <Col xs="24" sm="12" lg="12">
                    <Select placeholder="Select City" defaultValue="Shanghai" >
                        {options.map((option, index) => (
                            <Select.Option key={option} disabled={index === 3} value={option} name={index + ". " + option}>
                                {option}
                            </Select.Option>
                        ))}
                    </Select>
                </Col>
                <Col xs="24" sm="12" lg="12">
                    <Select placeholder="Select City" disabled value="Beijing">
                        {options.map((option, index) => (
                            <Select.Option key={option} disabled={index === 3} value={option}>
                                {option}
                            </Select.Option>
                        ))}
                    </Select>
                </Col>
            </Row>
        </div>
    </div>
}
\`\`\`
`} />
        <h2>Multi</h2>
        <div className="examples">
            <Row gap="16px" style={{ width: 500 }}>
                <Col span="24">
                    <Select placeholder="Select City" multi defaultValue={["Disabled"]}>
                        {options.map((option, index) => (
                            <Select.Option key={option} disabled={index === 3} value={option}>
                                {option}
                            </Select.Option>
                        ))}
                    </Select>
                </Col>
            </Row>
        </div>
        <Markdown children={`
\`\`\`javascript
export default () => {
    const options = ['Beijing', 'Shanghai', 'Guangzhou', 'Disabled'];
    return <div className="examples">
        <Row gap="16px">
            <Col span="24">
                <Select placeholder="Select City" multi defaultValue={["Disabled"]}>
                    {options.map((option, index) => (
                        <Select.Option key={option} disabled={index === 3} value={option}>
                            {option}
                        </Select.Option>
                    ))}
                </Select>
            </Col>
        </Row>
    </div>
}
\`\`\`
    `} />
        <h2>No Border</h2>
        <div className="examples" >
            <Row gap="16px">
                <Col xs="24" sm="12" lg="6">
                    <Select placeholder="Select City" noBorder>
                        {options.map((option, index) => (
                            <Select.Option key={option} disabled={index === 3} value={option}>
                                {option}
                            </Select.Option>
                        ))}
                    </Select>
                </Col>
            </Row>
        </div>
        <Markdown children={`
\`\`\`javascript
export default () => {
    const options = ['Beijing', 'Shanghai', 'Guangzhou', 'Disabled'];
    return <div className="examples">
        <Row gap="16px">
            <Col xs="24" sm="12" lg="6">
                <Select placeholder="Select City" multi noBorder size="small">
                    {options.map((option, index) => (
                        <Select.Option key={option} disabled={index === 3} value={option}>
                            {option}
                        </Select.Option>
                    ))}
                </Select>
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