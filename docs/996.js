(self.webpackChunk_teatak_ui=self.webpackChunk_teatak_ui||[]).push([[996],{85304:(e,t,n)=>{"use strict";n.d(t,{Z:()=>v});var o=n(22122),i=n(81253),l=n(67294),a=n(38456),c=n.n(a),r=n(10043),s=n.n(r),m=n(46914),d=n(86032),p=["node","inline","className","children"],u={code:function(e){e.node;var t=e.inline,n=e.className,a=e.children,c=(0,i.Z)(e,p),r=/language-(\w+)/.exec(n||"");return!t&&r?l.createElement(m.Z,(0,o.Z)({style:d.Z,language:r[1],PreTag:"div",children:String(a).replace(/\n$/,"")},c)):l.createElement("code",(0,o.Z)({className:n},c),a)}};const v=function(e){return l.createElement("div",{className:"markdown"},l.createElement(c(),{components:u,children:e.children,remarkPlugins:[s()]}))}},38996:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>c});var o=n(34699),i=n(67294),l=n(71959),a=n(85304);const c=function(){var e=(0,i.useState)(!1),t=(0,o.Z)(e,2);return t[0],t[1],i.createElement("div",{className:"page"},i.createElement("h1",null,"Trigger"),i.createElement("h2",null,"position"),i.createElement("div",{className:"examples"},i.createElement(l.T,null,i.createElement(l.xz,{position:"top",content:i.createElement("div",null,"this is content")},i.createElement(l.zx,{rounded:!0,type:"outlined"},"top")),i.createElement(l.xz,{position:"topLeft",content:i.createElement("div",null,"this is content")},i.createElement(l.zx,{rounded:!0,type:"outlined"},"topLeft")),i.createElement(l.xz,{position:"topRight",content:i.createElement("div",null,"this is content")},i.createElement(l.zx,{rounded:!0,type:"outlined"},"topRight")),i.createElement(l.xz,{position:"bottom",content:i.createElement("div",null,"this is content")},i.createElement(l.zx,{rounded:!0,type:"outlined"},"bottom")),i.createElement(l.xz,{position:"bottomLeft",content:i.createElement("div",null,"this is content")},i.createElement(l.zx,{rounded:!0,type:"outlined"},"bottomLeft")),i.createElement(l.xz,{position:"bottomRight",content:i.createElement("div",null,"this is content")},i.createElement(l.zx,{rounded:!0,type:"outlined"},"bottomRight")))),i.createElement(a.Z,{children:'\n```javascript\nexport default () => {\n    const [visible, setVisible] = useState(false)\n    return <div className="page">\n        <h1>Trigger</h1>\n        <h2>position</h2>\n        <div className="examples">\n            <Space>\n                <Button type="outlined" onClick={(e) => {\n                    e.stopPropagation()\n                    setVisible(!visible)\n                }}>click to trigger</Button>\n                <Trigger\n                    visible={visible}\n                    position="topLeft"\n                    content={<div>content</div>}\n                    onVisibleChange={(v) => {\n                        setVisible(v)\n                    }}\n                >\n                    <Button type="outlined">click</Button>\n                </Trigger>\n            </Space>\n        </div>\n    </div>\n}\n```\n'}),i.createElement("h2",null,"tooltip"),i.createElement("div",{className:"examples"},i.createElement(l.xz,{tooltip:!0,content:i.createElement("div",null,"tooltip content on hover")},i.createElement(l.zx,{type:"filled"},"hover"))),i.createElement(a.Z,{children:"\n## API\n\n| Property  | Description | Type | Default |\n| --------- | ------- | ------- | ------- |\n| action           | PropTypes.oneOf(['click', 'hover']) | string | click |\n| position         | PropTypes.oneOf(['top', 'topLeft', 'topRight', 'bottom', 'bottomLeft', 'bottomRight']) | string | bottom |\n| autoFit          | auto fit | boolean | true |\n| arrow            | show arrow | boolean | true |\n| tooltip          | tooltip style | boolean | false |\n| visible          | visible | boolean | false |\n| defaultVisible   | defaultVisible | boolean | false |\n| content          | pop content | element | - |\n| transitionClass  | transition class suffix | string | fade |\n| onVisibleChange  | call back | (visible: boolean) => void | - |\n\n"}))}}}]);