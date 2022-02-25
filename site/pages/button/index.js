import React from 'react'

import { Space } from '../../../src'
import '../../../src/space/style'
import { Button } from '../../../src'
import '../../../src/button/style'
import { Row, Col } from '../../../src'
import '../../../src/row/style'
import '../../../src/col/style'

import { Delete, PhotoCamera, AddCircle } from '@mui/icons-material'
import Markdown from '../../components/markdown'
import './index.css'

export default () => {
  return (
    <div className="page">
      <h1>Button</h1>
      <Markdown children={`
## color:
      `} />
      <div className="examples">
        <Space>
          <Button type="outlined" color="primary" size="large" startIcon={<AddCircle />}>Primary</Button>
          <Button type="outlined" color="secondary" size="small" endIcon={<AddCircle />}>Secondary</Button>
          <Button type="filled" color="success" size="tiny" startIcon={<AddCircle />}>Success</Button>
          <Button type="filled" color="error" endIcon={<Delete />}>Error</Button>
          <Button color="info">Info</Button>
          <Button color="warning">Warning</Button>
          <Button disabled>Disabled</Button>
        </Space>
      </div>
      <Markdown
        children={`
> color: 'primary', 'secondary', 'success', 'error', 'info', 'warning'

~~~javascript
import React from "react";
import { Button, Space } from "@teatak/ui";

export default () => <div className="examples">
  <Space>
    <Button color="primary">Primary</Button>
    <Button color="secondary">Secondary</Button>
    <Button color="success">Success</Button>
    <Button color="error">Error</Button>
    <Button color="info">Info</Button>
    <Button color="warning">Warning</Button>
    <Button disabled>Disabled</Button>
  </Space>
</div> 
~~~
    `}
      />
      <h2>filled:</h2>
      <div className="examples">
        <Space>
          <Button type="filled" color="primary">Primary</Button>
          <Button type="filled" color="secondary">Secondary</Button>
          <Button type="filled" color="success">Success</Button>
          <Button type="filled" color="error">Error</Button>
          <Button type="filled" color="info">Info</Button>
          <Button type="filled" color="warning">Warning</Button>
          <Button type="filled" disabled>Disabled</Button>
        </Space>
      </div>
      <Markdown
        children={`
> type="filled"

~~~javascript
import React from "react";
import { Button, Space } from "@teatak/ui";

export default () => <div className="examples">
  <Space>
    <Button type="filled" color="primary">Primary</Button>
    <Button type="filled" color="secondary">Secondary</Button>
    <Button type="filled" color="success">Success</Button>
    <Button type="filled" color="error">Error</Button>
    <Button type="filled" color="info">Info</Button>
    <Button type="filled" color="warning">Warning</Button>
    <Button type="filled" disabled>Disabled</Button>
  </Space>
</div>      
~~~
        `}
      />
      <h2>outlined:</h2>
      <div className="examples">
        <Space>
          <Button type="outlined" color="primary">Primary</Button>
          <Button type="outlined" color="secondary">Secondary</Button>
          <Button type="outlined" color="success">Success</Button>
          <Button type="outlined" color="error">Error</Button>
          <Button type="outlined" color="info">Info</Button>
          <Button type="outlined" color="warning">Warning</Button>
          <Button type="outlined" disabled>Disabled</Button>
        </Space>
      </div>
      <Markdown
        children={`
> type="outlined"

~~~javascript
import React from "react";
import { Button, Space } from "@teatak/ui";

export default () => <div className="examples">
  <Space>
    <Button type="outlined" color="primary">Primary</Button>
    <Button type="outlined" color="secondary">Secondary</Button>
    <Button type="outlined" color="success">Success</Button>
    <Button type="outlined" color="error">Error</Button>
    <Button type="outlined" color="info">Info</Button>
    <Button type="outlined" color="warning">Warning</Button>
    <Button type="outlined" disabled>Disabled</Button>
  </Space>
</div>      
~~~
        `}
      />
      <h2>rounded circle:</h2>
      <div className="examples">
        <Space>
          <Button type="filled" circle size="large" color="error"><PhotoCamera /></Button>
          <Button type="filled" circle color="primary"><PhotoCamera /></Button>
          <Button type="filled" circle size="small" color="success"><PhotoCamera /></Button>
          <Button type="filled" circle size="tiny" color="warning"><PhotoCamera /></Button>
          <Button circle size="large" color="primary"><PhotoCamera /></Button>
          <Button type="outlined" size="large" circle color="warning"><PhotoCamera /></Button>
          <Button type="outlined" circle color="secondary"><PhotoCamera /></Button>
          <Button type="outlined" rounded size="small" color="error"><PhotoCamera /></Button>
          <Button type="outlined" rounded color="error" startIcon={<Delete />}>Danger</Button>
          <Button type="text" rounded>Normal</Button>
          <Button rounded disabled>Disabled</Button>
        </Space>
      </div>
      <Markdown
        children={`
> rounded circle

\`\`\`javascript
import React from "react";
import { Button, Space } from "@teatak/ui";
import {
    Delete,
    PhotoCamera,
} from '@mui/icons-material';

export default () => <div className="examples">
  <Space>
    <Button type="filled" circle size="large" color="error"><PhotoCamera /></Button>
    <Button type="text" circle color="primary"><PhotoCamera /></Button>
    <Button type="outlined" circle size="large" color="primary"><PhotoCamera /></Button>
    <Button type="outlined" circle color="secondary"><PhotoCamera /></Button>
    <Button type="outlined" circle size="small" color="error"><PhotoCamera /></Button>
    <Button type="outlined" rounded color="error" startIcon={<Delete />}>Danger</Button>
    <Button type="text" rounded>Normal</Button>
    <Button rounded disabled>Disabled</Button>
  </Space>
</div>      
\`\`\`
        `}
      />
      <h2>size:</h2>
      <div className="examples">
        <Space style={{ width: "300px" }}>
          <Button size="large">Large</Button>
          <Button>Medium</Button>
          <Button size="small">Small</Button>
          <Button size="tiny">Tiny</Button>
          <Button type="filled" rounded size="large">Large</Button>
          <Button type="filled" rounded>Medium</Button>
          <Button type="filled" rounded size="small">Small</Button>
          <Button type="filled" rounded size="tiny">Tiny</Button>
          <Button type="outlined" size="large">Large</Button>
          <Button type="outlined">Medium</Button>
          <Button type="outlined" size="small">Small</Button>
          <Button type="outlined" size="tiny">Tiny</Button>
        </Space>
      </div>
      <Markdown
        children={`
> size: \`large\`,\`medium\`,\`small\`

\`\`\`javascript
import React from "react";
import { Button, Space } from "@teatak/ui";

export default () => <div>
  <Space style={{ width: "300px" }}>
    <Button size="large">Large</Button>
    <Button>Medium</Button>
    <Button size="small">Small</Button>
    <Button type="filled" rounded size="large">Large</Button>
    <Button type="filled" rounded>Medium</Button>
    <Button type="filled" rounded size="small">Small</Button>
    <Button type="outlined" size="large">Large</Button>
    <Button type="outlined">Medium</Button>
    <Button type="outlined" size="small">Small</Button>
  </Space>
</div>
\`\`\`
        `}
      />
      <h2>long:</h2>
      <div className="examples">
        <Row gap="16px" style={{ width: "300px" }}>
          <Col span={24}>
            <Button type="filled" long rounded>Long</Button>
          </Col>
          <Col span={24}>
            <Button type="filled" long>Long</Button>
          </Col>
          <Col span={24}>
            <Button type="outlined" long color="error">Long</Button>
          </Col>
          <Col span={24}>
            <Button type="outlined" long rounded color="success">Long</Button>
          </Col>
        </Row>
      </div>
      <Markdown
        children={`

\`\`\`javascript
import React from "react";
import { Button, Space, Row, Col } from "@teatak/ui";

export default () => <div>
  <Row gap="16px" style={{ width: "300px" }}>
    <Col span={24}>
      <Button type="filled" long rounded>Long</Button>
    </Col>
    <Col span={24}>
      <Button type="filled" long>Long</Button>
    </Col>
    <Col span={24}>
      <Button type="outlined" long color="error">Long</Button>
    </Col>
    <Col span={24}>
      <Button type="outlined" long rounded color="success">Long</Button>
    </Col>
  </Row>
</div>
\`\`\`
        `}
      />
      <Markdown
        children={`
## API

| Property  | Description | Type | Default |
| --------- | ------- | ------- | ------- |
| type      | PropTypes.oneOf(['filled', 'outlined', 'text']) | string | text |
| color     | PropTypes.oneOf(['primary','secondary','success','error','info','warning']) | string | primary |
| size      | PropTypes.oneOf(['large', 'medium', 'small', 'tiny']) | string | medium |
| long      | long button    | boolean | false |
| circle    | circle button  | boolean | false |
| rounded   | rounded button | boolean | false |
| disabled  | disabled state of button	 | boolean | false |
| htmlType  | htmlType | string | button |
| onClick   | set the handler to handle click event	| (event) => void | - |
        `}
      />
    </div>
  )
}
