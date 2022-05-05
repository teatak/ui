import React from 'react'
import { ArticleRounded, ToggleOffRounded } from '@mui/icons-material'

const MenuData = [
    {
        subMenu: true,
        name: "Getting Started",
        icon: <ArticleRounded />,
        children: [
            {
                path: '/color',
                name: 'Color',
                end: false,
            },
            {
                path: '/button',
                name: 'Button',
                end: false,
            },
            {
                path: '/input',
                name: 'Input',
                end: false,
            },
        ]
    },
    {
        subMenu: true,
        name: "Components",
        icon: <ToggleOffRounded />,
        children: [
            {
                path: '/select',
                name: 'Select',
                end: false,
            },
            {
                path: '/check',
                name: 'Check',
                end: false,
            },
            {
                path: '/radio',
                name: 'Radio',
                end: false,
            },
            {
                path: '/form',
                name: 'Form',
                end: false,
            },
            {
                path: '/grid',
                name: 'Grid',
                end: false,
            },
            {
                path: '/space',
                name: 'Space',
                end: false,
            },
            {
                path: '/modal',
                name: 'Modal',
                end: false,
            },
            {
                path: '/trigger',
                name: 'Trigger',
                end: false,
            },
            {
                path: '/alert',
                name: 'Alert',
                end: false,
            },
            {
                path: '/notification',
                name: 'Notification',
                end: false,
            },
        ]
    }
]

export default MenuData