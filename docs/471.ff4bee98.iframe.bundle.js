"use strict";(self.webpackChunk_teatak_ui=self.webpackChunk_teatak_ui||[]).push([[471],{"./src/components/Control/ControlGroup.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_helper_common__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/helper/common.ts");const __WEBPACK_DEFAULT_EXPORT__=props=>{const{single:singleProp,options,onChange,value:valueProp,defaultValue:defaultValueProp,render,...rest}=props,allOptionValues=options?.map((option=>option.value));let single=void 0!==singleProp?singleProp:!(Array.isArray(valueProp)||Array.isArray(defaultValueProp));const[value,setValue]=(0,_helper_common__WEBPACK_IMPORTED_MODULE_1__.X5)(single?void 0:[],{defaultValue:"defaultValue"in props?defaultValueProp||(single?void 0:[]):void 0,value:"value"in props?valueProp||(single?void 0:[]):void 0}),handleChange=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(((optionValue,selected)=>{if(single){if(selected){let newValue=optionValue;setValue(newValue),onChange&&onChange(newValue)}}else if(selected){let newValue=[...value];-1===newValue.indexOf(optionValue)&&newValue.push(optionValue),setValue(newValue),onChange&&onChange(newValue)}else{let newValue=[...value];const index=newValue.indexOf(optionValue);-1!=index&&newValue.splice(index,1),setValue(newValue),onChange&&onChange(newValue)}}),[value,onChange,allOptionValues]);let _options=[];return Array.isArray(options)&&options.map(((option,i)=>{let selected;selected=Array.isArray(value)?value.indexOf(option.value)>-1:option.value==value;const props={key:i,selected,onChange:e=>{let selected=e;e.target&&(selected=void 0!==e.target.checked?e.target.checked:e.target.value),handleChange(option.value,selected)},...option};_options.push(props)})),render&&render(_options)}},"./src/components/Switch/Switch.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Switch_Switch});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),defaultTheme=__webpack_require__("./src/style/defaultTheme.ts"),theme=__webpack_require__("./src/style/theme.tsx");const StyledSwitch=styled_components_browser_esm.Ay.label`
    ${props=>{const options=props.$options,{prefixClass:_,variant,outlined,color,size,shape,thinTrack}=options;let baseSize=8,textFontSize=14,iconFontSize=12;switch(size){case"xs":baseSize=6,textFontSize=11,iconFontSize=2*baseSize-2;break;case"sm":baseSize=7,textFontSize=12,iconFontSize=2*baseSize-2;break;case"md":baseSize=8,textFontSize=14,iconFontSize=2*baseSize-2;break;case"lg":baseSize=9,textFontSize=14,iconFontSize=2*baseSize-2;break;case"xl":baseSize=10,textFontSize=16,iconFontSize=2*baseSize-2}let palette=defaultTheme.A.vars.palette[color];void 0===palette&&(palette=defaultTheme.A.vars.palette.primary);let foreColor,handleBackground,handleForeColor,background,backgroundRipple,hoverOpacity,activeOpacity,handleForeColorChecked,handleBackgroundChecked,backgroundChecked,outlineColor="neutral"===color?defaultTheme.A.vars.palette.primary.main:palette.main,borderColor=outlined?"filled"===variant?defaultTheme.A.vars.palette.neutral.dark:defaultTheme.A.vars.palette.neutral.container:"transparent",borderColorChecked=outlined?"filled"===variant?palette.dark:palette.main:"transparent";switch(foreColor=defaultTheme.A.vars.palette.surface.onDark,variant){case"filled":handleBackground=defaultTheme.A.vars.palette.common.white,handleBackgroundChecked=defaultTheme.A.vars.palette.common.white,handleForeColor=palette.main,handleForeColorChecked=palette.main,background=palette.main,backgroundChecked=palette.main,backgroundRipple=palette.dark,hoverOpacity=.2,activeOpacity=.3;break;case"tonal":handleBackground=palette.dark,handleBackgroundChecked=palette.dark,handleForeColor=palette.onDark,handleForeColorChecked=palette.onDark,background=palette.light,backgroundChecked=palette.container,backgroundRipple=palette.main,hoverOpacity=.2,activeOpacity=.3;break;default:handleBackground=palette.dark,handleBackgroundChecked=palette.dark,handleForeColor=palette.onDark,handleForeColorChecked=palette.onDark,background="none",backgroundChecked=palette.light,backgroundRipple=palette.main,hoverOpacity=.2,activeOpacity=.3}return styled_components_browser_esm.AH`
            --Switch-baseSize: ${baseSize};
            --Switch-gap: calc(var(--Switch-baseSize) * 1px);
            --Icon-fontSize: ${iconFontSize};
            --Text-fontSize: ${textFontSize};
            font-family: var(--Switch-fontFamily, ${defaultTheme.A.vars.fontFamily.body});
            font-size: calc(var(--Text-fontSize) * 1px);
            line-height: ${defaultTheme.A.vars.lineHeight.md};
            margin-inline-start: var(--Switch-marginInlineStart);
            margin-inline-end: var(--Switch-marginInlineEnd);
            box-sizing: border-box;
            position: relative;
            display: inline-flex;
            vertical-align: middle;
            align-items: center;
            color: ${foreColor};
            height: var(--Switch-rootHeight, calc(var(--Switch-baseSize) * 4px));
            gap: var(--Switch-gap);
            transition: 
                opacity 150ms ease 0ms, 
                border-color 150ms ease 0ms, 
                background-color ease 0ms, 
                outline 150ms ease 0ms,
                box-shadow 150ms ease 0ms;

            & .${_}-element {
                cursor: pointer;
                position: absolute;
                margin: 0;
                outline: 0;
                opacity: 0; 
                width: 100%;
                height: 100%;
                &:disabled {
                    cursor: default;
                }
            } 
            & svg {
                user-select: none;
                width: 1em;
                height: 1em;
                fill: currentColor;
                font-size: calc(var(--Icon-fontSize) * 1px);
            }
            & .${_} {
                position: relative;
                cursor: pointer;
                width: var(--Switch-width, calc(var(--Switch-baseSize) * 5px));
                height: var(--Switch-height, calc(var(--Switch-baseSize) * 3px));
                flex-shrink: 0;      
                & .${_}-track-container {
                    position: absolute;
                    display: flex;
                    align-items: center;  
                    justify-content: center;
                    inset: 0;
                    & .${_}-track {
                        position: relative;
                        inset: 0;
                        display: inline-flex;
                        justify-content: center;
                        align-items: center;
                        ${thinTrack?styled_components_browser_esm.AH`
                            width: var(--Switch-trackWidth, calc(var(--Switch-baseSize) * 4px));
                            height: var(--Switch-trackHeight, calc(var(--Switch-baseSize) * 1.8px));
                        `:styled_components_browser_esm.AH`
                            width: var(--Switch-trackWidth, calc(var(--Switch-baseSize) * 5px));
                            height: var(--Switch-trackHeight, calc(var(--Switch-baseSize) * 3px));
                        `}
                        background: var(--Switch-trackBackground, ${background}); 
                        ${"round"===shape?styled_components_browser_esm.AH`
                            border-radius: var(--Switch-radius, calc(var(--Switch-baseSize) / 2 * 3px));
                        `:styled_components_browser_esm.AH`
                            border-radius: var(--Switch-radius, ${defaultTheme.A.vars.radius.sm});
                        `}
                        transition: 
                            opacity 150ms ease 0ms,
                            background-color 150ms ease 0ms,
                            outline-width 250ms cubic-bezier(0, 0, 0, 3) 0ms;
                        
                        &::before {
                            content: "";     
                            position: absolute;       
                            pointer-events: none;
                            background: ${backgroundRipple};
                            inset: 0;
                            opacity: 0;            
                            transition: opacity 150ms ease 0ms; 
                            border-radius: inherit;
                        }
                        &::after {
                            content: "";     
                            position: absolute;       
                            pointer-events: none;
                            inset: 0;
                            box-sizing: border-box;
                            border-width: 1px;
                            border-style: solid;
                            border-color: var(--Switch-borderColor, ${borderColor});
                            outline-offset: var(--Switch-outlineOffset, 1px);
                            outline-color: ${outlineColor};
                            outline-width: 0px;
                            outline-style: solid;
                            transition: 
                                opacity 150ms ease 0ms,
                                outline-width 250ms cubic-bezier(0, 0, 0, 3) 0ms;
                            border-radius: inherit;
                        }
                    }  
                }   
                & .${_}-handle-container {
                    position: absolute;
                    width: var(--Switch-height, calc(var(--Switch-baseSize) * 3px));
                    height: var(--Switch-height, calc(var(--Switch-baseSize) * 3px));
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    transition: 
                        margin 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s;
    
                    & .${_}-handle {
                        display: inline-flex;
                        justify-content: center;
                        align-items: center;
                        pointer-events: none;
                        inset: 0;
                        box-sizing: border-box;
                        ${"round"===shape?styled_components_browser_esm.AH`
                            border-radius: var(--Switch-handleRadius, calc(var(--Switch-baseSize) / 2 * 3px));
                        `:styled_components_browser_esm.AH`
                            border-radius: calc(var(--Switch-handleRadius, ${defaultTheme.A.vars.radius.sm}) - 2px);
                        `}
                        background: ${handleBackground};
                        color: ${handleForeColor};
                        outline-offset: 0px;
                        outline-color: ${outlineColor};
                        outline-width: 0px;
                        outline-style: solid;
                        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.3);
                        width: var(--Switch-handleSize, calc(var(--Switch-baseSize) * 2px + 2px));
                        height: var(--Switch-handleSize, calc(var(--Switch-baseSize) * 2px + 2px));
                        transition: 
                            opacity 150ms ease 0ms,
                            outline-width 250ms cubic-bezier(0, 0, 0, 3) 0ms;
                    }                    
                }
                
            }
            & .${_}-text {
                user-select: none;
                display: inline-flex;
                justify-content: center;
                align-items: center;
            }
            &:has(\.${_}-element:not(:disabled)) {
                & .${_}  {
                    &:hover {
                        & .${_}-track-container {
                            & .${_}-track::before {
                                opacity: ${hoverOpacity};
                            }
                        }
                    }
                    &:active, &.clicked {
                        & .${_}-track-container {
                            & .${_}-track::before {
                                opacity: ${activeOpacity};
                            }
                        }
                    }
                }
            }
            &:has(\.${_}-element:focus-visible) {
                & .${_} {
                    & .${_}-track-container {
                        & .${_}-track  {
                            &::after {
                                ${!thinTrack&&styled_components_browser_esm.AH`
                                    outline-width: 2px;
                                `}
                            }
                        }
                    }
                    & .${_}-handle-container {
                        & .${_}-handle {
                            ${thinTrack&&styled_components_browser_esm.AH`
                                outline-width: 2px;
                            `}
                        }
                    }
                }
            }
            &:has(\.${_}-element:checked) {
                & .${_} {
                    & .${_}-track-container {
                        & .${_}-track {
                            background: ${backgroundChecked};
                            &::after {
                                border-color: ${borderColorChecked};
                            }
                        }
                    }
                    & .${_}-handle-container {
                        & .${_}-handle {
                            background: ${handleBackgroundChecked};
                            color: ${handleForeColorChecked};
                        }
                        margin-inline-start: calc(var(--Switch-width, calc(var(--Switch-baseSize) * 5px)) - var(--Switch-height, calc(var(--Switch-baseSize) * 3px)));
                    }
                }
            }            
            &:has(\.${_}-element:disabled) {
                opacity: .5;
                & .${_} {
                    cursor: default;
                }
            }
        `}}
     ${props=>(0,theme.rR)("TuiSwitch",props.$options)}
`;var ControlContext=__webpack_require__("./src/components/Control/ControlContext.ts"),common=__webpack_require__("./src/helper/common.ts");const Switch=react.forwardRef(((inProps,ref)=>{const[checked,setChecked]=(0,common.X5)(!1,{value:inProps.checked,defaultValue:inProps.defaultChecked}),isActive=checked,ctx=(0,react.useContext)(ControlContext.A),props=(0,common.v6)(ctx,inProps,{prefixClass:"tui-switch",variant:"filled",outlined:!1,color:isActive?"primary":"neutral",shape:"round",size:"md"}),{prefixClass,style,icon,checkedIcon,className,thinTrack,variant,outlined,color,shape,size,disabled,onChange,defaultChecked,styleOverrides,children,...rest}=props,inputRef=(0,react.useRef)(null);react.useImperativeHandle(ref,(()=>inputRef.current),[]);const classNamesRoot=classnames_default()(`${prefixClass}-root`,`${prefixClass}-${variant}`,`${prefixClass}-size-${size}`,`${prefixClass}-color-${color}`,`${prefixClass}-shape-${shape}`,{[`${prefixClass}-outlined`]:outlined,[`${prefixClass}-checked`]:checked,[`${prefixClass}-disabled`]:disabled},className);return(0,jsx_runtime.jsxs)(StyledSwitch,{className:classNamesRoot,$options:props,children:[(0,jsx_runtime.jsx)("input",{onChange:e=>{setChecked(e.target.checked),onChange&&onChange(e)},className:prefixClass+"-element",type:"checkbox",disabled,ref:inputRef,checked,...rest}),"function"==typeof children?children(checked):(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)("div",{className:prefixClass,children:[(0,jsx_runtime.jsx)("div",{className:prefixClass+"-track-container",children:(0,jsx_runtime.jsx)("div",{className:prefixClass+"-track"})}),(0,jsx_runtime.jsx)("div",{className:prefixClass+"-handle-container",children:(0,jsx_runtime.jsx)("div",{className:prefixClass+"-handle",children:checked&&checkedIcon?checkedIcon:icon})})]}),children?(0,jsx_runtime.jsx)("span",{className:prefixClass+"-text",children}):null]})]})})),Switch_Switch=Switch;Switch.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{prefixClass:{required:!1,tsType:{name:"string"},description:""},styleOverrides:{required:!1,tsType:{name:"union",raw:"StyledObject | ((ownerState: ComponentOwnerState) => StyledObject | RuleSet<object>)",elements:[{name:"StyledObject"},{name:"unknown"}]},description:""},thinTrack:{required:!1,tsType:{name:"boolean"},description:""},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},checkedIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!1,tsType:{name:"union",raw:"React.ReactNode | ((checked: boolean) => React.ReactNode)",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"unknown"}]},description:""}},composes:["Omit"]}}}]);
//# sourceMappingURL=471.ff4bee98.iframe.bundle.js.map