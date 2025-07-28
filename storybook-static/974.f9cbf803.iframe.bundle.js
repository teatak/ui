"use strict";(self.webpackChunk_teatak_ui=self.webpackChunk_teatak_ui||[]).push([[974],{"./src/components/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Button_Button});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),CSSTransition=__webpack_require__("./node_modules/react-transition-group/esm/CSSTransition.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),defaultTheme=__webpack_require__("./src/style/defaultTheme.ts"),theme=__webpack_require__("./src/style/theme.tsx");const StyledButton=styled_components_browser_esm.Ay.button`
    ${props=>{const options=props.$options,{prefixClass:_,variant,color,outlined,elevation=[0,0,0],size,shape,icon}=options;let baseSize=8,textFontSize=14,iconFontSize=12;switch(size){case"xs":baseSize=6,textFontSize=11,iconFontSize=2*baseSize;break;case"sm":baseSize=7,textFontSize=12,iconFontSize=2*baseSize;break;case"md":baseSize=8,textFontSize=14,iconFontSize=2*baseSize;break;case"lg":baseSize=9,textFontSize=14,iconFontSize=2*baseSize;break;case"xl":baseSize=10,textFontSize=16,iconFontSize=2*baseSize}let palette=defaultTheme.A.vars.palette[color];void 0===palette&&(palette=defaultTheme.A.vars.palette.primary);let foreColor,background,backgroundRipple,hoverOpacity,activeOpacity,outlineColor="neutral"===color?defaultTheme.A.vars.palette.primary.main:palette.main,borderColor=outlined?"filled"===variant?palette.dark:palette.main:"transparent";switch(variant){case"filled":foreColor=palette.onMain,background=palette.main,backgroundRipple=defaultTheme.A.vars.palette.common.black,hoverOpacity=.2,activeOpacity=.3;break;case"tonal":foreColor=palette.onContainer,background=palette.container,backgroundRipple=palette.main,hoverOpacity=.1,activeOpacity=.2;break;default:foreColor=palette.onContainer,background="none",backgroundRipple=palette.main,hoverOpacity=.1,activeOpacity=.2}return styled_components_browser_esm.AH`
            --Button-baseSize: ${baseSize};
            --Button-elevationLevel: ${elevation[0]};
            --Icon-fontSize: ${iconFontSize};
            --Text-fontSize: ${textFontSize};
            font-family: var(--Button-fontFamily, ${defaultTheme.A.vars.fontFamily.body});
            font-size: calc(var(--Text-fontSize) * 1px);
            line-height: ${defaultTheme.A.vars.lineHeight.md};
            min-height: var(--Button-minHeight, calc(var(--Button-baseSize) * 4px));
            margin-inline-start: var(--Button-marginInlineStart);
            margin-inline-end: var(--Button-marginInlineEnd);
            padding-inline: calc(var(--Button-baseSize) * 1px);
            box-sizing: border-box;
            position: relative;
            display: inline-flex;
            vertical-align: middle;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            text-decoration: none;
            user-select: none;
            border: none;
            outline: none;
            opacity: 1;
            color: var(--Button-color, ${foreColor});
            background:  var(--Button-background, ${background});
            box-shadow: 
                0px calc(1px*(clamp(0,var(--Button-elevationLevel),1) + clamp(0,var(--Button-elevationLevel) - 3,1) + 2*clamp(0,var(--Button-elevationLevel) - 4,1))) calc(1px*(2*clamp(0,var(--Button-elevationLevel),1) + clamp(0,var(--Button-elevationLevel) - 2,1) + clamp(0,var(--Button-elevationLevel) - 4,1))) 0px var(--Button-shadowColor, rgba(0, 0, 0, 0.2)),
                0px calc(1px*(clamp(0,var(--Button-elevationLevel),1) + clamp(0,var(--Button-elevationLevel) - 1,1) + 2*clamp(0,var(--Button-elevationLevel) - 2,3))) calc(1px*(3*clamp(0,var(--Button-elevationLevel),2) + 2*clamp(0,var(--Button-elevationLevel) - 2,3))) calc(1px*(clamp(0,var(--Button-elevationLevel),4) + 2*clamp(0,var(--Button-elevationLevel) - 4,1))) var(--Button-shadowColor, rgba(0, 0, 0, 0.12));
            transition: 
                width 150ms ease 0ms, 
                height 150ms ease 0ms, 
                box-shadow 150ms ease 0ms;

            & svg {
                width: 1em;
                height: 1em;
                fill: currentColor;
                font-size: calc(var(--Icon-fontSize) * 1px);
            }
            & .${_}-span {
                z-index: 1;
                display: flex;
                position: relative;
                justify-content: center;
                align-items: center;
                margin-inline: calc(var(--Button-baseSize) * 1px);
            }
            & .${_}-start-decorator, & .${_}-end-decorator {
                z-index: 1;
                position: relative;
                display: inline-flex;
                align-items: center;
                &.${_}-in-enter {
                    width: 0;
                }
                &.${_}-in-enter-active  {
                    width: calc(var(--Icon-fontSize) * 1px);
                    transition: width 150ms ease 0ms;
                }
                &.${_}-in-exit {
                    width: calc(var(--Icon-fontSize) * 1px);
                }
                &.${_}-in-exit-active {
                    width: 0;
                    transition: width 150ms ease 0ms;
                }
            }
            &.${_}-loading {
                opacity: 0.7;
                cursor: default;
                & .${_}-span {
                    & .${_}-span-text {
                        display: inline-flex;
                        line-height: 1;
                        color: transparent;
                    }
                    & .${_}-span-loading {
                        display: inline-flex;
                        position: absolute;
                        left: 50%;
                        transform: translate(-50%);
                    }
                }
            }
            ${"round"===shape?styled_components_browser_esm.AH`
                border-radius: var(--Button-radius, calc(var(--Button-baseSize) * 2px));
            `:styled_components_browser_esm.AH`
                border-radius: var(--Button-radius, ${defaultTheme.A.vars.radius.sm});
            `}
            &::after, &::before {
                border-radius: inherit;
            }
            ${icon&&styled_components_browser_esm.AH`
                & .${_}-span {
                    display: flex;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    margin: 0;
                }                
            `}
            &::before {
                background: ${backgroundRipple};
                content: "";
                position: absolute;
                inset: 0;
                opacity: 0;            
                transition: opacity 150ms ease 0ms; 
            }
            &::after {
                content: "";
                position: absolute;
                inset: 0;
                border-width: 1px;
                border-style: solid;
                border-color: var(--Button-borderColor, ${borderColor});
                outline-offset: var(--Button-outlineOffset, 1px);
                outline-color: ${outlineColor};
                outline-width: 0px;
                outline-style: solid;
                transition: 
                    opacity 150ms ease 0ms,
                    outline-width 250ms cubic-bezier(0, 0, 0, 3) 0ms;
            }
            &:not(:disabled):not(.${_}-loading) {
                &:hover {
                    --Button-elevationLevel: ${elevation[1]};
                    &::before {
                        opacity: ${hoverOpacity};
                    }
                }
                &:active,&.clicked {
                    --Button-elevationLevel: ${elevation[2]};
                    &::before {
                        opacity: ${activeOpacity};
                    }
                }
                &:focus-visible {
                    &::after {
                        z-index: 1;
                        outline-width: 2px;
                    }
                }
            }
            &.${_}-disabled, &:disabled {
                opacity: 0.5;
                cursor: default;
            }
        `}}
    ${props=>(0,theme.rR)("TuiButton",props.$options)}
`;var Loading=__webpack_require__("./src/icons/custom/Loading/Loading.tsx"),ControlContext=__webpack_require__("./src/components/Control/ControlContext.ts"),common=__webpack_require__("./src/helper/common.ts");const Button=(0,react.forwardRef)(((inProps,ref)=>{const ctx=(0,react.useContext)(ControlContext.A),props=(0,common.v6)(ctx,inProps,{prefixClass:"tui-button",variant:"filled",outlined:!1,color:"primary",shape:"square",size:"md",loadingPosition:"start",type:"button"}),{prefixClass,style,className,variant,outlined,elevation,color,shape,size,disabled,icon,loading,loadingPosition,href,type,onClick,styleOverrides,...otherProps}=props;let{startDecorator,endDecorator,children,...rest}=otherProps;const buttonRef=(0,react.useRef)(null);(0,react.useImperativeHandle)(ref,(()=>buttonRef.current),[]);const timerRef=(0,react.useRef)(null);(0,react.useEffect)((()=>()=>clearTimeout(timerRef.current)),[]);const[clicked,setClicked]=(0,react.useState)(!1),classNames=classnames_default()(prefixClass,`${prefixClass}-${variant}`,`${prefixClass}-size-${size}`,`${prefixClass}-color-${color}`,`${prefixClass}-shape-${shape}`,{[`${prefixClass}-outlined`]:outlined,[`${prefixClass}-elevation_${elevation?.join("_")}`]:elevation,[`${prefixClass}-disabled`]:disabled,[`${prefixClass}-loading`]:loading,[`${prefixClass}-icon`]:icon,[`${prefixClass}-link`]:href,clicked},className);if(loading)if(icon)children=(0,jsx_runtime.jsx)(Loading.A,{});else{if("center"===loadingPosition)children=(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("span",{className:prefixClass+"-span-text",children}),(0,jsx_runtime.jsx)("span",{className:prefixClass+"-span-loading",children:(0,jsx_runtime.jsx)(Loading.A,{})})]})}icon&&(startDecorator=null,endDecorator=null);const nodeRef=react.useRef(null),renderDecorator=pos=>{if(!icon)return"start"===pos&&startDecorator?(0,jsx_runtime.jsx)("span",{className:prefixClass+"-start-decorator",children:loading&&"start"===loadingPosition?(0,jsx_runtime.jsx)(Loading.A,{}):startDecorator}):"end"===pos&&endDecorator?(0,jsx_runtime.jsx)("span",{className:prefixClass+"-end-decorator",children:loading&&"end"===loadingPosition?(0,jsx_runtime.jsx)(Loading.A,{}):endDecorator}):(0,jsx_runtime.jsx)(CSSTransition.A,{in:!(!loading||loadingPosition!==pos),timeout:150,classNames:prefixClass+"-in",unmountOnExit:!0,nodeRef,children:(0,jsx_runtime.jsx)("span",{ref:nodeRef,className:prefixClass+"-"+pos+"-decorator",children:(0,jsx_runtime.jsx)(Loading.A,{})})})};return(0,jsx_runtime.jsxs)(StyledButton,{ref:buttonRef,style,className:classNames,type:href?void 0:type,as:href?"a":"button",href,$options:props,onClick:event=>{if(loading||disabled)return event.stopPropagation(),void event.preventDefault();onClick&&onClick(event),setClicked(!0),timerRef&&(timerRef.current=setTimeout((()=>{setClicked(!1)}),100))},disabled,tabIndex:loading||disabled?-1:void 0,...rest,children:[renderDecorator("start"),(0,jsx_runtime.jsx)("span",{className:prefixClass+"-span",children}),renderDecorator("end")]})})),Button_Button=Button;Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"DefaultVariants[number]",raw:"typeof DefaultVariants[number]"},description:""},color:{required:!1,tsType:{name:"union",raw:"| ExcludeValue<U, false>\n| Exclude<T, IncludeValue<U, false>>",elements:[{name:"unknown"},{name:"Exclude",elements:[{name:"DefaultColorNames[number]",raw:"typeof DefaultColorNames[number]"},{name:"unknown"}],raw:"Exclude<T, IncludeValue<U, false>>"}]},description:""},outlined:{required:!1,tsType:{name:"boolean"},description:""},elevation:{required:!1,tsType:{name:"tuple",raw:"[number, number, number]",elements:[{name:"number"},{name:"number"},{name:"number"}]},description:""},shape:{required:!1,tsType:{name:"union",raw:"'round' | 'square'",elements:[{name:"literal",value:"'round'"},{name:"literal",value:"'square'"}]},description:""},size:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},prefixClass:{required:!1,tsType:{name:"string"},description:""},styleOverrides:{required:!1,tsType:{name:"union",raw:"StyledObject | ((ownerState: ComponentOwnerState) => StyledObject | RuleSet<object>)",elements:[{name:"StyledObject"},{name:"unknown"}]},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""},icon:{required:!1,tsType:{name:"boolean"},description:""},loadingPosition:{required:!1,tsType:{name:"union",raw:"'start' | 'center' | 'end'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'center'"},{name:"literal",value:"'end'"}]},description:""},href:{required:!1,tsType:{name:"string"},description:""},startDecorator:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},endDecorator:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}},composes:["Omit"]}},"./src/components/Control/ControlContext.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./node_modules/react/index.js").createContext({})},"./src/icons/custom/Loading/Loading.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),classnames__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/classnames/index.js")),classnames__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const dasharray=styled_components__WEBPACK_IMPORTED_MODULE_3__.i7`
    0% {
        stroke-dasharray: 1px, 200px;
        stroke-dashoffset: 0;
    }
    50% {
        stroke-dasharray: 100px, 200px;
        stroke-dashoffset: -15px;
    }
    100% {
        stroke-dasharray: 100px, 200px;
        stroke-dashoffset: -125px;
    }
`,rotate=styled_components__WEBPACK_IMPORTED_MODULE_3__.i7`
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
`,Svg=styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.svg`
    animation: 1.4s linear 0s infinite normal none running ${rotate};
    & circle {
        stroke: currentColor;
        animation: 1.4s ease-in-out 0s infinite normal none running ${dasharray};
    }
`,Loading=props=>{const{className,...rest}=props,classNames=classnames__WEBPACK_IMPORTED_MODULE_2___default()("tui-icon-loading",className);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Svg,{className:classNames,viewBox:"0 0 44 44",...rest,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle",{cx:"22",cy:"22",r:"20",fill:"none",strokeWidth:"4",strokeLinecap:"round"})})},__WEBPACK_DEFAULT_EXPORT__=Loading;Loading.__docgenInfo={description:"",methods:[],displayName:"Loading"}}}]);
//# sourceMappingURL=974.f9cbf803.iframe.bundle.js.map