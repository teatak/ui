import React, { forwardRef, useEffect, useContext, useRef, useState, useImperativeHandle } from "react"
import PropTypes from "prop-types"
import classnames from "classnames"
import FormContext from "../formcontext"
import { Trigger } from "../"
import { useMergeState } from "../util"

const Option = forwardRef((props, ref) => {
    const { children, prefixClass, multi, hover, ...rest } = props
    useEffect(() => {
        // if (ref.current && hover) {
        //     const offsetTop = ref.current.offsetTop
        //     const clientHeight = ref.current.clientHeight
        //     const parent = ref.current.parentElement
        //     if (offsetTop + clientHeight > (parent.scrollTop + parent.clientHeight)) {
        //         //next
        //         parent.scrollTo({ top: offsetTop + clientHeight - parent.clientHeight, behavior: 'smooth' })
        //     }
        //     if (parent.scrollTop > offsetTop) {
        //         //prev
        //         parent.scrollTo({ top: offsetTop })
        //     }
        // }

    }, [hover])
    return <li {...rest} ref={ref}>
        <span className={`${prefixClass}-option-text`}>
            {children}
        </span>
        {multi ? <span className={`${prefixClass}-option-check`}></span> : null}
    </li>
})

const Select = forwardRef((props, ref) => {

    const selectRef = useRef()
    const triggerRef = useRef()
    const optionsRef = useRef([])
    const wrapperRef = useRef(null);

    const { size: ctxSize } = useContext(FormContext);
    const { style, disabled, className, prefixClass, multi, placeholder, borderless, size, onChange, ...rest } = props

    const [value, setValue] = useMergeState((multi ? [] : undefined), {
        value: props.value,
        defaultValue: props.defaultValue,
    })

    const [focused, setFocused] = useState(false)
    const [triggerVisible, setTriggerVisible] = useState(false)
    const [hoverValue, setHoverValue] = useState(null)
    const [triggerStyle, setTriggerStyle] = useState({})

    useImperativeHandle(ref, () => ({
        dom: selectRef.current,
        getWidth: getWidth
    }));

    const getWidth = () => {
        return selectRef.current && selectRef.current.offsetWidth
    }

    const classNames = classnames(
        `${prefixClass}`,
        `${prefixClass}-${multi ? 'multi' : 'single'}`,
        `${prefixClass}-size-${size || ctxSize || "medium"}`,
        {
            [`${prefixClass}-focused`]: focused,
            [`${prefixClass}-borderless`]: borderless,
            [`${prefixClass}-open`]: triggerVisible,
        },
        className
    )

    const handleChange = (newValue) => {
        setValue(newValue)
        if (onChange) {
            onChange(newValue)
        }
    }
    //add or remove
    const handleToggle = (newValue) => {
        let _temp = [...value]
        const index = _temp.findIndex(item => item === newValue)
        if (index === -1) {
            _temp.push(newValue)
        } else {
            _temp.splice(index, 1)
        }
        setValue(_temp)
        if (onChange) {
            onChange(_temp)
        }
        setTimeout(() => {
            setTriggerStyle({ width: getWidth() })
            triggerRef.current && triggerRef.current.setPosition()
        }, 0);
    }


    useEffect(() => {
        const width = getWidth()
        setTriggerStyle({ width: width })
    }, [])

    // useEffect(() => {
    //     if (props.value) {
    //         setValue(props.value)
    //     }
    // }, [props.value])

    const open = () => {
        if (value) {
            setHoverValue(value)
        }
        setTriggerVisible(true)
    }

    const close = () => {
        setTriggerVisible(false)
    }

    const toggle = () => {
        if (triggerVisible) {
            if (hoverValue) {
                if (multi) {
                    handleToggle(hoverValue)
                } else {
                    handleChange(hoverValue)
                    close()
                }
            }
        } else {
            open()
        }
    }

    const closeAndBlur = () => {
        setFocused(false)
        close()
    }
    const scrollIntoView = (optionValue) => {
        let option = optionsRef.current.find(e => e.value == optionValue)
        if (option && option.dom) {
            const offsetTop = option.dom.offsetTop
            const clientHeight = option.dom.clientHeight
            const parent = option.dom.parentElement
            if (offsetTop + clientHeight > (parent.scrollTop + parent.clientHeight)) {
                //next
                parent.scrollTo({ top: offsetTop + clientHeight - parent.clientHeight })
            }
            if (parent.scrollTop > offsetTop) {
                //prev
                parent.scrollTo({ top: offsetTop })
            }
        }
    };

    const hoverNext = () => {
        let nextValue = undefined
        if (hoverValue) {
            //find index
            const arr = optionsRef.current.filter((item) => item.disabled === false)
            if (arr.length > 0) {
                let index = arr.findIndex((item) => item.value === hoverValue)
                if (index === -1) {
                    nextValue = arr[0].value
                } else {
                    if (index + 1 === arr.length) { //last
                        nextValue = arr[0].value
                    } else {
                        nextValue = arr[index + 1].value
                    }
                }
            }
        } else {
            //hover first
            const arr = optionsRef.current.filter((item) => item.disabled === false)
            if (arr.length > 0) {
                nextValue = arr[0].value
            }
        }
        if (nextValue) {
            setHoverValue(nextValue)
            scrollIntoView(nextValue)
        }
    }

    const hoverPrev = () => {
        let prevValue = undefined
        if (hoverValue) {
            //find index
            const arr = optionsRef.current.filter((item) => item.disabled === false)
            if (arr.length > 0) {
                let index = arr.findIndex((item) => item.value === hoverValue)
                if (index === -1) {
                    prevValue = arr[arr.length - 1].value
                } else {
                    if (index === 0) { //first
                        prevValue = arr[arr.length - 1].value
                    } else {
                        prevValue = arr[index - 1].value
                    }
                }
            }
        } else {
            //hover last
            const arr = optionsRef.current.filter((item) => item.disabled === false)
            if (arr.length > 0) {
                prevValue = arr[arr.length - 1].value
            }
        }
        if (prevValue) {
            setHoverValue(prevValue)
            scrollIntoView(prevValue)
        }
    }

    const down = () => {
        if (!triggerVisible) {
            open()
        } else {
            hoverNext()
        }
    }

    const up = () => {
        if (!triggerVisible) {
            open()
        } else {
            hoverPrev()
        }
    }

    useEffect(() => {
        //get options
        optionsRef.current = []
        const optionArray = React.Children.toArray(props.children)
        optionArray.map((item) => {
            const optionValue = item.props.value
            const optionName = item.props.name || item.props.children
            const optionDisabled = item.props.disabled ? true : false
            optionsRef.current.push({
                name: optionName,
                value: optionValue,
                disabled: optionDisabled,
            })
        })
    }, [props.children])

    const renderOptions = () => {
        const optionArray = React.Children.toArray(props.children)
        return optionArray.map((item, index) => {
            const optionValue = item.props.value
            const optionName = item.props.name || item.props.children
            let selected = false
            if (multi) {
                const index = value.findIndex(item => item === optionValue)
                if (index !== -1) {
                    selected = true
                }
            }
            const classNames = classnames(
                `${prefixClass}-option`,
                {
                    [`${prefixClass}-option-selected`]: multi ? selected : value === optionValue,
                    [`${prefixClass}-option-hover`]: hoverValue === optionValue,
                    [`${prefixClass}-option-disabled`]: item.props.disabled
                },
            )
            return <item.type multi={multi} ref={(r) => {
                //save in array
                let option = optionsRef.current.find(e => e.value == optionValue)
                if (option) {
                    option.dom = r
                }
            }} hover={hoverValue === optionValue} className={classNames}
                key={`${optionValue}`} {...item.props}
                onMouseEnter={(e) => {
                    setHoverValue(optionValue)
                    item.props.onMouseEnter && item.props.onMouseEnter(e)
                }}
                onMouseLeave={(e) => {
                    setHoverValue(null)
                    item.props.onMouseLeave && item.props.onMouseLeave(e)
                }}
                onClick={(e) => {
                    if (item.props.disabled) {
                        return
                    }
                    if (multi) {
                        handleToggle(optionValue)
                    } else {
                        handleChange(optionValue)
                        selectRef.current.focus()
                        close()
                    }

                    item.props.onClick && item.props.onClick(e)
                }}
            />
        })
    }
    const options = <ul ref={wrapperRef} className={`${prefixClass}-options`}>
        {renderOptions()}
    </ul>

    const getOptionName = (value) => {
        const item = optionsRef.current.find((item) => item.value === value)
        if (item) {
            return item.name
        } else {
            return value
        }
    }

    const renderSingle = () => {
        let inputProps = {
            style: {},
            placeholder: placeholder || "Please select",
        }
        inputProps.tabIndex = -1;
        inputProps.style.pointerEvents = 'none';
        const showInput = value === undefined;
        return <>
            <div className={`${prefixClass}-view-values`}>
                <input
                    disabled={disabled}
                    className={classnames(`${prefixClass}-view-input`, {
                        [`${prefixClass}-hidden`]: !showInput,
                    })}
                    autoComplete="off"
                    {...inputProps}
                >
                </input>
                <div className={classnames(`${prefixClass}-view-value`, {
                    [`${prefixClass}-hidden`]: showInput,
                })}>
                    <span>
                        {value ? getOptionName(value) : null}
                    </span>
                </div>
            </div>
            <div className={`${prefixClass}-suffix`}>
                <i className={`${prefixClass}-arrow`} />
            </div>
        </>
    }

    const renderMulti = () => {
        let inputProps = {
            style: {},
            placeholder: placeholder || "Please select",
        }
        inputProps.tabIndex = -1;
        inputProps.style.pointerEvents = 'none';
        const showInput = value.length === 0;
        return <>
            <div className={`${prefixClass}-view-values`}>
                <input
                    disabled={disabled}
                    className={classnames(`${prefixClass}-view-input`, {
                        [`${prefixClass}-hidden`]: !showInput,
                    })}
                    autoComplete="off"
                    {...inputProps}
                >
                </input>
                {value.map((item, index) => {
                    return <div key={index} className={`${prefixClass}-view-value`}>
                        <span>
                            {getOptionName(item)}
                        </span>
                    </div>
                })}
            </div>
            <div className={`${prefixClass}-suffix`}>
                <i className={`${prefixClass}-arrow`} />
            </div>
        </>
    }

    const triggerClassNames = classnames(
        `${prefixClass}-trigger`,
        {
            [`${prefixClass}-trigger-multi`]: multi
        }
    )

    return <Trigger
        position="bottomLeft"
        disabled={disabled}
        className={triggerClassNames}
        style={triggerStyle}
        arrow={false}
        ref={triggerRef}
        content={options}
        visible={triggerVisible}
        transitionClass="slide"
        onVisibleChange={(v) => {
            if (v) {
                open()
            } else {
                close()
            }
        }}
        onClickOutSide={() => {
            closeAndBlur()
        }}
    >
        <div
            tabIndex={disabled ? -1 : 0}
            className={classNames}
            {...rest}
            disabled={disabled}
            style={style}
            ref={selectRef}
            onKeyDown={(e) => {
                // if (e.target.style.pointerEvents === "none") {
                //     return
                // }
                if (disabled) return
                switch (e.code) {
                    case "Space":
                    case "Enter":
                        e.stopPropagation()
                        e.preventDefault()
                        setFocused(true)
                        toggle()
                        break
                    case "Escape":
                        close()
                        break
                    case "Tab":
                        closeAndBlur()
                        break
                    case "ArrowDown":
                        //down
                        down()
                        e.stopPropagation()
                        e.preventDefault()
                        break
                    case "ArrowUp":
                        //up
                        up()
                        e.stopPropagation()
                        e.preventDefault()
                        break
                }
            }}
            onFocus={(e) => {
                if (disabled) return
                setFocused(true)
            }}
            onBlur={(e) => {
                if (disabled) return
                if (!triggerVisible) {
                    setFocused(false)
                }
            }}
        >
            {multi ? renderMulti() : renderSingle()}
        </div>
    </Trigger >
})

Select.propTypes = {
    size: PropTypes.oneOf(['large', 'medium', 'small', 'tiny']), //大小
}

Select.defaultProps = {
    prefixClass: 'tui-select',
}

Option.defaultProps = {
    prefixClass: 'tui-select',
}

Select.Option = Option

export default Select