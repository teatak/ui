import type { Preview } from "@storybook/react";
import { createTheme, prerenderStyle } from '../src/style'

const theme = createTheme({
  baseColor: {
    // primary: 'rgb(113, 101, 227)',
  },
})
console.log(theme)
prerenderStyle('system')

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
