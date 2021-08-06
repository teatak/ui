import React from 'react'
import {Row,Col} from "../../../src";
import "../../../src/row/style";
import "../../../src/col/style";
import "../../../src/svg/style";

import Markdown from "../../components/markdown"
import "./index.css"

export default () => {

    return <div>
         <div className="grid-examples">
            <div>default:</div>
            <Row gap="16px">
                <Col xs="24" sm="12" lg="6">
                    <div>xs="24" sm="12" lg="6"</div>
                </Col>
                <Col xs="24" sm="12" lg="6">
                    <div>xs="24" sm="12" lg="6"</div>
                </Col> 
                <Col xs="24" sm="12" lg="6">
                    <div>xs="24" sm="12" lg="6"</div>
                </Col> 
                <Col xs="24" sm="12" lg="6">
                    <div>xs="24" sm="12" lg="6"</div>
                </Col> 
                <Col span="24">
                    <div>xs="24" sm="12" lg="6"</div>
                </Col>
            </Row>
         </div>     
        <Markdown children={`
\`\`\`javascript
import React from "react";
import {Space,Row,Col} from "@teatak/ui";

export default () => <div className="examples">
    <div>default:</div>
    <Row gap="16px">
        <Col xs="24" sm="12" lg="6">
            <div>xs="24" sm="12" lg="6"</div>
        </Col>
        <Col xs="24" sm="12" lg="6">
            <div>xs="24" sm="12" lg="6"</div>
        </Col> 
        <Col xs="24" sm="12" lg="6">
            <div>xs="24" sm="12" lg="6"</div>
        </Col> 
        <Col xs="24" sm="12" lg="6">
            <div>xs="24" sm="12" lg="6"</div>
        </Col> 
        <Col span="24">
            <div>xs="24" sm="12" lg="6"</div>
        </Col>
    </Row>
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