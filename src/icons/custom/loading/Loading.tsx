import React from 'react';
import styled, { keyframes } from 'styled-components'

const dasharray = keyframes`
    0% {
        stroke-dasharray: 1px, 200px;
        stroke-dashoffset: 0;
    }
    50% {
        stroke-dasharray: 100px, 200px;
        stroke-dashoffset: -15px;
    }
    100% {
        stroke-dasharray: 100px, 200px;
        stroke-dashoffset: -125px;
    }
`
const rotate = keyframes`
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
`

const Svg = styled.svg`
    animation: 1.4s linear 0s infinite normal none running ${rotate};
    & circle {
        stroke: currentColor;
        animation: 1.4s ease-in-out 0s infinite normal none running ${dasharray};
    }
`

const Loading = () => {
    return <Svg viewBox='0 0 44 44'>
        <circle cx='22' cy='22' r='20' fill='none' strokeWidth='4' strokeLinecap='round'></circle>
    </Svg>
}
export default Loading