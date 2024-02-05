import React from "react";
import styled from "styled-components";
import { InputProps } from "./interface";

const StyledInput = styled.input<InputProps>`
    color:red;
`;

export const Input = (props: InputProps) => {
    const {
        primary,
        disabled,
        size,
        text
    } = props
    return (
        <StyledInput
            type="input"
            primary={primary}
            disabled={disabled}
            size={size}
            defaultValue={text}
        >
        </StyledInput>
    );
};
