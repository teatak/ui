(self.webpackChunk_teatak_ui=self.webpackChunk_teatak_ui||[]).push([[867],{85304:(e,n,l)=>{"use strict";l.d(n,{Z:()=>E});var t=l(22122),o=l(81253),r=l(67294),a=l(38456),c=l.n(a),s=l(10043),i=l.n(s),p=l(46914),m=l(86032),d=["node","inline","className","children"],u={code:function(e){e.node;var n=e.inline,l=e.className,a=e.children,c=(0,o.Z)(e,d),s=/language-(\w+)/.exec(l||"");return!n&&s?r.createElement(p.Z,(0,t.Z)({style:m.Z,language:s[1],PreTag:"div",children:String(a).replace(/\n$/,"")},c)):r.createElement("code",(0,t.Z)({className:l},c),a)}};const E=function(e){return r.createElement("div",{className:"markdown"},r.createElement(c(),{components:u,children:e.children,remarkPlugins:[i()]}))}},57867:(e,n,l)=>{"use strict";l.r(n),l.d(n,{default:()=>a});var t=l(67294),o=l(85304),r=l(89224);const a=function(){return t.createElement("div",{className:"page"},t.createElement("h1",null,"Alert"),t.createElement("h2",null,"Standard"),t.createElement("div",{className:"examples"},t.createElement(r.X2,{gap:[8,8]},t.createElement(r.JX,{span:12},t.createElement(r.bZ,{closeable:!0},t.createElement(r.bZ.Title,null,"Title"),"Content")),t.createElement(r.JX,{span:12},t.createElement(r.bZ,{closeable:!0,color:"error"},"content")),t.createElement(r.JX,{span:12},t.createElement(r.bZ,{closeable:!0,color:"warning"},"content")),t.createElement(r.JX,{span:12},t.createElement(r.bZ,{closeable:!0,color:"success"},"content")))),t.createElement(o.Z,{children:'\n```javascript\nexport default () => {\n    return <Row gap={[8, 8]}>\n        <Col span={12}>\n            <Alert closeable >\n                <Alert.Title>Title</Alert.Title>\n                Content\n            </Alert>\n        </Col>\n        <Col span={12}>\n            <Alert closeable color="error">content</Alert>\n        </Col>\n        <Col span={12}>\n            <Alert closeable color="warning">content</Alert>\n        </Col>\n        <Col span={12}>\n            <Alert closeable color="success">content</Alert>\n        </Col>\n    </Row>  \n}  \n```\n'}),t.createElement("h2",null,"Filled"),t.createElement("div",{className:"examples"},t.createElement(r.X2,{gap:[8,8]},t.createElement(r.JX,{span:12},t.createElement(r.bZ,{closeable:!0,type:"filled"},t.createElement(r.bZ.Title,null,"Title"),"Content")),t.createElement(r.JX,{span:12},t.createElement(r.bZ,{closeable:!0,type:"filled",color:"error"},"content")),t.createElement(r.JX,{span:12},t.createElement(r.bZ,{closeable:!0,type:"filled",color:"warning"},"content")),t.createElement(r.JX,{span:12},t.createElement(r.bZ,{closeable:!0,type:"filled",color:"success"},"content")))),t.createElement(o.Z,{children:'\n```javascript\nexport default () => {\n    return <Row gap={[8, 8]}>\n        <Col span={12}>\n            <Alert closeable type="filled" >\n                <Alert.Title>Title</Alert.Title>\n                Content\n            </Alert>\n        </Col>\n        <Col span={12}>\n            <Alert closeable type="filled" color="error">content</Alert>\n        </Col>\n        <Col span={12}>\n            <Alert closeable type="filled" color="warning">content</Alert>\n        </Col>\n        <Col span={12}>\n            <Alert closeable type="filled" color="success">content</Alert>\n        </Col>\n    </Row>\n}  \n```\n'}),t.createElement("h2",null,"Outlined"),t.createElement("div",{className:"examples"},t.createElement(r.X2,{gap:[8,8]},t.createElement(r.JX,{span:12},t.createElement(r.bZ,{closeable:!0,type:"outlined",actions:t.createElement("div",null,"Action")},t.createElement(r.bZ.Title,null,"Title"),"Content")),t.createElement(r.JX,{span:12},t.createElement(r.bZ,{closeable:!0,type:"outlined",color:"error"},"content")),t.createElement(r.JX,{span:12},t.createElement(r.bZ,{closeable:!0,type:"outlined",color:"warning"},"content")),t.createElement(r.JX,{span:12},t.createElement(r.bZ,{closeable:!0,type:"outlined",color:"success"},"content")))),t.createElement(o.Z,{children:'\n```javascript\nexport default () => {\n    return <Row gap={[8, 8]}>\n        <Col span={12}>\n            <Alert closeable type="outlined" actions={<div>aaa</div>} >\n                <Alert.Title>Title</Alert.Title>\n                Content\n            </Alert>\n        </Col>\n        <Col span={12}>\n            <Alert closeable type="outlined" color="error">content</Alert>\n        </Col>\n        <Col span={12}>\n            <Alert closeable type="outlined" color="warning">content</Alert>\n        </Col>\n        <Col span={12}>\n            <Alert closeable type="outlined" color="success">content</Alert>\n        </Col>\n    </Row>\n}  \n```\n'}),t.createElement(o.Z,{children:"\n## API\n\n### Alert\n\n| Property  | Description | Type | Default |\n| --------- | ------- | ------- | ------- |\n| icon   | icon | element | - |\n| showIcon   | showIcon | bool | - |\n| onClose   | onClose | void | - |\n| afterClose   | afterClose | void | - |\n| closeable   | closeable | bool | - |\n| closeElement   | closeElement | element | - |\n| color | PropTypes.oneOf(['success', 'error', 'info', 'warning']) | string | info |\n| type | PropTypes.oneOf(['filled', 'outlined', 'standard']) | string | standard |\n        "}))}}}]);