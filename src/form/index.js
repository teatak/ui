/**
 * Created by yanggang on 2018/12/26.
 * form
 */
import React, { useState, useMemo } from "react"
import PropTypes from "prop-types"
import classnames from "classnames"
import FormItem from "./form-item"
import FormContext from '../form/form-context'

const Form = (props) => {
    const { style, requiredSymbol, size, className, prefixClass, labelAlign, labelCol, wrapperCol, layout, onSubmit, disabled, ...rest } = props
    const momeForm = () => {
        return {
            items: {},
            requiredSymbol: requiredSymbol,
            layout: layout,
            size: size,
            labelAlign, labelAlign,
            labelCol: labelCol,
            wrapperCol: wrapperCol,
            disabled: disabled,
            setItem: (name, element) => {
                form.items[name] = element
            }
        }
    }

    const form = useMemo(() => momeForm(), [props])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (onSubmit) {
            let values = {}
            let errors = null
            Object.keys(form.items).map((key) => {
                let component = form.items[key]
                if (component.value !== undefined) {
                    values[key] = component.value
                } else {
                    values[key] = undefined
                    //console.error("The component " + component.control + " missing value")
                }
                let err = component.formItem.validate()
                if (err) {
                    errors = errors || {}
                    errors[key] = err
                }
            })
            onSubmit(e, errors, values)
        }
    }

    const classNames = classnames(
        prefixClass,
        `${prefixClass}-size-${size}`,
        `${prefixClass}-layout-${layout}`,
        className,
    )
    return <FormContext.Provider value={form}>
        <form className={classNames} style={style} onSubmit={handleSubmit} {...rest}>
            {props.children}
        </form>
    </FormContext.Provider>
}

Form.Item = FormItem

Form.propTypes = {
    layout: PropTypes.oneOf(['horizontal', 'vertical', 'inline']), //布局
    size: PropTypes.oneOf(['large', 'medium', 'small', 'tiny']), //大小
    labelAlign: PropTypes.oneOf(['left', 'right', 'center']), //label对齐
    requiredSymbol: PropTypes.bool, //是否显示*
    disabled: PropTypes.bool, //禁用
}

Form.defaultProps = {
    prefixClass: "tui-form",
    layout: "horizontal",
    size: "medium",
    disabled: false,
    labelCol: { span: 5 },
    wrapperCol: { span: 19 },
    labelAlign: "right",
    requiredSymbol: true,
}

export default Form