/**
 * Created by yanggang on 2018/12/26.
 * form item
 */
import React, { useEffect, useState, useContext } from "react";
import classnames from "classnames"
import PropTypes from "prop-types"
import Schema from "async-validator"

import FormContext from "../formcontext"
import { Row, Col } from "../grid"
import "../grid/style"

const FormItem = (props) => {
    const formContext = useContext(FormContext)
    const { label, field, className, children, prefixClass, onChange, ...rest } = props

    const [value, setValue] = useState(props.value || props.defaultValue || "")
    const [hasError, setHasError] = useState(props.hasError)
    const [tip, setTip] = useState(props.tip)

    const labelAlign = props.labelAlign || formContext.labelAlign
    const labelCol = props.labelCol || formContext.labelCol
    const wrapperCol = props.wrapperCol || formContext.wrapperCol
    const layout = formContext.layout
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
                        }
                    });
                }
                if (!messages) {
                    setHasError(false)
                    setTip("")
                }
            }
            return messages;
        }

    }
    useEffect(() => {
        if (field) {
            formContext.setItem(field, { formItem: { validate: validate(value) }, value: value })
        }
    }, [props])


    const handelChange = (e, value) => {
        const v = validate(e.target.value)
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

    const labelDivClassNames = classnames(
        `${prefixClass}-label`,
    )

    const labelColClassNames = classnames(
        `${prefixClass}-label`,
        `${prefixClass}-label-${labelAlign}`,
    )

    const wrapperClassNames = classnames(
        `${prefixClass}-wrapper`,
    )
    const component = children;

    if (Array.isArray(component)) {
        console.error("Form.Item can only accept a single child");
        return null;
    }

    return layout === "horizontal" ? <Row className={classNames}>
        <Col className={labelColClassNames} {...labelCol}>
            {label ? <label className={requiredSymbol && required ? `${prefixClass}-required` : null} htmlFor={field ? field + "_input" : null} >{label}</label> : null}
        </Col>
        <Col className={wrapperClassNames} {...wrapperCol}>
            <component.type {...component.props} id={field + "_input"} onChange={handelChange} />
            {tip ? <div className={`${prefixClass}-tip`}>{tip}</div> : null}
        </Col>
    </Row> :
        <div className={classNames}>
            <div className={labelDivClassNames} >
                {label ? <label className={requiredSymbol && required ? `${prefixClass}-required` : null} htmlFor={field ? field + "_input" : null} >{label}</label> : null}
            </div>
            <div className={wrapperClassNames} >
                <component.type {...component.props} id={field + "_input"} onChange={handelChange} />
                {tip ? <div className={`${prefixClass}-tip`}>{tip}</div> : null}
            </div>
        </div>

}

FormItem.propTypes = {
    labelAlign: PropTypes.oneOf(['left', 'right', 'center']), //label对齐
}

FormItem.defaultProps = {
    prefixClass: "tui-form-item",
}

export default FormItem