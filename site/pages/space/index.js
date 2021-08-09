import React from 'react'
import {Space,Button} from "../../../src";
import "../../../src/space/style";
import "../../../src/button/style";

import Markdown from "../../components/markdown"
import "./index.css"
import {
    Delete,
} from '@material-ui/icons';

export default () => {

    return <div>
         <div className="space-examples">
            <div>default:</div>
            <Space>
                Text
                <Button>Button</Button>
                <Button type="filled" color="primary">Filled</Button>
                <Button type="outlined" color="primary">Outlined</Button>
                <Button type="filled" rounded color="danger"><Delete/></Button>
            </Space>
         </div>     
        <Markdown children={`
\`\`\`javascript
import React from "react";
import {Space,Row,Col} from "@teatak/ui";

export default () => <div className="examples">
    <div>default:</div>
    <Space>
        Text
        <Button>Button</Button>
        <Button type="filled" color="primary">Filled</Button>
        <Button type="outlined" color="primary">Outlined</Button>
        <Button type="filled" rounded color="danger"><Delete/></Button>
    </Space>
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