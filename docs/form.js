(self.webpackChunk_teatak_ui=self.webpackChunk_teatak_ui||[]).push([[680],{63065:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var a=n(22122),l=n(81253),r=n(67294),i=n(38456),c=n.n(i),s=n(10043),d=n.n(s),o=n(46914),m=n(80682),u=["node","inline","className","children"],p={code:function(e){e.node;var t=e.inline,n=e.className,i=e.children,c=(0,l.Z)(e,u),s=/language-(\w+)/.exec(n||"");return!t&&s?r.createElement(o.Z,(0,a.Z)({style:m.Z,language:s[1],PreTag:"div",children:String(i).replace(/\n$/,"")},c)):r.createElement("code",(0,a.Z)({className:n},c),i)}};const f=function(e){return r.createElement("div",{className:"markdown"},r.createElement(c(),{components:p,children:e.children,remarkPlugins:[d()]}))}},90812:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>i});var a=n(67294),l=n(11021),r=n(63065);const i=function(){return a.createElement("div",null,a.createElement("div",{className:"examples"},a.createElement("div",null,"default:"),a.createElement(l.l0,{onSubmit:function(e,t,n){e.preventDefault(),console.log(e,t,n)}},a.createElement(l.l0.Item,{name:"name",tip:"您可以使用字母、数字和英文句点",rules:[{required:!0,message:"请输入用户名!"},{type:"string",message:"请输入5-20位有效的真实姓名!",pattern:/^.{5,20}$/}]},a.createElement(l.II,{style:{width:"100%"}})),a.createElement(l.zx,{color:"primary",type:"filled",htmlType:"submit"},"Submit"))),a.createElement(r.Z,{children:'\n> color: primary,danger\n```javascript\nimport React from "react";\nimport {Button} from "@teatak/ui";\nimport {\n    Delete,\n    PhotoCamera,\n    AddCircle\n} from \'@material-ui/icons\';\n\nexport default () => <div className="examples">\n    <div>default:</div>\n</div>    \n```\n        '}),a.createElement(r.Z,{children:"\n## API\n\n| Property  | Description | Type | Default |\n| --------- | ------- | ------- | ------- |\n| type      | can be set to 'filled','outlined','default' | string | default |\n| size      | can be set to small large or default | string | default |\n| rounded   | rounded | boolean | false |\n| disabled  | disabled state of button\t | boolean | false |\n| htmlType  | htmlType | string | button |\n| onClick   | set the handler to handle click event\t| (event) => void | - |\n        "}))}}}]);