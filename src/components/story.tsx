import { Image } from 'react-native';
import { Box, Text } from '../atoms';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../theme';

const Story = ({ name }: { name: string }) => {
  const { borderRadii } = useTheme<Theme>();
  return (
    <Box gap="sm" alignItems="center">
      <Box
        width={52}
        height={52}
        alignItems="center"
        justifyContent="center"
        position="relative"
      >
        <Image
          source={require('../../assets/avatar.jpg')}
          style={{
            width: '100%',
            height: '100%',
            borderRadius: borderRadii.full,
          }}
        />
        <Box
          backgroundColor="$onlineIndicator"
          width={14}
          height={14}
          borderRadius="full"
          position="absolute"
          bottom={2}
          right={2}
          borderColor="white"
          borderWidth={2}
        ></Box>
      </Box>
      <Text fontSize={12} numberOfLines={1} ellipsizeMode="tail">
        {name}
      </Text>
    </Box>
  );
};

export default Story;
