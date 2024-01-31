import React from "react";
import styled from "styled-components";
import { InputProps } from "./interface";

const StyledInput = styled.input<InputProps>`
    color:red;
`;

const Input: React.FC<InputProps> = ({
    size,
    primary,
    disabled,
    text,
}) => {
    return (
        <StyledInput
            type="input"
            primary={primary}
            disabled={disabled}
            size={size}
        >
            {text}
        </StyledInput>
    );
};

export default Input;