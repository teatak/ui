/**
 * Created by yanggang on 2018/12/26.
 * form item
 */
import React, { useEffect, useState, useContext, useRef } from "react";
import classnames from "classnames"
import PropTypes from "prop-types"
import Schema from "async-validator"

import FormContext from "../formcontext"
import { Row, Col } from "../grid"
import "../grid/style"

const FormItem = (props) => {
    const formContext = useContext(FormContext)
    const mounted = useRef();
    const changed = useRef();
    const { label, field, htmlFor, className, children, prefixClass, style, noStyle, showErrorTip, onChange, ...rest } = props
    const [value, setValue] = useState(field ? children.props.value || children.props.defaultValue : undefined)
    const [hasError, setHasError] = useState(props.hasError)
    const [tip, setTip] = useState(props.tip)

    const labelAlign = props.labelAlign || formContext.labelAlign
    const labelCol = props.labelCol || formContext.labelCol
    const wrapperCol = props.wrapperCol || formContext.wrapperCol
    const requiredSymbol = props.requiredSymbol || formContext.requiredSymbol

    const required = (() => {
        let find = false
        if (props.rules) {
            props.rules.forEach(element => {
                if (element["required"] === true) {
                    find = true
                    return
                }
            });
        }
        return find
    })()

    const validate = (fieldValue) => {
        return () => {
            let messages = null;
            if (props.rules) {
                for (let i = 0; i < props.rules.length; i++) {
                    let rule = props.rules[i];
                    let vValue = {};
                    let vDescriptor = {};
                    vValue[field] = fieldValue;
                    vDescriptor[field] = rule;
                    let validator = new Schema(vDescriptor);
                    validator.validate(vValue, (errors, fields) => {
                        if (errors) {
                            messages = messages || [];
                            messages.push(errors);
                            setHasError(true)
                            setTip(errors[0].message)
                            if (showErrorTip) {
                                showErrorTip(true, errors[0].message)
                            }
                        }
                    });
                }
                if (!messages) {
                    setHasError(false)
                    setTip("")
                    if (showErrorTip) {
                        showErrorTip(false, "")
                    }
                }
            }
            return messages;
        }

    }

    useEffect(() => {
        if (mounted.current === false) {
            mounted.current = true;
            if (field) {
                formContext.setItem(field, { formItem: { validate: validate(value) }, value: value })
            }
        } else {
            if (props.hasError !== undefined) {
                setHasError(props.hasError)
            }
            if (props.tip !== undefined) {
                setTip(props.tip)
            }
            if (field) {
                let v = ""
                if (changed.current) {
                    v = value
                } else {
                    v = children.props.value || children.props.defaultValue
                }
                setValue(v)
                formContext.setItem(field, { formItem: { validate: validate(v) }, value: v })
            }
        }

    }, [props])


    const handelChange = (e, value) => {
        changed.current = true;
        const v = validate(e.target.value)
        setValue(e.target.value)
        formContext.setItem(field, { formItem: { validate: v }, value: e.target.value });
        if (onChange) {
            onChange(e, value)
        }
    }

    const classNames = classnames(
        prefixClass,
        {
            [`${prefixClass}-has-error`]: hasError,
        },
        className,
    )

    const labelColClassNames = classnames(
        `${prefixClass}-label`,
        `${prefixClass}-label-${labelAlign}`,
    )

    const wrapperClassNames = classnames(
        `${prefixClass}-wrapper`,
    )

    const component = children;

    if (field) {
        React.Children.only(props.children)
    }

    const _htmlFor = (htmlFor || field)

    // let isArray = false
    // let isForward = isForwardRef(component)
    // if (Array.isArray(component)) {
    //     isArray = true
    // }

    if (noStyle) {
        return <>
            {field ? <component.type {...component.props} id={field + "_input"} onChange={handelChange} /> : children}
            {/* {tip ? <div className={`${prefixClass}-tip`}>{tip}</div> : null} */}
        </>
    } else {
        const labelComponent = label ?
            (typeof label === "string" ?
                <label className={requiredSymbol && required ? `${prefixClass}-required` : null} htmlFor={_htmlFor ? _htmlFor + "_input" : null} >{label}</label>
                : label
            )
            : null
        return <Row className={classNames} style={style}>
            <Col {...labelCol} className={labelColClassNames}>
                {labelComponent}
            </Col>
            <Col {...wrapperCol} className={wrapperClassNames}>
                {field ? <component.type {...component.props} id={field + "_input"} onChange={handelChange} /> : children}
                {tip ? <div className={`${prefixClass}-tip`}>{tip}</div> : null}
            </Col>
        </Row>
    }
}

FormItem.propTypes = {
    labelAlign: PropTypes.oneOf(['left', 'right', 'center']), //label对齐
    noStyle: PropTypes.bool,
}

FormItem.defaultProps = {
    prefixClass: "tui-form-item",
    noStyle: false,
}

export default FormItem