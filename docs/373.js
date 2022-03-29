(self.webpackChunk_teatak_ui=self.webpackChunk_teatak_ui||[]).push([[373],{85304:(e,n,t)=>{"use strict";t.d(n,{Z:()=>E});var l=t(22122),a=t(81253),o=t(67294),c=t(38456),i=t.n(c),r=t(10043),s=t.n(r),d=t(46914),u=t(86032),m=["node","inline","className","children"],p={code:function(e){e.node;var n=e.inline,t=e.className,c=e.children,i=(0,a.Z)(e,m),r=/language-(\w+)/.exec(t||"");return!n&&r?o.createElement(d.Z,(0,l.Z)({style:u.Z,language:r[1],PreTag:"div",children:String(c).replace(/\n$/,"")},i)):o.createElement("code",(0,l.Z)({className:t},i),c)}};const E=function(e){return o.createElement("div",{className:"markdown"},o.createElement(i(),{components:p,children:e.children,remarkPlugins:[s()]}))}},11373:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>i});var l=t(34699),a=t(67294),o=t(4964),c=t(85304);const i=function(){var e=(0,a.useState)(!1),n=(0,l.Z)(e,2),t=n[0],i=n[1],r=function(){i(!1)};return a.createElement("div",{className:"page"},a.createElement("h1",null,"Modal"),a.createElement("div",{className:"examples"},a.createElement(o.zx,{type:"outlined",onClick:function(){i(!0)}},"Open Modal"),a.createElement(o.u_,{visible:t,onClose:r},a.createElement(o.u_.Title,null,"Title"),a.createElement(o.u_.Content,{dividers:!0},a.createElement("p",null,"Some contents..."),a.createElement("p",null,"Some contents..."),a.createElement("p",null,"Some contents...")),a.createElement(o.u_.Actions,null,a.createElement(o.T,null,a.createElement(o.zx,{type:"outlined",color:"primary",onClick:r},"Return"),a.createElement(o.zx,{type:"filled",color:"primary"},"Submit"),a.createElement(o.zx,{type:"filled",color:"secondary"},"Click"))))),a.createElement(c.Z,{children:'\n```javascript\nexport default () => <div className="page">\n  <h1>Modal</h1>\n  <div className="examples">\n    <Button type="outlined" onClick={showModal}>Open Modal</Button>\n    <Modal\n      visible={isModalVisible}\n      onClose={handleClose}\n    >\n      <Modal.Title>\n        Title\n      </Modal.Title>\n      <Modal.Content dividers>\n        <p>Some contents...</p>\n        <p>Some contents...</p>\n        <p>Some contents...</p>\n      </Modal.Content>\n      <Modal.Actions>\n        <Space>\n          <Button type="outlined" color="primary" onClick={handleClose}>\n            Return\n          </Button>\n          <Button type="filled" color="primary">\n            Submit\n          </Button>\n          <Button\n            type="filled"\n            color="secondary"\n          >\n            Click\n          </Button>\n        </Space>\n      </Modal.Actions>\n    </Modal>\n  </div>    \n</div>\n```\n        '}),a.createElement(c.Z,{children:"\n## API\n\n| Property  | Description | Type | Default |\n| --------- | ------- | ------- | ------- |\n\n        "}))}}}]);