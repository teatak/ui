import Color from './Color'

const meta = {
    title: 'Start/Color',
    component: Color,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
    },
}

export default meta;

export const Simple = {
    parameters: {
        backgrounds: { default: 'light' },
    },
    args: {
        dark: false
    },
};

export const Dark = {
    parameters: {
        backgrounds: { default: 'dark' },
    },
    args: {
        dark: true
    },
};