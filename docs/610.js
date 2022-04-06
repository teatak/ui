(self.webpackChunk_teatak_ui=self.webpackChunk_teatak_ui||[]).push([[610],{85304:(e,n,t)=>{"use strict";t.d(n,{Z:()=>h});var l=t(22122),a=t(81253),i=t(67294),o=t(38456),c=t.n(o),s=t(10043),r=t.n(s),d=t(46914),p=t(86032),m=["node","inline","className","children"],u={code:function(e){e.node;var n=e.inline,t=e.className,o=e.children,c=(0,a.Z)(e,m),s=/language-(\w+)/.exec(t||"");return!n&&s?i.createElement(d.Z,(0,l.Z)({style:p.Z,language:s[1],PreTag:"div",children:String(o).replace(/\n$/,"")},c)):i.createElement("code",(0,l.Z)({className:t},c),o)}};const h=function(e){return i.createElement("div",{className:"markdown"},i.createElement(c(),{components:u,children:e.children,remarkPlugins:[r()]}))}},12610:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>c});var l=t(34699),a=t(67294),i=t(71959),o=t(85304);const c=function(){var e=(0,a.useState)(["Beijing","Shanghai","Guangzhou","Disabled","Shenzhen","Qingdao","Jinan","Nanjing","Xian"]),n=(0,l.Z)(e,2),t=n[0];return n[1],a.createElement("div",{className:"page"},a.createElement("h1",null,"Select"),a.createElement("h2",null,"Basic"),a.createElement("div",{className:"examples"},a.createElement(i.X2,{gap:"16px",style:{width:500}},a.createElement(i.JX,{xs:"24",sm:"12",lg:"12"},a.createElement(i.Ph,{placeholder:"Select City",defaultValue:"Xian"},t.map((function(e,n){return a.createElement(i.Ph.Option,{key:e,disabled:3===n,value:e,name:e},n+1+". "+e)})))),a.createElement(i.JX,{xs:"24",sm:"12",lg:"12"},a.createElement(i.Ph,{placeholder:"Select City",disabled:!0,value:"Beijing"},t.map((function(e,n){return a.createElement(i.Ph.Option,{key:e,disabled:3===n,value:e},e)})))))),a.createElement(o.Z,{children:'\n```javascript\nexport default () => {\n    const options = [\'Beijing\', \'Shanghai\', \'Guangzhou\', \'Disabled\'];\n    return <div className="page">\n        <div className="examples" >\n            <Row gap="16px" style={{ width: 500 }}>\n                <Col xs="24" sm="12" lg="12">\n                    <Select placeholder="Select City" defaultValue="Shanghai" >\n                        {options.map((option, index) => (\n                            <Select.Option key={option} disabled={index === 3} value={option} name={index + ". " + option}>\n                                {option}\n                            </Select.Option>\n                        ))}\n                    </Select>\n                </Col>\n                <Col xs="24" sm="12" lg="12">\n                    <Select placeholder="Select City" disabled value="Beijing">\n                        {options.map((option, index) => (\n                            <Select.Option key={option} disabled={index === 3} value={option}>\n                                {option}\n                            </Select.Option>\n                        ))}\n                    </Select>\n                </Col>\n            </Row>\n        </div>\n    </div>\n}\n```\n'}),a.createElement("h2",null,"Multi"),a.createElement("div",{className:"examples"},a.createElement(i.X2,{gap:"16px",style:{width:500}},a.createElement(i.JX,{span:"24"},a.createElement(i.Ph,{placeholder:"Select City",multi:!0,defaultValue:["Disabled"]},t.map((function(e,n){return a.createElement(i.Ph.Option,{key:e,disabled:3===n,value:e},e)})))))),a.createElement(o.Z,{children:'\n```javascript\nexport default () => {\n    const options = [\'Beijing\', \'Shanghai\', \'Guangzhou\', \'Disabled\'];\n    return <div className="examples">\n        <Row gap="16px">\n            <Col span="24">\n                <Select placeholder="Select City" multi defaultValue={["Disabled"]}>\n                    {options.map((option, index) => (\n                        <Select.Option key={option} disabled={index === 3} value={option}>\n                            {option}\n                        </Select.Option>\n                    ))}\n                </Select>\n            </Col>\n        </Row>\n    </div>\n}\n```\n    '}),a.createElement("h2",null,"No Border"),a.createElement("div",{className:"examples"},a.createElement(i.X2,{gap:"16px"},a.createElement(i.JX,{xs:"24",sm:"12",lg:"6"},a.createElement(i.Ph,{placeholder:"Select City",borderless:!0},t.map((function(e,n){return a.createElement(i.Ph.Option,{key:e,disabled:3===n,value:e},e)})))))),a.createElement(o.Z,{children:'\n```javascript\nexport default () => {\n    const options = [\'Beijing\', \'Shanghai\', \'Guangzhou\', \'Disabled\'];\n    return <div className="examples">\n        <Row gap="16px">\n            <Col xs="24" sm="12" lg="6">\n                <Select placeholder="Select City" multi borderless size="small">\n                    {options.map((option, index) => (\n                        <Select.Option key={option} disabled={index === 3} value={option}>\n                            {option}\n                        </Select.Option>\n                    ))}\n                </Select>\n            </Col>\n        </Row>\n    </div>\n}\n```\n    '}),a.createElement(o.Z,{children:"\n## API\n\n| Property  | Description | Type | Default |\n| --------- | ------- | ------- | ------- |\n| type      | PropTypes.oneOf(['text', 'password']) | string | text |\n| size      | PropTypes.oneOf(['large', 'medium', 'small']) | string | medium |\n| disabled  | disabled state of input\t | boolean | false |\n    "}))}}}]);