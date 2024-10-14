import { useCallback } from 'react';
import { useMergeState } from '../../helper/common.js';

const ControlGroup = (props) => {
    const { single: singleProp, options, onChange, value: valueProp, defaultValue: defaultValueProp, render, ...rest } = props;
    const allOptionValues = options?.map((option) => {
        return option.value;
    });
    let single = singleProp !== undefined ? singleProp : !(Array.isArray(valueProp) || Array.isArray(defaultValueProp));
    const [value, setValue] = useMergeState(single ? undefined : [], {
        defaultValue: 'defaultValue' in props ? defaultValueProp || (single ? undefined : []) : undefined,
        value: 'value' in props ? valueProp || (single ? undefined : []) : undefined,
    });
    const handleChange = useCallback((optionValue, selected) => {
        if (single) {
            if (selected) {
                let newValue = optionValue;
                setValue(newValue);
                onChange && onChange(newValue);
            }
        }
        else {
            if (selected) {
                let newValue = [...value];
                if (newValue.indexOf(optionValue) === -1) {
                    newValue.push(optionValue);
                }
                setValue(newValue);
                onChange && onChange(newValue);
            }
            else {
                let newValue = [...value];
                const index = newValue.indexOf(optionValue);
                if (index != -1) {
                    newValue.splice(index, 1);
                }
                setValue(newValue);
                onChange && onChange(newValue);
            }
        }
    }, [value, onChange, allOptionValues]);
    //构造新的options
    let _options = [];
    Array.isArray(options) &&
        options.map((option, i) => {
            let selected;
            if (Array.isArray(value)) {
                selected = value.indexOf(option.value) > -1;
            }
            else {
                selected = option.value == value;
            }
            const props = {
                key: i,
                selected,
                onChange: (e) => {
                    let selected = e;
                    if (e.target) {
                        if (e.target.checked !== undefined) {
                            //checkbox
                            selected = e.target.checked;
                        }
                        else {
                            //input
                            selected = e.target.value;
                        }
                    }
                    handleChange(option.value, selected);
                },
                ...option
            };
            _options.push(props);
        });
    return render && render(_options);
};

export { ControlGroup as default };
//# sourceMappingURL=ControlGroup.js.map
