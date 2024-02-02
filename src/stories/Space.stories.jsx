import React from 'react'
import { Space } from '../components'

export default {
    title: 'Components/Space',
    component: Space,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
    },
}

export const Simple = {
    args: {
        style: {
            backgroundColor: "#999",
            width: "200px",
            height: "200px",
        },
        children: [
            <span>1</span>,
            <span>2</span>,
            <span>3</span>,
            <span>4</span>
        ]
    }
}
