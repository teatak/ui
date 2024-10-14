'use strict';

var styled = require('styled-components');
var theme = require('../../style/theme.js');
require('../../style/defaultTheme.js');

const StyledBox = styled.div `
    ${props => {
    return theme.mergeStyleOverrides('TuiBox', props.$options);
}}
`;

exports.StyledBox = StyledBox;
//# sourceMappingURL=Box.styled.js.map
