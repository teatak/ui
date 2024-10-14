import styled from 'styled-components';
import { mergeStyleOverrides } from '../../style/theme.js';
import '../../style/defaultTheme.js';

const StyledBox = styled.div `
    ${props => {
    return mergeStyleOverrides('TuiBox', props.$options);
}}
`;

export { StyledBox };
//# sourceMappingURL=Box.styled.js.map
