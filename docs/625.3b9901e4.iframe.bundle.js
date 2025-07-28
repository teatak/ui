"use strict";(self.webpackChunk_teatak_ui=self.webpackChunk_teatak_ui||[]).push([[625],{"./src/components/Input/Input.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Input_Input});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),defaultTheme=__webpack_require__("./src/style/defaultTheme.ts"),theme=__webpack_require__("./src/style/theme.tsx");const StyledInputRoot=styled_components_browser_esm.Ay.div`
    ${props=>{const options=props.$options,{prefixClass:_,shape,size,elevation=[0,0,0],variant,color,outlined}=options;let baseSize=8,textFontSize=14,iconFontSize=12;switch(size){case"xs":baseSize=6,textFontSize=11,iconFontSize=2*baseSize;break;case"sm":baseSize=7,textFontSize=12,iconFontSize=2*baseSize;break;case"md":baseSize=8,textFontSize=14,iconFontSize=2*baseSize;break;case"lg":baseSize=9,textFontSize=14,iconFontSize=2*baseSize;break;case"xl":baseSize=10,textFontSize=16,iconFontSize=2*baseSize}let palette=defaultTheme.A.vars.palette[color];void 0===palette&&(palette=defaultTheme.A.vars.palette.primary);let outlineColor="neutral"===color?defaultTheme.A.vars.palette.primary.main:palette.main,borderColor=outlined?"filled"===variant?"neutral"===color?defaultTheme.A.vars.palette.primary.dark:palette.dark:"neutral"===color?defaultTheme.A.vars.palette.primary.main:palette.main:"transparent";const colorRewrite="filled"===variant?palette[5]:palette[90];let foreColor,background,backgroundRipple,backgroundFocus,foreColorDisabled,backgroundDisabled,borderColorDisabled;switch(variant){case"filled":foreColor=palette.onMain,background=palette.main,backgroundRipple=palette.onContainer,backgroundFocus=palette.main;break;case"tonal":foreColor=palette.onLight,background=palette.light,backgroundRipple=palette.main,backgroundFocus="transparent";break;default:foreColor=palette.onContainer,background="none",backgroundRipple="transparent",backgroundFocus="transparent"}return foreColorDisabled=defaultTheme.A.vars.palette.neutral.container,backgroundDisabled=defaultTheme.A.vars.palette.neutral.light,borderColorDisabled=outlined?defaultTheme.A.vars.palette.neutral.container:"transparent",styled_components_browser_esm.AH`
            --Input-baseSize: ${baseSize};
            --Icon-fontSize: ${iconFontSize};
            --Text-fontSize: ${textFontSize};
            --Input-minHeight: calc(var(--Input-baseSize) * 4px);
            --Input-decoratorChildHeight: calc((var(--Input-baseSize) - 1) * 4px);
            --Input-decoratorChildOffset: calc(var(--Input-baseSize) * 1px - 2px);
            --Input-elevationLevel: ${elevation[0]};
            ${"round"===shape?styled_components_browser_esm.AH`
                --Input-decoratorChildRadius: calc((var(--Input-baseSize) - 1) * 2px);
            `:styled_components_browser_esm.AH`
                --Input-decoratorChildRadius: calc(var(--Input-radius, ${defaultTheme.A.vars.radius.sm}) - 2px);
            `}
            cursor: text;
            display: flex;
            position: relative;
            box-sizing: border-box;
            width: 100%;
            font-family: var(--Input-fontFamily, ${defaultTheme.A.vars.fontFamily.body});
            font-size: calc(var(--Text-fontSize) * 1px);
            line-height: ${defaultTheme.A.vars.lineHeight.md};
            min-height: var(--Input-minHeight);
            color: var(--Input-color, ${foreColor});
            background:  var(--Input-background, ${background});
            border: none;
            outline: none;
            box-shadow: 
                0px calc(1px*(clamp(0,var(--Input-elevationLevel),1) + clamp(0,var(--Input-elevationLevel) - 3,1) + 2*clamp(0,var(--Input-elevationLevel) - 4,1))) calc(1px*(2*clamp(0,var(--Input-elevationLevel),1) + clamp(0,var(--Input-elevationLevel) - 2,1) + clamp(0,var(--Input-elevationLevel) - 4,1))) 0px var(--Input-shadowColor, rgba(0, 0, 0, 0.2)),
                0px calc(1px*(clamp(0,var(--Input-elevationLevel),1) + clamp(0,var(--Input-elevationLevel) - 1,1) + 2*clamp(0,var(--Input-elevationLevel) - 2,3))) calc(1px*(3*clamp(0,var(--Input-elevationLevel),2) + 2*clamp(0,var(--Input-elevationLevel) - 2,3))) calc(1px*(clamp(0,var(--Input-elevationLevel),4) + 2*clamp(0,var(--Input-elevationLevel) - 4,1))) var(--Input-shadowColor, rgba(0, 0, 0, 0.12));
            transition: 
                opacity 150ms ease 0ms, 
                border-color 150ms ease 0ms, 
                background-color ease 0ms, 
                outline 150ms ease 0ms,
                box-shadow 150ms ease 0ms;
       
            &::before {
                content: "";     
                position: absolute;       
                pointer-events: none;
                background: ${backgroundRipple};
                inset: 0;
                opacity: 0;            
                transition: opacity 150ms ease 0ms; 
            }
            &::after {
                content: "";
                position: absolute;
                pointer-events: none;
                inset: 0;
                border-width: 1px;
                border-style: solid;
                border-color: var(--Input-borderColor, ${borderColor});
                outline-offset: -1px;
                outline-color: ${outlineColor};
                outline-width: 0px;
                outline-style: solid;
                transition: 
                    opacity 150ms ease 0ms,
                    outline 150ms cubic-bezier(0.18, 0.89, 0.32, 1.28) 0ms;
            }
            & svg {
                user-select: none;
                width: 1em;
                height: 1em;
                fill: currentColor;
                font-size: calc(var(--Icon-fontSize) * 1px);
            }
            &:has(\.${_}-element:not(:disabled)) {
                &:hover {
                    --Input-elevationLevel: ${elevation[1]};
                    &::before {
                        opacity: .1;
                    }
                }
            }
            /* has input focus */
            &:has(\.${_}-element:focus) {
                --Input-elevationLevel: ${elevation[2]};
                background: ${backgroundFocus};
                &::before {
                    opacity: 0;
                }
                &::after {
                    z-index: 1;
                    outline-width: 2px;
                }
            }
            & .${_} {
                display: inline-flex;
                flex: auto;
                & .${_}-prefix {
                    margin-inline-start: calc(var(--Input-baseSize) * 1px);
                    display: inline-flex;
                    align-items: center;
                }
                & .${_}-element {
                    font-family: inherit;
                    outline: none;
                    margin: 0;
                    position: relative;
                    padding-inline: calc(var(--Input-baseSize) * 1px);
                    padding-block: 0px;
                    font-size: calc(var(--Text-fontSize) * 1px);
                    box-sizing: border-box;
                    border: none;
                    background: transparent;
                    text-overflow: ellipsis;
                    flex: auto;
                    line-height: inherit;

                    color: ${colorRewrite};
                    height: 100%;
                    &:-webkit-autofill,
                    &:-webkit-autofill:hover, 
                    &:-webkit-autofill:focus, 
                    &:-webkit-autofill:active{
                        color: ${colorRewrite} !important;
                        transition: background-color 5000s ease-in-out 0s;
                    }
                    &::placeholder {
                        color: ${colorRewrite};
                        opacity: 0.6;
                    }
                    &:disabled {
                        cursor: default;
                        color: ${foreColorDisabled};
                    }
                }
                & textarea.${_}-element {
                    padding-block: calc(var(--Input-baseSize) * 1px);
                }
                &:has(.${_}-prefix) {
                    & .${_}-element {
                        padding-inline-start: 0;
                    }
                }
                &:has(.${_}-suffix) {
                    & .${_}-element {
                        padding-inline-end: 0;
                    }
                }
                & .${_}-suffix {
                    margin-inline-end: calc(var(--Input-baseSize) * 1px);
                    display: inline-flex;
                    align-items: center;
                }
            }
            ${"round"===shape?styled_components_browser_esm.AH`
                border-radius: calc(var(--Input-baseSize) * 2px);
                
            `:styled_components_browser_esm.AH`
                border-radius: var(--Input-radius, ${defaultTheme.A.vars.radius.sm});
               
            `} 
            &::before, &::after {
                border-radius: inherit;
            }
            & .${_}-start-decorator {
                --Button-marginInlineStart: calc(var(--Input-decoratorChildOffset) * -1); 
                --Button-minHeight: var(--Input-decoratorChildHeight);
                --Button-outlineOffset: -1px;
                --Button-radius: var(--Input-decoratorChildRadius);

                --Checkbox-marginInlineStart: calc(var(--Input-decoratorChildOffset) * -1); 
                --Checkbox-marginInlineEnd: calc(var(--Input-decoratorChildOffset) * -1); 
                --Checkbox-minHeight: var(--Input-decoratorChildHeight);
                --Checkbox-inner-minHeight: calc((var(--Input-baseSize) - 1) * 2px + 2px);
                
                --Switch-marginInlineStart: calc(var(--Input-baseSize)  / 2 * -1px); 
                --Switch-marginInlineEnd: calc(var(--Input-baseSize) / 2 * -1px); 
               
                --Radio-marginInlineStart: calc(var(--Input-decoratorChildOffset) * -1); 
                --Radio-marginInlineEnd: calc(var(--Input-decoratorChildOffset) * -1); 
                --Radio-minHeight: var(--Input-decoratorChildHeight);
                --Radio-inner-minHeight: calc((var(--Input-baseSize) - 1) * 2px + 2px);
            
                display: inline-flex;
                position: relative;
                align-items: center;
                margin-inline-start: calc(var(--Input-baseSize) * 1px);
                &.${_}-in-enter {
                    opacity: 0;
                    margin-inline-start: 0;
                }
                &.${_}-in-enter-active  {
                    opacity: 1;
                    margin-inline-start: calc(var(--Input-baseSize) * 1px);
                    transition: 
                        opacity 150ms ease 50ms,
                        margin-inline-start 150ms ease 0ms;
                }
                &.${_}-in-exit {
                    opacity: 1;
                    margin-inline-start: calc(var(--Input-baseSize) * 1px);
                }
                &.${_}-in-exit-active {
                    opacity: 0;
                    margin-inline-start: 0;
                    transition: 
                        opacity 150ms ease 0ms,
                        margin-inline-start 150ms ease 0ms;
                } 
            }
            & .${_}-end-decorator {
                --Button-marginInlineEnd: calc(var(--Input-decoratorChildOffset) * -1); 
                --Button-minHeight: var(--Input-decoratorChildHeight);
                --Button-outlineOffset: -1px;
                --Button-radius: var(--Input-decoratorChildRadius);

                --Checkbox-marginInlineStart: calc(var(--Input-decoratorChildOffset) * -1); 
                --Checkbox-marginInlineEnd: calc(var(--Input-decoratorChildOffset) * -1); 
                --Checkbox-minHeight: var(--Input-decoratorChildHeight);
                --Checkbox-inner-minHeight: calc((var(--Input-baseSize) - 1) * 2px + 2px);

                --Switch-marginInlineStart: calc(var(--Input-baseSize)  / 2 * -1px); 
                --Switch-marginInlineEnd: calc(var(--Input-baseSize) / 2 * -1px); 
                
                --Radio-marginInlineStart: calc(var(--Input-decoratorChildOffset) * -1); 
                --Radio-marginInlineEnd: calc(var(--Input-decoratorChildOffset) * -1); 
                --Radio-minHeight: var(--Input-decoratorChildHeight);
                --Radio-inner-minHeight: calc((var(--Input-baseSize) - 1) * 2px + 2px);
               
                display: inline-flex;
                position: relative;
                align-items: center;
                margin-inline-end: calc(var(--Input-baseSize) * 1px);
                &.${_}-in-enter {
                    opacity: 0;
                    margin-inline-end: 0;
                }
                &.${_}-in-enter-active  {
                    opacity: 1;
                    margin-inline-end: calc(var(--Input-baseSize) * 1px);
                    transition: 
                        opacity 150ms ease 50ms,
                        margin-inline-end 150ms ease 0ms;
                }
                &.${_}-in-exit {
                    opacity: 1;
                    margin-inline-end: calc(var(--Input-baseSize) * 1px);
                }
                &.${_}-in-exit-active {
                    opacity: 0;
                    margin-inline-end: 0;
                    transition: 
                        opacity 150ms ease 0ms,
                        margin-inline-end 150ms ease 0ms;
                } 
            }
            &:has(\.${_}-element:disabled) {
                --Input-elevationLevel: ${elevation[0]};
                cursor: default;
                color: ${foreColorDisabled};
                background: ${backgroundDisabled};
                &::after {
                    border-color: rgb(${borderColorDisabled});
                }
            }
        `}}
    ${props=>(0,theme.rR)("TuiInput",props.$options)}
`;var CSSTransition=__webpack_require__("./node_modules/react-transition-group/esm/CSSTransition.js"),ControlContext=__webpack_require__("./src/components/Control/ControlContext.ts"),common=__webpack_require__("./src/helper/common.ts");const Input=react.forwardRef(((inProps,ref)=>{const ctx=(0,react.useContext)(ControlContext.A),props=(0,common.v6)(ctx,inProps,{prefixClass:"tui-input",variant:"tonal",outlined:!1,color:"neutral",shape:"square",size:"md",component:"input"}),{prefixClass,style,className,variant,outlined,elevation,color,shape,size,disabled,onChange,startDecorator,endDecorator,styleOverrides,component:InputComponent="input",prefix,suffix,...rest}=props,inputRef=(0,react.useRef)(null);react.useImperativeHandle(ref,(()=>inputRef.current),[]);const classNamesRoot=classnames_default()(`${prefixClass}-root`,`${prefixClass}-${variant}`,`${prefixClass}-size-${size}`,`${prefixClass}-color-${color}`,`${prefixClass}-shape-${shape}`,{[`${prefixClass}-disabled`]:disabled},className),classNames=classnames_default()(`${prefixClass}`),classNameElement=classnames_default()(`${prefixClass}-element`),nodeRef=react.useRef(null);return(0,jsx_runtime.jsxs)(StyledInputRoot,{className:classNamesRoot,$options:props,onClick:()=>{inputRef.current?.focus()},children:[(0,jsx_runtime.jsx)(CSSTransition.A,{in:!!startDecorator,timeout:150,classNames:prefixClass+"-in",unmountOnExit:!0,nodeRef,children:(0,jsx_runtime.jsx)("span",{ref:nodeRef,onClick:event=>{event.stopPropagation()},className:prefixClass+"-start-decorator",children:startDecorator})}),(0,jsx_runtime.jsxs)("div",{className:classNames,children:[prefix?(0,jsx_runtime.jsx)("span",{className:prefixClass+"-prefix",children:prefix}):null,(0,jsx_runtime.jsx)(InputComponent,{className:classNameElement,style,ref:inputRef,disabled,onChange:e=>{onChange&&onChange(e)},...rest}),suffix?(0,jsx_runtime.jsx)("span",{className:prefixClass+"-suffix",children:suffix}):null]}),(0,jsx_runtime.jsx)(CSSTransition.A,{in:!!endDecorator,timeout:150,classNames:prefixClass+"-in",unmountOnExit:!0,nodeRef,children:(0,jsx_runtime.jsx)("span",{ref:nodeRef,onClick:event=>{event.stopPropagation()},className:prefixClass+"-end-decorator",children:endDecorator})})]})})),Input_Input=Input;Input.__docgenInfo={description:"",methods:[],displayName:"Input",props:{variant:{required:!1,tsType:{name:"DefaultVariants[number]",raw:"typeof DefaultVariants[number]"},description:""},color:{required:!1,tsType:{name:"union",raw:"| ExcludeValue<U, false>\n| Exclude<T, IncludeValue<U, false>>",elements:[{name:"unknown"},{name:"Exclude",elements:[{name:"DefaultColorNames[number]",raw:"typeof DefaultColorNames[number]"},{name:"unknown"}],raw:"Exclude<T, IncludeValue<U, false>>"}]},description:""},outlined:{required:!1,tsType:{name:"boolean"},description:""},elevation:{required:!1,tsType:{name:"tuple",raw:"[number, number, number]",elements:[{name:"number"},{name:"number"},{name:"number"}]},description:""},shape:{required:!1,tsType:{name:"union",raw:"'round' | 'square'",elements:[{name:"literal",value:"'round'"},{name:"literal",value:"'square'"}]},description:""},size:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},prefixClass:{required:!1,tsType:{name:"string"},description:""},styleOverrides:{required:!1,tsType:{name:"union",raw:"StyledObject | ((ownerState: ComponentOwnerState) => StyledObject | RuleSet<object>)",elements:[{name:"StyledObject"},{name:"unknown"}]},description:""},prefix:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},suffix:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},startDecorator:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},endDecorator:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},component:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:""}},composes:["Omit"]}}}]);
//# sourceMappingURL=625.3b9901e4.iframe.bundle.js.map