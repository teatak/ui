'use strict';

var React = require('react');
var classnames = require('classnames');
var Grid_styled = require('./Grid.styled.js');
var Grid_Item = require('./Grid.Item.js');
var Grid_context = require('./Grid.context.js');
var common = require('../../helper/common.js');

const Grid = (inProps) => {
    const props = common.mergeProps({}, inProps, {
        prefixClass: 'tui-grid',
        direction: 'row',
    });
    const { prefixClass, direction, columns, spacing, justifyContent, alignItems, className, styleOverrides, autoWrap = true, ...rest } = props;
    const classNames = classnames(prefixClass, className);
    return React.createElement(Grid_context.Provider, { value: { columns: columns || 12 } },
        React.createElement(Grid_styled.StyledGrid, { "$options": props, className: classNames, ...rest }, React.Children.map(props.children, (child) => {
            if (child) {
                if (child.type === Grid_Item) {
                    return child;
                }
                else {
                    if (autoWrap) {
                        return React.createElement(Grid_Item, null, child);
                    }
                    else {
                        return child;
                    }
                }
            }
            return null;
        })));
};

module.exports = Grid;
//# sourceMappingURL=Grid.js.map
