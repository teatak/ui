import React, { useState } from "react"
import Markdown from '../../components/markdown'
import { Alert, Button, Space, Row, Col } from '../../../src'
import '../../../src/alert/style'
import '../../../src/button/style'
import '../../../src/space/style'
import '../../../src/row/style'
import '../../../src/col/style'

export default () => {
    return <div className="">
        <h1>Alert</h1>
        <h2>Standard</h2>
        <div className="examples" >
            <Row gap={[8, 8]}>
                <Col span={12}>
                    <Alert closeable >
                        <Alert.Title>Title</Alert.Title>
                        Content
                    </Alert>
                </Col>
                <Col span={12}>
                    <Alert closeable color="error">content</Alert>
                </Col>
                <Col span={12}>
                    <Alert closeable color="warning">content</Alert>
                </Col>
                <Col span={12}>
                    <Alert closeable color="success">content</Alert>
                </Col>
            </Row>
        </div>
        <Markdown
            children={`
\`\`\`javascript
export default () => {
    return <Row gap={[8, 8]}>
        <Col span={12}>
            <Alert closeable >
                <Alert.Title>Title</Alert.Title>
                Content
            </Alert>
        </Col>
        <Col span={12}>
            <Alert closeable color="error">content</Alert>
        </Col>
        <Col span={12}>
            <Alert closeable color="warning">content</Alert>
        </Col>
        <Col span={12}>
            <Alert closeable color="success">content</Alert>
        </Col>
    </Row>  
}  
\`\`\`
`}
        />
        <h2>Filled</h2>
        <div className="examples" >
            <Row gap={[8, 8]}>
                <Col span={12}>
                    <Alert closeable type="filled" >
                        <Alert.Title>Title</Alert.Title>
                        Content
                    </Alert>
                </Col>
                <Col span={12}>
                    <Alert closeable type="filled" color="error">content</Alert>
                </Col>
                <Col span={12}>
                    <Alert closeable type="filled" color="warning">content</Alert>
                </Col>
                <Col span={12}>
                    <Alert closeable type="filled" color="success">content</Alert>
                </Col>
            </Row>
        </div>
        <Markdown
            children={`
\`\`\`javascript
export default () => {
    return <Row gap={[8, 8]}>
        <Col span={12}>
            <Alert closeable type="filled" >
                <Alert.Title>Title</Alert.Title>
                Content
            </Alert>
        </Col>
        <Col span={12}>
            <Alert closeable type="filled" color="error">content</Alert>
        </Col>
        <Col span={12}>
            <Alert closeable type="filled" color="warning">content</Alert>
        </Col>
        <Col span={12}>
            <Alert closeable type="filled" color="success">content</Alert>
        </Col>
    </Row>
}  
\`\`\`
`}
        />
        <h2>Outlined</h2>
        <div className="examples" >
            <Row gap={[8, 8]}>
                <Col span={12}>
                    <Alert closeable type="outlined" actions={<div>Action</div>} >
                        <Alert.Title>Title</Alert.Title>
                        Content
                    </Alert>
                </Col>
                <Col span={12}>
                    <Alert closeable type="outlined" color="error">content</Alert>
                </Col>
                <Col span={12}>
                    <Alert closeable type="outlined" color="warning">content</Alert>
                </Col>
                <Col span={12}>
                    <Alert closeable type="outlined" color="success">content</Alert>
                </Col>
            </Row>
        </div>
        <Markdown
            children={`
\`\`\`javascript
export default () => {
    return <Row gap={[8, 8]}>
        <Col span={12}>
            <Alert closeable type="outlined" actions={<div>aaa</div>} >
                <Alert.Title>Title</Alert.Title>
                Content
            </Alert>
        </Col>
        <Col span={12}>
            <Alert closeable type="outlined" color="error">content</Alert>
        </Col>
        <Col span={12}>
            <Alert closeable type="outlined" color="warning">content</Alert>
        </Col>
        <Col span={12}>
            <Alert closeable type="outlined" color="success">content</Alert>
        </Col>
    </Row>
}  
\`\`\`
`}
        />
        <Markdown children={`
## API

### Alert

| Property  | Description | Type | Default |
| --------- | ------- | ------- | ------- |
| icon   | icon | element | - |
| showIcon   | showIcon | bool | - |
| onClose   | onClose | void | - |
| afterClose   | afterClose | void | - |
| closeable   | closeable | bool | - |
| closeElement   | closeElement | element | - |
| color | PropTypes.oneOf(['success', 'error', 'info', 'warning']) | string | info |
| type | PropTypes.oneOf(['filled', 'outlined', 'standard']) | string | standard |
        `} />
    </div >
}