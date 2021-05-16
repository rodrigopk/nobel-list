import { theme as baseTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

import { appColors } from './colors';

export const definitions = {
  ...baseTheme,
  breakpoints: createBreakpoints({
    sm: '22em',
    md: '60em',
    lg: '75em',
    xl: '80em',
  }),
  colors: appColors,
  components: {
    Divider: {
      baseStyle: {
        borderColor: 'gray.500',
      },
    },
    Text: {
      variants: {
        h1: {
          fontSize: '64px',
          lineHeight: '66px',
        },
        h5: {
          fontSize: '24px',
          lineHeight: '26px',
        },
        h6: {
          fontSize: '20px',
          lineHeight: '22px',
        },
        body: {
          fontSize: '16px',
          lineHeight: '18px',
        },
        caption: {
          fontSize: '14px',
          lineHeight: '16px',
        },
      },
      defaultProps: {
        v: 'body',
        color: 'black',
      },
    },
  },
};
