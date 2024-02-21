import type { Preview } from '@storybook/react';
import { prerenderColorScheme } from '../src/style'
const theme = {
  // base: {
  //   primary: 'rgb(93, 74, 99)',
  // }
}
prerenderColorScheme(theme)

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
