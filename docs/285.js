"use strict";(self.webpackChunk_teatak_ui=self.webpackChunk_teatak_ui||[]).push([[285],{46761:(e,t,n)=>{n.d(t,{Z:()=>a});var l=n(69728),r=n(85893);const a=(0,l.Z)((0,r.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete")},85304:(e,t,n)=>{n.d(t,{Z:()=>E});var l=n(87462),r=n(45987),a=n(67294),c=n(38456),o=n.n(c),i=n(10043),d=n.n(i),m=n(53961),u=n(86032),p=["node","inline","className","children"],s={code:function(e){e.node;var t=e.inline,n=e.className,c=e.children,o=(0,r.Z)(e,p),i=/language-(\w+)/.exec(n||"");return!t&&i?a.createElement(m.Z,(0,l.Z)({style:u.Z,language:i[1],PreTag:"div",children:String(c).replace(/\n$/,"")},o)):a.createElement("code",(0,l.Z)({className:n},o),c)}};const E=function(e){return a.createElement("div",{className:"markdown"},a.createElement(o(),{components:s,children:e.children,remarkPlugins:[d()]}))}},91285:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});var l=n(67294),r=n(43869),a=n(85304),c=n(46761);const o=function(){return l.createElement("div",{className:""},l.createElement("h1",null,"Space"),l.createElement("div",{className:"examples"},l.createElement(r.T,null,"Text",l.createElement(r.zx,null,"Button"),l.createElement(r.zx,{type:"filled",color:"primary"},"Filled"),l.createElement(r.zx,{type:"outlined",color:"primary"},"Outlined"),l.createElement(r.zx,{type:"filled",rounded:!0,color:"danger"},l.createElement(c.Z,null)))),l.createElement(a.Z,{children:'\n```javascript\nimport React from "react";\nimport {Space,Row,Col} from "@teatak/ui";\n\nexport default () => <div className="page">\n    <h1>Space</h1>\n    <div className="examples">\n        <Space>\n            Text\n            <Button>Button</Button>\n            <Button type="filled" color="primary">Filled</Button>\n            <Button type="outlined" color="primary">Outlined</Button>\n            <Button type="filled" rounded color="danger"><Delete /></Button>\n        </Space>\n    </div>\n</div> \n```\n        '}),l.createElement("div",{className:"examples"},l.createElement(r.T,{direction:"vertical"},"Text",l.createElement(r.zx,null,"Button"),l.createElement(r.zx,{type:"filled",color:"primary"},"Filled"),l.createElement(r.zx,{type:"outlined",color:"primary"},"Outlined"),l.createElement(r.zx,{type:"filled",rounded:!0,color:"danger"},l.createElement(c.Z,null)))),l.createElement(a.Z,{children:"\n## API\n\n| Property  | Description | Type | Default |\n| --------- | ------- | ------- | ------- |\n| direction | direction | PropTypes.oneOf(['horizontal', 'vertical']) | horizontal |\n\n        "}))}}}]);