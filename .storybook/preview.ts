import type { Preview } from '@storybook/react';
import { createTheme, prerenderColorScheme } from '../src/style'

prerenderColorScheme(createTheme({
  baseColor: {
    primary: 'rgb(113, 101, 227)',
  },
}))

// import { prerenderColorScheme } from '../src/style'
// const theme = {
//   // base: {
//   //   primary: 'rgb(113, 101, 227)',
//   // }
// }
// prerenderColorScheme(theme)

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
