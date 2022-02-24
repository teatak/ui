(self.webpackChunk_teatak_ui=self.webpackChunk_teatak_ui||[]).push([[834],{63065:(e,n,t)=>{"use strict";t.d(n,{Z:()=>g});var l=t(22122),r=t(81253),s=t(67294),a=t(38456),m=t.n(a),c=t(10043),i=t.n(c),o=t(35317),u=t(86032),d=["node","inline","className","children"],p={code:function(e){e.node;var n=e.inline,t=e.className,a=e.children,m=(0,r.Z)(e,d),c=/language-(\w+)/.exec(t||"");return!n&&c?s.createElement(o.Z,(0,l.Z)({style:u.Z,language:c[1],PreTag:"div",children:String(a).replace(/\n$/,"")},m)):s.createElement("code",(0,l.Z)({className:t},m),a)}};const g=function(e){return s.createElement("div",{className:"markdown"},s.createElement(m(),{components:p,children:e.children,remarkPlugins:[i()]}))}},63834:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>a});var l=t(67294),r=t(80158),s=t(63065);const a=function(){return l.createElement("div",null,l.createElement("h1",null,"Grid"),l.createElement("div",{className:"examples grid-examples"},l.createElement(r.X2,{gap:[8,16]},l.createElement(r.JX,{xs:"24",sm:"12",lg:"6"},l.createElement("div",null,'xs="24" sm="12" lg="6"')),l.createElement(r.JX,{xs:"24",sm:"12",lg:"6"},l.createElement("div",null,'xs="24" sm="12" lg="6"')),l.createElement(r.JX,{xs:"24",sm:"12",lg:"6"},l.createElement("div",null,'xs="24" sm="12" lg="6"')),l.createElement(r.JX,{xs:"24",sm:"12",lg:"6"},l.createElement("div",null,'xs="24" sm="12" lg="6"')),l.createElement(r.JX,{span:"24"},l.createElement("div",null,'span="24"')))),l.createElement(s.Z,{children:'\n```javascript\nimport React from "react";\nimport {Space,Row,Col} from "@teatak/ui";\n\nexport default () => <div className="examples">\n    <div>default:</div>\n    <Row gap={[8, 16]}>\n        <Col xs="24" sm="12" lg="6">\n            <div>xs="24" sm="12" lg="6"</div>\n        </Col>\n        <Col xs="24" sm="12" lg="6">\n            <div>xs="24" sm="12" lg="6"</div>\n        </Col> \n        <Col xs="24" sm="12" lg="6">\n            <div>xs="24" sm="12" lg="6"</div>\n        </Col> \n        <Col xs="24" sm="12" lg="6">\n            <div>xs="24" sm="12" lg="6"</div>\n        </Col> \n        <Col span="24">\n            <div>span="24"</div>\n        </Col>\n    </Row>\n</div>       \n```\n        '}),l.createElement(s.Z,{children:"\n## API\n\n### Row\n\n| Property  | Description | Type | Default |\n| --------- | ------- | ------- | ------- |\n| gap       | number or array | number,object,array | 0 |\n| align     | PropTypes.oneOf(['start', 'center', 'end']) | string | start |\n| justify   | PropTypes.oneOf(['start', 'center', 'end', 'space-between', 'space-around']) | string | start |\n\n### Col\n\n| Property  | Description | Type | Default |\n| --------- | ------- | ------- | ------- |\n| offset\t| The number of cells to offset Col from the left   | number | 0 |\t\n| pull\t    | The number of cells that raster is moved to the left  | number | 0 |\t\n| push\t    | The number of cells that raster is moved to the right | number | 0 |\t\n| span      | Raster number of cells to occupy | number | - |\n| xs        | screen < 576px | number | - |\n| sm        | screen ≥ 576px | number | - |\n| md        | screen ≥ 768px | number | - |\n| lg        | screen ≥ 992px | number | - |\n| xl        | screen ≥ 1200px | number | - |\n| xxl       | screen ≥ 1600px | number | - |\n\n        "}))}}}]);