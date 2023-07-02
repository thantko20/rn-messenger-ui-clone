import { Image } from 'react-native';
import { Box, Text, Pressable } from '../atoms';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../theme';
import { useNavigation } from '@react-navigation/native';
import { RootBottomTabScreenProps } from '../types/navigations/bottom-tabs.types';
import { User } from '../types/users.types';

const Story = ({ story }: { story: User }) => {
  const { name, avatar, isOnline } = story;
  const { borderRadii } = useTheme<Theme>();
  const navigation =
    useNavigation<RootBottomTabScreenProps<'Chats'>['navigation']>();

  return (
    <Pressable
      gap="sm"
      alignItems="center"
      onPress={() =>
        navigation.navigate('Conversation', { username: name, avatar })
      }
    >
      <Box
        width={52}
        height={52}
        alignItems="center"
        justifyContent="center"
        position="relative"
      >
        <Image
          source={avatar}
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
    </Pressable>
  );
};

export default Story;
