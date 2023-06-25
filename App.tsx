import { ThemeProvider } from '@shopify/restyle';
import theme from './src/theme';
import { Box, Text } from './src/atoms';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box flex={1} alignItems="center" justifyContent="center">
        <Text>Hello World</Text>
      </Box>
    </ThemeProvider>
  );
}
