import { ReactNode } from 'react';
import Box from './box';

const Center = ({ children }: { children: ReactNode }) => {
  return (
    <Box flex={1} alignItems="center" justifyContent="center">
      {children}
    </Box>
  );
};

export default Center;
