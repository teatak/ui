import React from 'react'
import { Row, Col } from "../../../src";
import "../../../src/row/style";
import "../../../src/col/style";
import "../../../src/svg/style";

import Markdown from "../../components/markdown"
import "./index.css"

export default () => {

    return <div>
        <h1>Grid</h1>
        <div className="examples grid-examples">
            <Row gap={[8, 16]}>
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
                    <div>span="24"</div>
                </Col>
            </Row>
        </div>
        <Markdown children={`
\`\`\`javascript
import React from "react";
import {Space,Row,Col} from "@teatak/ui";

export default () => <div className="examples">
    <div>default:</div>
    <Row gap={[8, 16]}>
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
            <div>span="24"</div>
        </Col>
    </Row>
</div>       
\`\`\`
        `} />

        <Markdown children={`
## API

### Row

| Property  | Description | Type | Default |
| --------- | ------- | ------- | ------- |
| gap       | number or array | number,object,array | 0 |
| align     | PropTypes.oneOf(['start', 'center', 'end']) | string | start |
| justify   | PropTypes.oneOf(['start', 'center', 'end', 'space-between', 'space-around']) | string | start |

### Col

| Property  | Description | Type | Default |
| --------- | ------- | ------- | ------- |
| offset	| The number of cells to offset Col from the left   | number | 0 |	
| pull	    | The number of cells that raster is moved to the left  | number | 0 |	
| push	    | The number of cells that raster is moved to the right | number | 0 |	
| span      | Raster number of cells to occupy | number | - |
| xs        | screen < 576px | number | - |
| sm        | screen ≥ 576px | number | - |
| md        | screen ≥ 768px | number | - |
| lg        | screen ≥ 992px | number | - |
| xl        | screen ≥ 1200px | number | - |
| xxl       | screen ≥ 1600px | number | - |

        `} />
    </div>
}