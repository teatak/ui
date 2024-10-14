import React from 'react';
import classnames from 'classnames';
import { StyledGrid } from './Grid.styled.js';
import GridItem from './Grid.Item.js';
import GridContext from './Grid.context.js';
import { mergeProps } from '../../helper/common.js';

const Grid = (inProps) => {
    const props = mergeProps({}, inProps, {
        prefixClass: 'tui-grid',
        direction: 'row',
    });
    const { prefixClass, direction, columns, spacing, justifyContent, alignItems, className, styleOverrides, autoWrap = true, ...rest } = props;
    const classNames = classnames(prefixClass, className);
    return React.createElement(GridContext.Provider, { value: { columns: columns || 12 } },
        React.createElement(StyledGrid, { "$options": props, className: classNames, ...rest }, React.Children.map(props.children, (child) => {
            if (child) {
                if (child.type === GridItem) {
                    return child;
                }
                else {
                    if (autoWrap) {
                        return React.createElement(GridItem, null, child);
                    }
                    else {
                        return child;
                    }
                }
            }
            return null;
        })));
};

export { Grid as default };
//# sourceMappingURL=Grid.js.map
