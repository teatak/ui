(self.webpackChunk_teatak_ui=self.webpackChunk_teatak_ui||[]).push([[93],{85304:(e,n,a)=>{"use strict";a.d(n,{Z:()=>h});var l=a(22122),t=a(81253),c=a(67294),r=a(38456),i=a.n(r),d=a(10043),o=a.n(d),u=a(46914),s=a(86032),p=["node","inline","className","children"],m={code:function(e){e.node;var n=e.inline,a=e.className,r=e.children,i=(0,t.Z)(e,p),d=/language-(\w+)/.exec(a||"");return!n&&d?c.createElement(u.Z,(0,l.Z)({style:s.Z,language:d[1],PreTag:"div",children:String(r).replace(/\n$/,"")},i)):c.createElement("code",(0,l.Z)({className:a},i),r)}};const h=function(e){return c.createElement("div",{className:"markdown"},c.createElement(i(),{components:m,children:e.children,remarkPlugins:[o()]}))}},51093:(e,n,a)=>{"use strict";a.r(n),a.d(n,{default:()=>d});var l=a(34699),t=a(67294),c=a(85304),r=a(46761),i=a(9872);const d=function(){var e=(0,t.useState)(!1),n=(0,l.Z)(e,2),a=n[0],d=n[1];return t.createElement("div",{className:"page"},t.createElement("h1",null,"Check"),t.createElement("h2",null,"自定义"),t.createElement("div",{className:"examples"},t.createElement(i.T,null,t.createElement(i.Jr,{checked:a},"选择"),t.createElement(i.Jr,{checked:a},(function(e,n){return e?t.createElement("div",{style:{background:"#d0d0d0",padding:"10px"}},t.createElement(r.Z,null)):t.createElement("div",{style:{padding:"10px"}},t.createElement(r.Z,null))})),t.createElement(i.zx,{onClick:function(e){d(!a)},type:"outlined"},"点击选择"))),t.createElement(c.Z,{children:'\n```javascript\nexport default () => {\n    const [checked, setChecked] = useState(false)\n    return <div className="examples">\n        <Space>\n            <Check checked={checked}>选择</Check>\n            <Check checked={checked}>\n                {(checked, indeterminate) => {\n                    return checked ?\n                        <div style={{ background: "#d0d0d0", padding: "10px" }}><Delete /></div> :\n                        <div style={{ padding: "10px" }}><Delete /></div>\n                }}\n            </Check>\n            <Button onClick={(e) => {\n                setChecked(!checked)\n            }} type="outlined" >点击选择</Button>\n        </Space>\n    </div>    \n}  \n```\n'}),t.createElement("h2",null,"Indeterminate"),t.createElement("div",{className:"examples"},t.createElement(i.T,null,t.createElement(i.Jr,{indeterminate:!0},"选择"))),t.createElement(c.Z,{children:'\n```javascript\nexport default () => {\n    return <div className="examples">\n        <Space>\n            <Check indeterminate>选择</Check>\n        </Space>\n    </div>    \n}  \n```\n'}),t.createElement("h2",null,"Group"),t.createElement("div",{className:"examples"},t.createElement(i.Jr.Group,{checkAll:"全选",onChange:function(e){console.log(e)},defaultValue:["2"]},t.createElement(i.X2,{gap:[8,8]},[{label:"Option 1",value:"1"},{label:"Option 2",value:"2",disabled:!0},{label:"Option 3",value:"3"},{label:"Option 4",value:"4"}].map((function(e){var n=e.label,a=e.value;return t.createElement(i.JX,{span:6,key:a},t.createElement(i.Jr,{disabled:e.disabled,value:a},n))}))))),t.createElement(c.Z,{children:"\n```javascript\nexport default () => {\n    const options = [\n        {\n            label: 'Option 1',\n            value: '1',\n        },\n        {\n            label: 'Option 2',\n            value: '2',\n            disabled: true,\n        },\n        {\n            label: 'Option 3',\n            value: '3',\n        },\n        {\n            label: 'Option 4',\n            value: '4',\n        },\n    ];\n    return <div className=\"examples\">\n        <Space>\n            <Check.Group\n                checkAll=\"全选\"\n                onChange={(newValue) => {\n                    console.log(newValue)\n                }}\n                defaultValue={[\"2\"]}\n            >\n                <Row gap={[8, 8]}>\n                    {options.map((option) => {\n                        const label = option.label\n                        const checkValue = option.value\n                        return (\n                            <Col span={6} key={checkValue}>\n                                <Check\n                                    disabled={option.disabled}\n                                    value={checkValue}\n                                >\n                                    {label}\n                                </Check>\n                            </Col>\n                        );\n                    })}\n                </Row>\n            </Check.Group>         \n        </Space>\n    </div>    \n}  \n```\n"}),t.createElement(c.Z,{children:"\n## API\n\n### Check\n\n| Property  | Description | Type | Default |\n| --------- | ------- | ------- | ------- |\n| checked   | checked | boolean | - |\n| defaultChecked | defaultChecked | boolean | - |\n| indeterminate  | indeterminate | boolean | - |\n| value     | value | string | - |\n\n### Check.Group\n\n| Property  | Description | Type | Default |\n| --------- | ------- | ------- | ------- |\n| direction | direction | 'horizontal', 'vertical' | horizontal |\n| options   | options | array,{value,label,disabled} | - |\n| value     | value   | [] | - |\n        "}))}}}]);