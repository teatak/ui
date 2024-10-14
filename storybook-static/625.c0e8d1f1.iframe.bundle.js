"use strict";(self.webpackChunk_teatak_ui=self.webpackChunk_teatak_ui||[]).push([[625],{"./src/components/Input/Input.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Input_Input});var react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),defaultTheme=__webpack_require__("./src/style/defaultTheme.ts"),theme=__webpack_require__("./src/style/theme.tsx");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal(["\n                --Input-decoratorChildRadius: calc((var(--Input-baseSize) - 1) * 2px);\n            "]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal(["\n                --Input-decoratorChildRadius: calc(var(--Input-radius, ",") - 2px);\n            "]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal(["\n                border-radius: calc(var(--Input-baseSize) * 2px);\n                \n            "]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=_tagged_template_literal(["\n                border-radius: var(--Input-radius, ",");\n               \n            "]);return _templateObject3=function _templateObject(){return data},data}function _templateObject4(){var data=_tagged_template_literal(["\n            --Input-baseSize: ",";\n            --Icon-fontSize: ",";\n            --Text-fontSize: ",";\n            --Input-minHeight: calc(var(--Input-baseSize) * 4px);\n            --Input-decoratorChildHeight: calc((var(--Input-baseSize) - 1) * 4px);\n            --Input-decoratorChildOffset: calc(var(--Input-baseSize) * 1px - 2px);\n            --Input-elevationLevel: ",";\n            ","\n            cursor: text;\n            display: flex;\n            position: relative;\n            box-sizing: border-box;\n            width: 100%;\n            font-family: var(--Input-fontFamily, ",");\n            font-size: calc(var(--Text-fontSize) * 1px);\n            line-height: ",";\n            min-height: var(--Input-minHeight);\n            color: var(--Input-color, ",");\n            background:  var(--Input-background, ",');\n            border: none;\n            outline: none;\n            box-shadow: \n                0px calc(1px*(clamp(0,var(--Input-elevationLevel),1) + clamp(0,var(--Input-elevationLevel) - 3,1) + 2*clamp(0,var(--Input-elevationLevel) - 4,1))) calc(1px*(2*clamp(0,var(--Input-elevationLevel),1) + clamp(0,var(--Input-elevationLevel) - 2,1) + clamp(0,var(--Input-elevationLevel) - 4,1))) 0px var(--Input-shadowColor, rgba(0, 0, 0, 0.2)),\n                0px calc(1px*(clamp(0,var(--Input-elevationLevel),1) + clamp(0,var(--Input-elevationLevel) - 1,1) + 2*clamp(0,var(--Input-elevationLevel) - 2,3))) calc(1px*(3*clamp(0,var(--Input-elevationLevel),2) + 2*clamp(0,var(--Input-elevationLevel) - 2,3))) calc(1px*(clamp(0,var(--Input-elevationLevel),4) + 2*clamp(0,var(--Input-elevationLevel) - 4,1))) var(--Input-shadowColor, rgba(0, 0, 0, 0.12));\n            transition: \n                opacity 150ms ease 0ms, \n                border-color 150ms ease 0ms, \n                background-color ease 0ms, \n                outline 150ms ease 0ms,\n                box-shadow 150ms ease 0ms;\n       \n            &::before {\n                content: "";     \n                position: absolute;       \n                pointer-events: none;\n                background: ',';\n                inset: 0;\n                opacity: 0;            \n                transition: opacity 150ms ease 0ms; \n            }\n            &::after {\n                content: "";\n                position: absolute;\n                pointer-events: none;\n                inset: 0;\n                border-width: 1px;\n                border-style: solid;\n                border-color: var(--Input-borderColor, ',");\n                outline-offset: -1px;\n                outline-color: ",";\n                outline-width: 0px;\n                outline-style: solid;\n                transition: \n                    opacity 150ms ease 0ms,\n                    outline 150ms cubic-bezier(0.18, 0.89, 0.32, 1.28) 0ms;\n            }\n            & svg {\n                user-select: none;\n                width: 1em;\n                height: 1em;\n                fill: currentColor;\n                font-size: calc(var(--Icon-fontSize) * 1px);\n            }\n            &:has(.","-element:not(:disabled)) {\n                &:hover {\n                    --Input-elevationLevel: ",";\n                    &::before {\n                        opacity: .1;\n                    }\n                }\n            }\n            /* has input focus */\n            &:has(.","-element:focus) {\n                --Input-elevationLevel: ",";\n                background: ",";\n                &::before {\n                    opacity: 0;\n                }\n                &::after {\n                    z-index: 1;\n                    outline-width: 2px;\n                }\n            }\n            & ."," {\n                display: inline-flex;\n                flex: auto;\n                & .","-prefix {\n                    margin-inline-start: calc(var(--Input-baseSize) * 1px);\n                    display: inline-flex;\n                    align-items: center;\n                }\n                & .","-element {\n                    font-family: inherit;\n                    outline: none;\n                    margin: 0;\n                    position: relative;\n                    padding-inline: calc(var(--Input-baseSize) * 1px);\n                    padding-block: 0px;\n                    font-size: calc(var(--Text-fontSize) * 1px);\n                    box-sizing: border-box;\n                    border: none;\n                    background: transparent;\n                    text-overflow: ellipsis;\n                    flex: auto;\n                    line-height: inherit;\n\n                    color: ",";\n                    height: 100%;\n                    &:-webkit-autofill,\n                    &:-webkit-autofill:hover, \n                    &:-webkit-autofill:focus, \n                    &:-webkit-autofill:active{\n                        color: "," !important;\n                        transition: background-color 5000s ease-in-out 0s;\n                    }\n                    &::placeholder {\n                        color: ",";\n                        opacity: 0.6;\n                    }\n                    &:disabled {\n                        cursor: default;\n                        color: ",";\n                    }\n                }\n                & textarea.","-element {\n                    padding-block: calc(var(--Input-baseSize) * 1px);\n                }\n                &:has(.","-prefix) {\n                    & .","-element {\n                        padding-inline-start: 0;\n                    }\n                }\n                &:has(.","-suffix) {\n                    & .","-element {\n                        padding-inline-end: 0;\n                    }\n                }\n                & .","-suffix {\n                    margin-inline-end: calc(var(--Input-baseSize) * 1px);\n                    display: inline-flex;\n                    align-items: center;\n                }\n            }\n            "," \n            &::before, &::after {\n                border-radius: inherit;\n            }\n            & .","-start-decorator {\n                --Button-marginInlineStart: calc(var(--Input-decoratorChildOffset) * -1); \n                --Button-minHeight: var(--Input-decoratorChildHeight);\n                --Button-outlineOffset: -1px;\n                --Button-radius: var(--Input-decoratorChildRadius);\n\n                --Checkbox-marginInlineStart: calc(var(--Input-decoratorChildOffset) * -1); \n                --Checkbox-marginInlineEnd: calc(var(--Input-decoratorChildOffset) * -1); \n                --Checkbox-minHeight: var(--Input-decoratorChildHeight);\n                --Checkbox-inner-minHeight: calc((var(--Input-baseSize) - 1) * 2px + 2px);\n                \n                --Switch-marginInlineStart: calc(var(--Input-baseSize)  / 2 * -1px); \n                --Switch-marginInlineEnd: calc(var(--Input-baseSize) / 2 * -1px); \n               \n                --Radio-marginInlineStart: calc(var(--Input-decoratorChildOffset) * -1); \n                --Radio-marginInlineEnd: calc(var(--Input-decoratorChildOffset) * -1); \n                --Radio-minHeight: var(--Input-decoratorChildHeight);\n                --Radio-inner-minHeight: calc((var(--Input-baseSize) - 1) * 2px + 2px);\n            \n                display: inline-flex;\n                position: relative;\n                align-items: center;\n                margin-inline-start: calc(var(--Input-baseSize) * 1px);\n                &.","-in-enter {\n                    opacity: 0;\n                    margin-inline-start: 0;\n                }\n                &.","-in-enter-active  {\n                    opacity: 1;\n                    margin-inline-start: calc(var(--Input-baseSize) * 1px);\n                    transition: \n                        opacity 150ms ease 50ms,\n                        margin-inline-start 150ms ease 0ms;\n                }\n                &.","-in-exit {\n                    opacity: 1;\n                    margin-inline-start: calc(var(--Input-baseSize) * 1px);\n                }\n                &.","-in-exit-active {\n                    opacity: 0;\n                    margin-inline-start: 0;\n                    transition: \n                        opacity 150ms ease 0ms,\n                        margin-inline-start 150ms ease 0ms;\n                } \n            }\n            & .","-end-decorator {\n                --Button-marginInlineEnd: calc(var(--Input-decoratorChildOffset) * -1); \n                --Button-minHeight: var(--Input-decoratorChildHeight);\n                --Button-outlineOffset: -1px;\n                --Button-radius: var(--Input-decoratorChildRadius);\n\n                --Checkbox-marginInlineStart: calc(var(--Input-decoratorChildOffset) * -1); \n                --Checkbox-marginInlineEnd: calc(var(--Input-decoratorChildOffset) * -1); \n                --Checkbox-minHeight: var(--Input-decoratorChildHeight);\n                --Checkbox-inner-minHeight: calc((var(--Input-baseSize) - 1) * 2px + 2px);\n\n                --Switch-marginInlineStart: calc(var(--Input-baseSize)  / 2 * -1px); \n                --Switch-marginInlineEnd: calc(var(--Input-baseSize) / 2 * -1px); \n                \n                --Radio-marginInlineStart: calc(var(--Input-decoratorChildOffset) * -1); \n                --Radio-marginInlineEnd: calc(var(--Input-decoratorChildOffset) * -1); \n                --Radio-minHeight: var(--Input-decoratorChildHeight);\n                --Radio-inner-minHeight: calc((var(--Input-baseSize) - 1) * 2px + 2px);\n               \n                display: inline-flex;\n                position: relative;\n                align-items: center;\n                margin-inline-end: calc(var(--Input-baseSize) * 1px);\n                &.","-in-enter {\n                    opacity: 0;\n                    margin-inline-end: 0;\n                }\n                &.","-in-enter-active  {\n                    opacity: 1;\n                    margin-inline-end: calc(var(--Input-baseSize) * 1px);\n                    transition: \n                        opacity 150ms ease 50ms,\n                        margin-inline-end 150ms ease 0ms;\n                }\n                &.","-in-exit {\n                    opacity: 1;\n                    margin-inline-end: calc(var(--Input-baseSize) * 1px);\n                }\n                &.","-in-exit-active {\n                    opacity: 0;\n                    margin-inline-end: 0;\n                    transition: \n                        opacity 150ms ease 0ms,\n                        margin-inline-end 150ms ease 0ms;\n                } \n            }\n            &:has(.","-element:disabled) {\n                --Input-elevationLevel: ",";\n                cursor: default;\n                color: ",";\n                background: ",";\n                &::after {\n                    border-color: rgb(",");\n                }\n            }\n        "],["\n            --Input-baseSize: ",";\n            --Icon-fontSize: ",";\n            --Text-fontSize: ",";\n            --Input-minHeight: calc(var(--Input-baseSize) * 4px);\n            --Input-decoratorChildHeight: calc((var(--Input-baseSize) - 1) * 4px);\n            --Input-decoratorChildOffset: calc(var(--Input-baseSize) * 1px - 2px);\n            --Input-elevationLevel: ",";\n            ","\n            cursor: text;\n            display: flex;\n            position: relative;\n            box-sizing: border-box;\n            width: 100%;\n            font-family: var(--Input-fontFamily, ",");\n            font-size: calc(var(--Text-fontSize) * 1px);\n            line-height: ",";\n            min-height: var(--Input-minHeight);\n            color: var(--Input-color, ",");\n            background:  var(--Input-background, ",');\n            border: none;\n            outline: none;\n            box-shadow: \n                0px calc(1px*(clamp(0,var(--Input-elevationLevel),1) + clamp(0,var(--Input-elevationLevel) - 3,1) + 2*clamp(0,var(--Input-elevationLevel) - 4,1))) calc(1px*(2*clamp(0,var(--Input-elevationLevel),1) + clamp(0,var(--Input-elevationLevel) - 2,1) + clamp(0,var(--Input-elevationLevel) - 4,1))) 0px var(--Input-shadowColor, rgba(0, 0, 0, 0.2)),\n                0px calc(1px*(clamp(0,var(--Input-elevationLevel),1) + clamp(0,var(--Input-elevationLevel) - 1,1) + 2*clamp(0,var(--Input-elevationLevel) - 2,3))) calc(1px*(3*clamp(0,var(--Input-elevationLevel),2) + 2*clamp(0,var(--Input-elevationLevel) - 2,3))) calc(1px*(clamp(0,var(--Input-elevationLevel),4) + 2*clamp(0,var(--Input-elevationLevel) - 4,1))) var(--Input-shadowColor, rgba(0, 0, 0, 0.12));\n            transition: \n                opacity 150ms ease 0ms, \n                border-color 150ms ease 0ms, \n                background-color ease 0ms, \n                outline 150ms ease 0ms,\n                box-shadow 150ms ease 0ms;\n       \n            &::before {\n                content: "";     \n                position: absolute;       \n                pointer-events: none;\n                background: ',';\n                inset: 0;\n                opacity: 0;            \n                transition: opacity 150ms ease 0ms; \n            }\n            &::after {\n                content: "";\n                position: absolute;\n                pointer-events: none;\n                inset: 0;\n                border-width: 1px;\n                border-style: solid;\n                border-color: var(--Input-borderColor, ',");\n                outline-offset: -1px;\n                outline-color: ",";\n                outline-width: 0px;\n                outline-style: solid;\n                transition: \n                    opacity 150ms ease 0ms,\n                    outline 150ms cubic-bezier(0.18, 0.89, 0.32, 1.28) 0ms;\n            }\n            & svg {\n                user-select: none;\n                width: 1em;\n                height: 1em;\n                fill: currentColor;\n                font-size: calc(var(--Icon-fontSize) * 1px);\n            }\n            &:has(\\.","-element:not(:disabled)) {\n                &:hover {\n                    --Input-elevationLevel: ",";\n                    &::before {\n                        opacity: .1;\n                    }\n                }\n            }\n            /* has input focus */\n            &:has(\\.","-element:focus) {\n                --Input-elevationLevel: ",";\n                background: ",";\n                &::before {\n                    opacity: 0;\n                }\n                &::after {\n                    z-index: 1;\n                    outline-width: 2px;\n                }\n            }\n            & ."," {\n                display: inline-flex;\n                flex: auto;\n                & .","-prefix {\n                    margin-inline-start: calc(var(--Input-baseSize) * 1px);\n                    display: inline-flex;\n                    align-items: center;\n                }\n                & .","-element {\n                    font-family: inherit;\n                    outline: none;\n                    margin: 0;\n                    position: relative;\n                    padding-inline: calc(var(--Input-baseSize) * 1px);\n                    padding-block: 0px;\n                    font-size: calc(var(--Text-fontSize) * 1px);\n                    box-sizing: border-box;\n                    border: none;\n                    background: transparent;\n                    text-overflow: ellipsis;\n                    flex: auto;\n                    line-height: inherit;\n\n                    color: ",";\n                    height: 100%;\n                    &:-webkit-autofill,\n                    &:-webkit-autofill:hover, \n                    &:-webkit-autofill:focus, \n                    &:-webkit-autofill:active{\n                        color: "," !important;\n                        transition: background-color 5000s ease-in-out 0s;\n                    }\n                    &::placeholder {\n                        color: ",";\n                        opacity: 0.6;\n                    }\n                    &:disabled {\n                        cursor: default;\n                        color: ",";\n                    }\n                }\n                & textarea.","-element {\n                    padding-block: calc(var(--Input-baseSize) * 1px);\n                }\n                &:has(.","-prefix) {\n                    & .","-element {\n                        padding-inline-start: 0;\n                    }\n                }\n                &:has(.","-suffix) {\n                    & .","-element {\n                        padding-inline-end: 0;\n                    }\n                }\n                & .","-suffix {\n                    margin-inline-end: calc(var(--Input-baseSize) * 1px);\n                    display: inline-flex;\n                    align-items: center;\n                }\n            }\n            "," \n            &::before, &::after {\n                border-radius: inherit;\n            }\n            & .","-start-decorator {\n                --Button-marginInlineStart: calc(var(--Input-decoratorChildOffset) * -1); \n                --Button-minHeight: var(--Input-decoratorChildHeight);\n                --Button-outlineOffset: -1px;\n                --Button-radius: var(--Input-decoratorChildRadius);\n\n                --Checkbox-marginInlineStart: calc(var(--Input-decoratorChildOffset) * -1); \n                --Checkbox-marginInlineEnd: calc(var(--Input-decoratorChildOffset) * -1); \n                --Checkbox-minHeight: var(--Input-decoratorChildHeight);\n                --Checkbox-inner-minHeight: calc((var(--Input-baseSize) - 1) * 2px + 2px);\n                \n                --Switch-marginInlineStart: calc(var(--Input-baseSize)  / 2 * -1px); \n                --Switch-marginInlineEnd: calc(var(--Input-baseSize) / 2 * -1px); \n               \n                --Radio-marginInlineStart: calc(var(--Input-decoratorChildOffset) * -1); \n                --Radio-marginInlineEnd: calc(var(--Input-decoratorChildOffset) * -1); \n                --Radio-minHeight: var(--Input-decoratorChildHeight);\n                --Radio-inner-minHeight: calc((var(--Input-baseSize) - 1) * 2px + 2px);\n            \n                display: inline-flex;\n                position: relative;\n                align-items: center;\n                margin-inline-start: calc(var(--Input-baseSize) * 1px);\n                &.","-in-enter {\n                    opacity: 0;\n                    margin-inline-start: 0;\n                }\n                &.","-in-enter-active  {\n                    opacity: 1;\n                    margin-inline-start: calc(var(--Input-baseSize) * 1px);\n                    transition: \n                        opacity 150ms ease 50ms,\n                        margin-inline-start 150ms ease 0ms;\n                }\n                &.","-in-exit {\n                    opacity: 1;\n                    margin-inline-start: calc(var(--Input-baseSize) * 1px);\n                }\n                &.","-in-exit-active {\n                    opacity: 0;\n                    margin-inline-start: 0;\n                    transition: \n                        opacity 150ms ease 0ms,\n                        margin-inline-start 150ms ease 0ms;\n                } \n            }\n            & .","-end-decorator {\n                --Button-marginInlineEnd: calc(var(--Input-decoratorChildOffset) * -1); \n                --Button-minHeight: var(--Input-decoratorChildHeight);\n                --Button-outlineOffset: -1px;\n                --Button-radius: var(--Input-decoratorChildRadius);\n\n                --Checkbox-marginInlineStart: calc(var(--Input-decoratorChildOffset) * -1); \n                --Checkbox-marginInlineEnd: calc(var(--Input-decoratorChildOffset) * -1); \n                --Checkbox-minHeight: var(--Input-decoratorChildHeight);\n                --Checkbox-inner-minHeight: calc((var(--Input-baseSize) - 1) * 2px + 2px);\n\n                --Switch-marginInlineStart: calc(var(--Input-baseSize)  / 2 * -1px); \n                --Switch-marginInlineEnd: calc(var(--Input-baseSize) / 2 * -1px); \n                \n                --Radio-marginInlineStart: calc(var(--Input-decoratorChildOffset) * -1); \n                --Radio-marginInlineEnd: calc(var(--Input-decoratorChildOffset) * -1); \n                --Radio-minHeight: var(--Input-decoratorChildHeight);\n                --Radio-inner-minHeight: calc((var(--Input-baseSize) - 1) * 2px + 2px);\n               \n                display: inline-flex;\n                position: relative;\n                align-items: center;\n                margin-inline-end: calc(var(--Input-baseSize) * 1px);\n                &.","-in-enter {\n                    opacity: 0;\n                    margin-inline-end: 0;\n                }\n                &.","-in-enter-active  {\n                    opacity: 1;\n                    margin-inline-end: calc(var(--Input-baseSize) * 1px);\n                    transition: \n                        opacity 150ms ease 50ms,\n                        margin-inline-end 150ms ease 0ms;\n                }\n                &.","-in-exit {\n                    opacity: 1;\n                    margin-inline-end: calc(var(--Input-baseSize) * 1px);\n                }\n                &.","-in-exit-active {\n                    opacity: 0;\n                    margin-inline-end: 0;\n                    transition: \n                        opacity 150ms ease 0ms,\n                        margin-inline-end 150ms ease 0ms;\n                } \n            }\n            &:has(\\.","-element:disabled) {\n                --Input-elevationLevel: ",";\n                cursor: default;\n                color: ",";\n                background: ",";\n                &::after {\n                    border-color: rgb(",");\n                }\n            }\n        "]);return _templateObject4=function _templateObject(){return data},data}function _templateObject5(){var data=_tagged_template_literal(["\n    ","\n    ","\n"]);return _templateObject5=function _templateObject(){return data},data}var StyledInputRoot=styled_components_browser_esm.Ay.div(_templateObject5(),(function(props){var options=props.$options,_=options.prefixClass,shape=options.shape,size=options.size,_options_elevation=options.elevation,elevation=void 0===_options_elevation?[0,0,0]:_options_elevation,variant=options.variant,color=options.color,outlined=options.outlined,baseSize=8,textFontSize=14,iconFontSize=12;switch(size){case"xs":textFontSize=11,iconFontSize=2*(baseSize=6);break;case"sm":textFontSize=12,iconFontSize=2*(baseSize=7);break;case"md":textFontSize=14,iconFontSize=2*(baseSize=8);break;case"lg":textFontSize=14,iconFontSize=2*(baseSize=9);break;case"xl":textFontSize=16,iconFontSize=2*(baseSize=10)}var palette=defaultTheme.A.vars.palette[color];void 0===palette&&(palette=defaultTheme.A.vars.palette.primary);var foreColor,background,backgroundRipple,backgroundFocus,foreColorDisabled,backgroundDisabled,borderColorDisabled,outlineColor="neutral"===color?defaultTheme.A.vars.palette.primary.main:palette.main,borderColor=outlined?"filled"===variant?"neutral"===color?defaultTheme.A.vars.palette.primary.dark:palette.dark:"neutral"===color?defaultTheme.A.vars.palette.primary.main:palette.main:"transparent",colorRewrite="filled"===variant?palette[5]:palette[90];switch(variant){case"filled":foreColor=palette.onMain,background=palette.main,backgroundRipple=palette.onContainer,backgroundFocus=palette.main;break;case"tonal":foreColor=palette.onLight,background=palette.light,backgroundRipple=palette.main,backgroundFocus="transparent";break;default:foreColor=palette.onContainer,background="none",backgroundRipple="transparent",backgroundFocus="transparent"}return foreColorDisabled=defaultTheme.A.vars.palette.neutral.container,backgroundDisabled=defaultTheme.A.vars.palette.neutral.light,borderColorDisabled=outlined?defaultTheme.A.vars.palette.neutral.container:"transparent",(0,styled_components_browser_esm.AH)(_templateObject4(),baseSize,iconFontSize,textFontSize,elevation[0],"round"===shape?(0,styled_components_browser_esm.AH)(_templateObject()):(0,styled_components_browser_esm.AH)(_templateObject1(),defaultTheme.A.vars.radius.sm),defaultTheme.A.vars.fontFamily.body,defaultTheme.A.vars.lineHeight.md,foreColor,background,backgroundRipple,borderColor,outlineColor,_,elevation[1],_,elevation[2],backgroundFocus,_,_,_,colorRewrite,colorRewrite,colorRewrite,foreColorDisabled,_,_,_,_,_,_,"round"===shape?(0,styled_components_browser_esm.AH)(_templateObject2()):(0,styled_components_browser_esm.AH)(_templateObject3(),defaultTheme.A.vars.radius.sm),_,_,_,_,_,_,_,_,_,_,_,elevation[0],foreColorDisabled,backgroundDisabled,borderColorDisabled)}),(function(props){return(0,theme.rR)("TuiInput",props.$options)})),CSSTransition=__webpack_require__("./node_modules/react-transition-group/esm/CSSTransition.js"),ControlContext=__webpack_require__("./src/components/Control/ControlContext.ts"),common=__webpack_require__("./src/helper/common.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var Input=react.forwardRef((function(inProps,ref){var ctx=(0,react.useContext)(ControlContext.A),props=(0,common.v6)(ctx,inProps,{prefixClass:"tui-input",variant:"tonal",outlined:!1,color:"neutral",shape:"square",size:"md",component:"input"}),prefixClass=props.prefixClass,style=props.style,className=props.className,variant=props.variant,color=(props.outlined,props.elevation,props.color),shape=props.shape,size=props.size,disabled=props.disabled,onChange=props.onChange,startDecorator=props.startDecorator,endDecorator=props.endDecorator,tmp=(props.styleOverrides,props.component),InputComponent=void 0===tmp?"input":tmp,prefix=props.prefix,suffix=props.suffix,rest=_object_without_properties(props,["prefixClass","style","className","variant","outlined","elevation","color","shape","size","disabled","onChange","startDecorator","endDecorator","styleOverrides","component","prefix","suffix"]),inputRef=(0,react.useRef)(null);react.useImperativeHandle(ref,(function(){return inputRef.current}),[]);var classNamesRoot=classnames_default()("".concat(prefixClass,"-root"),"".concat(prefixClass,"-").concat(variant),"".concat(prefixClass,"-size-").concat(size),"".concat(prefixClass,"-color-").concat(color),"".concat(prefixClass,"-shape-").concat(shape),_define_property({},"".concat(prefixClass,"-disabled"),disabled),className),classNames=classnames_default()("".concat(prefixClass)),classNameElement=classnames_default()("".concat(prefixClass,"-element")),nodeRef=react.useRef(null);return react.createElement(StyledInputRoot,{className:classNamesRoot,$options:props,onClick:function(){var _inputRef_current;null===(_inputRef_current=inputRef.current)||void 0===_inputRef_current||_inputRef_current.focus()}},react.createElement(CSSTransition.A,{in:!!startDecorator,timeout:150,classNames:prefixClass+"-in",unmountOnExit:!0,nodeRef},react.createElement("span",{ref:nodeRef,onClick:function(event){event.stopPropagation()},className:prefixClass+"-start-decorator"},startDecorator)),react.createElement("div",{className:classNames},prefix?react.createElement("span",{className:prefixClass+"-prefix"},prefix):null,react.createElement(InputComponent,function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({className:classNameElement,style,ref:inputRef,disabled,onChange:function(e){onChange&&onChange(e)}},rest)),suffix?react.createElement("span",{className:prefixClass+"-suffix"},suffix):null),react.createElement(CSSTransition.A,{in:!!endDecorator,timeout:150,classNames:prefixClass+"-in",unmountOnExit:!0,nodeRef},react.createElement("span",{ref:nodeRef,onClick:function(event){event.stopPropagation()},className:prefixClass+"-end-decorator"},endDecorator)))}));const Input_Input=Input;Input.__docgenInfo={description:"",methods:[],displayName:"Input"}}}]);