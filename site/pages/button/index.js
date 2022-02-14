import React from 'react'

import { Space } from '../../../src'
import '../../../src/space/style'

import { Button } from '../../../src'
import '../../../src/button/style'
import { Delete, PhotoCamera, AddCircle } from '@mui/icons-material'
import Markdown from '../../components/markdown'
import './index.css'

export default () => {
  return (
    <div className="page">
      <h1>Button</h1>
      <h2>color:</h2>
      <div className="examples">
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
      <Markdown
        children={`
> color: 'primary', 'secondary', 'success', 'error', 'info', 'warning'

~~~javascript
import React from "react";
import { Button, Space } from "@teatak/ui";
import { Delete } from '@mui/icons-material';

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
          <Button type="filled" color="primary" startIcon={<AddCircle />}>
            Primary
          </Button>
          <Button type="filled" color="error" endIcon={<Delete />}>
            Danger
          </Button>
          <Button type="filled">
            <AddCircle />
            Normal
          </Button>
          <Button type="filled" disabled>
            Disabled
          </Button>
        </Space>
      </div>
      <Markdown
        children={`
> type="filled"

~~~javascript
import React from "react";
import {Button} from "@teatak/ui";
import {
    Delete,
    PhotoCamera,
    AddCircle
} from '@material-ui/icons';

export default () => <div className="examples">
    <div>filled:</div>
    <Button type="filled" color="primary" startIcon={<Delete/>}>Primary</Button>
    <Button type="filled" color="danger" endIcon={<Delete/>}>Danger</Button>
    <Button type="filled">Normal</Button>
    <Button type="filled" disabled>Disabled</Button>
</div>      
~~~
        `}
      />

      <div className="examples">
        <div>outlined:</div>
        <Space>
          <Button type="outlined" color="primary">
            Primary
          </Button>
          <Button type="outlined" color="danger">
            Danger
          </Button>
          <Button type="outlined">Normal</Button>
          <Button type="outlined" disabled>
            Disabled
          </Button>
        </Space>
      </div>
      <Markdown
        children={`
> type="outlined"

~~~javascript
import React from "react";
import {Button} from "@teatak/ui";
import {
    Delete,
    PhotoCamera,
    AddCircle
} from '@material-ui/icons';

export default () => <div className="examples">
    <div>outlined:</div>
    <Button type="outlined" color="primary">Primary</Button>
    <Button type="outlined" color="danger" startIcon={<Delete/>}>Danger</Button>
    <Button type="outlined">Normal</Button>
    <Button type="outlined" disabled>Disabled</Button>
</div>      
~~~
        `}
      />

      <div className="examples">
        <div>rounded:</div>
        <Space>
          <Button type="filled" size="large" rounded color="danger">
            <PhotoCamera />
          </Button>
          <Button type="text" rounded color="primary">
            <PhotoCamera />
          </Button>
          <Button type="outlined" size="small" rounded color="primary">
            <PhotoCamera />
          </Button>
          <Button type="outlined" rounded color="danger" startIcon={<Delete />}>
            Danger
          </Button>
          <Button type="text" rounded>
            Normal
          </Button>
          <Button rounded disabled>
            Disabled
          </Button>
        </Space>
      </div>
      <Markdown
        children={`
> rounded

\`\`\`javascript
import React from "react";
import {Button,Space} from "@teatak/ui";
import {
    Delete,
    PhotoCamera,
    AddCircle
} from '@material-ui/icons';

export default () => <div className="examples" style={{width:"300px"}}>
    <Space gap={[8,16]}>
        <Button size="large">Large</Button>
        <Button>Default</Button>
        <Button size="small">Small</Button>
        <Button type="filled" size="large">Large</Button>
        <Button type="filled" >Default</Button>
        <Button type="filled" size="small">Small</Button>
        <Button type="outlined" size="large">Large</Button>
        <Button type="outlined">Default</Button>
        <Button type="outlined" size="small">Small</Button>
    </Space>
</div>      
\`\`\`
        `}
      />

      <div className="examples">
        <Space gap={[8, 16]}>
          <Button size="large">Large</Button>
          <Button>Default</Button>
          <Button size="small">Small</Button>
          <Button type="filled" size="large">
            Large
          </Button>
          <Button type="filled">Default</Button>
          <Button type="filled" size="small">
            Small
          </Button>
          <Button type="outlined" size="large">
            Large
          </Button>
          <Button type="outlined">Default</Button>
          <Button type="outlined" size="small">
            Small
          </Button>
        </Space>
      </div>
      <Markdown
        children={`
> size: \`large\`,\`default\`,\`small\`

\`\`\`javascript
import React from "react";
import {Button,Space} from "@teatak/ui";

export default () => <div>
    <Space gap={[8,16]}>
        <Button size="large">Large</Button>
        <Button>Default</Button>
        <Button size="small">Small</Button>
        <Button type="filled" size="large">Large</Button>
        <Button type="filled" >Default</Button>
        <Button type="filled" size="small">Small</Button>
        <Button type="outlined" size="large">Large</Button>
        <Button type="outlined">Default</Button>
        <Button type="outlined" size="small">Small</Button>
    </Space>
</div>
\`\`\`
        `}
      />

      <Markdown
        children={`
## API

| Property  | Description | Type | Default |
| --------- | ------- | ------- | ------- |
| type      | can be set to 'filled','outlined','default' | string | default |
| size      | can be set to small large or default | string | default |
| rounded   | rounded | boolean | false |
| disabled  | disabled state of button	 | boolean | false |
| htmlType  | htmlType | string | button |
| onClick   | set the handler to handle click event	| (event) => void | - |
        `}
      />
    </div>
  )
}
