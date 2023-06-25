import { ThemeProvider } from '@shopify/restyle';
import Navigations from './navigations';
import theme from './theme';

const Providers = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navigations />
    </ThemeProvider>
  );
};

export default Providers;
