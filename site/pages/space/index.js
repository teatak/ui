import React from 'react'
import { Space, Button } from "../../../src";
import "../../../src/space/style";
import "../../../src/button/style";

import Markdown from "../../components/markdown"
import "./index.css"
import {
    Delete,
} from '@mui/icons-material';

export default () => {

    return <div className="">
        <h1>Space</h1>
        <div className="examples">
            <Space>
                Text
                <Button>Button</Button>
                <Button type="filled" color="primary">Filled</Button>
                <Button type="outlined" color="primary">Outlined</Button>
                <Button type="filled" rounded color="danger"><Delete /></Button>
            </Space>
        </div>
        <Markdown children={`
\`\`\`javascript
import React from "react";
import {Space,Row,Col} from "@teatak/ui";

export default () => <div className="page">
    <h1>Space</h1>
    <div className="examples">
        <Space>
            Text
            <Button>Button</Button>
            <Button type="filled" color="primary">Filled</Button>
            <Button type="outlined" color="primary">Outlined</Button>
            <Button type="filled" rounded color="danger"><Delete /></Button>
        </Space>
    </div>
</div> 
\`\`\`
        `} />
        <div className="examples">
            <Space direction='vertical'>
                Text
                <Button>Button</Button>
                <Button type="filled" color="primary">Filled</Button>
                <Button type="outlined" color="primary">Outlined</Button>
                <Button type="filled" rounded color="danger"><Delete /></Button>
            </Space>
        </div>
        <Markdown children={`
## API

| Property  | Description | Type | Default |
| --------- | ------- | ------- | ------- |
| direction | direction | PropTypes.oneOf(['horizontal', 'vertical']) | horizontal |

        `} />
    </div>
}