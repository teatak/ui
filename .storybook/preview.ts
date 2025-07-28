import type { Preview } from "@storybook/react-webpack5";
import { createTheme, prerenderStyle } from '@/style'
import { css } from "styled-components";

declare module '@/style' {
  interface ColorNameOverrides {
    custom: true
  }
}
const theme = createTheme({
  baseColor: {
    custom: "rgb(10, 132, 255)",
  },
  colorSchemes: {
    light: {
      custom: {
      }
    }
  },
  components: {
    TuiButton: {
      //styleOverrides StyledObject | ((ownerState: ComponentOwnerState) => StyledObject | RuleSet<object>)
      styleOverrides: (ownerState) => {
        const color = ownerState.color
        return css``
      }
    }
  }
})
console.log(theme)
prerenderStyle('system', css`
  .tui-icon {
    width: 1em;
    height: 1em;
    path[opacity] {
      opacity: .1;
    }
  }
`)

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
