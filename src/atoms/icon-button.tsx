import { ReactNode } from 'react';
import Pressable from './pressable';
import Box from './box';

const IconButton = ({
  children,
  onPress,
}: {
  children: ReactNode;
  onPress: () => void;
}) => {
  return (
    <Box overflow="hidden" borderRadius="full">
      <Pressable
        onPress={onPress}
        rippleColor="$addStory"
        borderRadius="full"
        alignItems="center"
        justifyContent="center"
        width={38}
        height={38}
      >
        {children}
      </Pressable>
    </Box>
  );
};

export default IconButton;
