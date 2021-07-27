import React from 'react'
import {Input} from "../../../src";
import "../../../src/input/style";
import {
    Delete,
    PhotoCamera,
    AddCircle
} from '@material-ui/icons';
import Markdown from "../../components/markdown"
import "./index.css"

export default () => {

    return <div>
         <div className="examples">
            <div>default:</div>
            <Input placeholder="Name"></Input>
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