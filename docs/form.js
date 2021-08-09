(self.webpackChunk_teatak_ui=self.webpackChunk_teatak_ui||[]).push([[680],{63065:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var l=n(22122),a=n(81253),r=n(67294),s=n(38456),d=n.n(s),i=n(10043),o=n.n(i),c=n(46914),m=n(80682),u=["node","inline","className","children"],p={code:function(e){e.node;var t=e.inline,n=e.className,s=e.children,d=(0,a.Z)(e,u),i=/language-(\w+)/.exec(n||"");return!t&&i?r.createElement(c.Z,(0,l.Z)({style:m.Z,language:i[1],PreTag:"div",children:String(s).replace(/\n$/,"")},d)):r.createElement("code",(0,l.Z)({className:n},d),s)}};const f=function(e){return r.createElement("div",{className:"markdown"},r.createElement(d(),{components:p,children:e.children,remarkPlugins:[o()]}))}},90812:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>s});var l=n(67294),a=n(83257),r=n(63065);const s=function(){return l.createElement("div",null,l.createElement("div",{className:"examples"},l.createElement("div",null,"default:"),l.createElement(a.l0,{onSubmit:function(e,t,n){e.preventDefault(),console.log(e,t,n)}},l.createElement(a.l0.Item,{name:"name",rules:[{required:!0,message:"请输入用户名!"},{type:"string",message:"请输入5-20位有效的用户名!",pattern:/^.{5,20}$/}]},l.createElement(a.II,{style:{width:"100%"}})),l.createElement(a.l0.Item,{name:"password",rules:[{required:!0,message:"请输入密码!"},{type:"string",message:"请输入密码5-20位!",pattern:/^.{5,20}$/}]},l.createElement(a.II,{type:"password",style:{width:"100%"}})),l.createElement(a.l0.Item,{name:"password2",rules:[{required:!0,message:"请输入密码!"},{type:"string",message:"请输入密码5-20位!",pattern:/^.{5,20}$/}]},l.createElement(a.II,{type:"password",disabled:!0,style:{width:"100%"}})),l.createElement(a.zx,{color:"primary",type:"filled",htmlType:"submit"},"Submit"))),l.createElement(r.Z,{children:'\n> color: primary,danger\n```javascript\nimport React from "react";\nimport {Button} from "@teatak/ui";\nimport {\n    Delete,\n    PhotoCamera,\n    AddCircle\n} from \'@material-ui/icons\';\n\nexport default () => <div className="examples">\n    <div>default:</div>\n</div>    \n```\n        '}),l.createElement(r.Z,{children:"\n## API\n\n| Property  | Description | Type | Default |\n| --------- | ------- | ------- | ------- |\n| type      | can be set to 'filled','outlined','default' | string | default |\n| size      | can be set to small large or default | string | default |\n| rounded   | rounded | boolean | false |\n| disabled  | disabled state of button\t | boolean | false |\n| htmlType  | htmlType | string | button |\n| onClick   | set the handler to handle click event\t| (event) => void | - |\n        "}))}},63834:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>s});var l=n(67294),a=n(83257),r=n(63065);const s=function(){return l.createElement("div",null,l.createElement("div",{className:"grid-examples"},l.createElement("div",null,"default:"),l.createElement(a.X2,{gap:"16px"},l.createElement(a.JX,{xs:"24",sm:"12",lg:"6"},l.createElement("div",null,'xs="24" sm="12" lg="6"')),l.createElement(a.JX,{xs:"24",sm:"12",lg:"6"},l.createElement("div",null,'xs="24" sm="12" lg="6"')),l.createElement(a.JX,{xs:"24",sm:"12",lg:"6"},l.createElement("div",null,'xs="24" sm="12" lg="6"')),l.createElement(a.JX,{xs:"24",sm:"12",lg:"6"},l.createElement("div",null,'xs="24" sm="12" lg="6"')),l.createElement(a.JX,{span:"24"},l.createElement("div",null,'xs="24" sm="12" lg="6"')))),l.createElement(r.Z,{children:'\n```javascript\nimport React from "react";\nimport {Space,Row,Col} from "@teatak/ui";\n\nexport default () => <div className="examples">\n    <div>default:</div>\n    <Row gap="16px">\n        <Col xs="24" sm="12" lg="6">\n            <div>xs="24" sm="12" lg="6"</div>\n        </Col>\n        <Col xs="24" sm="12" lg="6">\n            <div>xs="24" sm="12" lg="6"</div>\n        </Col> \n        <Col xs="24" sm="12" lg="6">\n            <div>xs="24" sm="12" lg="6"</div>\n        </Col> \n        <Col xs="24" sm="12" lg="6">\n            <div>xs="24" sm="12" lg="6"</div>\n        </Col> \n        <Col span="24">\n            <div>xs="24" sm="12" lg="6"</div>\n        </Col>\n    </Row>\n</div>       \n```\n        '}),l.createElement(r.Z,{children:"\n## API\n\n| Property  | Description | Type | Default |\n| --------- | ------- | ------- | ------- |\n| type      | can be set to 'filled','outlined','default' | string | default |\n| size      | can be set to small large or default | string | default |\n| rounded   | rounded | boolean | false |\n| disabled  | disabled state of button\t | boolean | false |\n| htmlType  | htmlType | string | button |\n| onClick   | set the handler to handle click event\t| (event) => void | - |\n        "}))}},56858:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>d});var l=n(67294),a=n(83257),r=n(63065),s=n(76945);const d=function(){return l.createElement("div",null,l.createElement("div",{className:"space-examples"},l.createElement("div",null,"default:"),l.createElement(a.T,null,"Text",l.createElement(a.zx,null,"Button"),l.createElement(a.zx,{type:"filled",color:"primary"},"Filled"),l.createElement(a.zx,{type:"outlined",color:"primary"},"Outlined"),l.createElement(a.zx,{type:"filled",rounded:!0,color:"danger"},l.createElement(s.Z,null)))),l.createElement(r.Z,{children:'\n```javascript\nimport React from "react";\nimport {Space,Row,Col} from "@teatak/ui";\n\nexport default () => <div className="examples">\n    <div>default:</div>\n    <Space>\n        Text\n        <Button>Button</Button>\n        <Button type="filled" color="primary">Filled</Button>\n        <Button type="outlined" color="primary">Outlined</Button>\n        <Button type="filled" rounded color="danger"><Delete/></Button>\n    </Space>\n</div>       \n```\n        '}),l.createElement(r.Z,{children:"\n## API\n\n| Property  | Description | Type | Default |\n| --------- | ------- | ------- | ------- |\n| type      | can be set to 'filled','outlined','default' | string | default |\n| size      | can be set to small large or default | string | default |\n| rounded   | rounded | boolean | false |\n| disabled  | disabled state of button\t | boolean | false |\n| htmlType  | htmlType | string | button |\n| onClick   | set the handler to handle click event\t| (event) => void | - |\n        "}))}}}]);