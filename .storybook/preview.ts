import type { Preview } from '@storybook/react';
import { createTheme, prerenderStyle } from '../src/style'

const theme = createTheme({
  baseColor: {
    primary: 'rgb(113, 101, 227)',
  },
})

prerenderStyle('system')

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
    tags: [''],
    backgrounds: {
      // default: 'default',
      // values: [
      //   {
      //     name: 'default',
      //     value: 'transparent',
      //   }
      // ],
    },
  },
};

export default preview;
