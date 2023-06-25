import { createTheme } from '@shopify/restyle';

const palette = {
  blue300: '#2093fe',
  blue200: '#349cfe',
  blue400: '#0584FE',
  blue500: '#017ef4',
  blue600: '#0174df',

  green500: '#22c55e',

  gray100: '#f3f4f6',
  gray200: '#e5e7eb',
  gray300: '#d1d5db',
  gray400: '#9ca3af',
  gray500: '#71717a',
  gray800: '#1f2937',
  gray900: '#18181b',
  gray950: '#030712',

  black: '#000',
  white: '#fff',
};

const theme = createTheme({
  colors: {
    white: palette.white,
    black: palette.black,
    blue: palette.blue400,
    green: palette.green500,

    $background: palette.white,
    $foreground: palette.black,
    $primary: palette.blue400,
    $primaryForeground: palette.white,
    $primaryRipple: palette.blue500,
    $activityIndicator: palette.green500,
  },

  spacing: {
    0: 0,
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
    '2xl': 48,
    '3xl': 64,
  },

  borderRadii: {
    xs: 4,
    sm: 16,
    md: 24,
    lg: 64,
    full: 9999,
  },

  textVariants: {
    defaults: {
      color: '$foreground',
      fontSize: 16,
    },
  },
});

export type Theme = typeof theme;

export default theme;
