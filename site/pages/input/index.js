import React from 'react'
import {Input} from "../../../src";
import "../../../src/input/style";

import {Button} from "../../../src";
import "../../../src/button/style";

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

    const [showPassword, setShowPassword] = React.useState(false);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return <div>
         <div className="examples">
            <div>default:</div>
            <Input startIcon={<PhotoCamera/>} size="large" placeholder="Name"></Input>
            <Input endIcon={<Delete/>} placeholder="Name"></Input>
            <Input startIcon={<AddCircle/>} endIcon={<Delete/>} size="small" placeholder="Name" ></Input>
            <Input placeholder="Password" type={showPassword?"text":"password"} defaultValue="Password" endIcon={<a onClick={handleShowPassword}>{showPassword ? <Visibility /> : <VisibilityOff />}</a>}></Input>
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