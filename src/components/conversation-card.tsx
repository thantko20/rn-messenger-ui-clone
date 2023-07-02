import { Image } from 'react-native';
import { Box, Pressable, Text } from '../atoms';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../theme';
import { Conversation } from '../types/conversation.types';
import { useNavigation } from '@react-navigation/native';
import { RootBottomTabScreenProps } from '../types/navigations/bottom-tabs.types';
import { useAtomValue } from 'jotai';
import { messagesAtom } from '../store';

const ConversationCard = ({ conversation }: { conversation: Conversation }) => {
  const { user } = conversation;
  const lastMessage = useAtomValue(messagesAtom).filter(
    (m) => m.conversationId === conversation.id,
  )[0];

  const { borderRadii } = useTheme<Theme>();
  const navigation =
    useNavigation<RootBottomTabScreenProps<'Chats'>['navigation']>();

  return (
    <Pressable
      flexDirection="row"
      gap="sm"
      alignItems="center"
      onPress={() => {
        navigation.navigate('Conversation', {
          username: user.name,
          avatar: user.avatar,
        });
      }}
      paddingHorizontal="md"
      paddingVertical="sm"
      rippleColor="$lightestGray"
    >
      <Image
        source={user.avatar}
        style={{
          width: 60,
          height: 60,
          borderRadius: borderRadii.full,
        }}
      />
      <Box gap={'xs'}>
        <Text fontSize={18} fontWeight="700">
          {user.name}
        </Text>
        <Text
          fontSize={14}
          fontWeight="700"
          color="$textMuted"
          style={{ maxWidth: 180 }}
          numberOfLines={1}
        >
          {lastMessage.sentBy.id && 'You: '}
          {lastMessage.text}
        </Text>
      </Box>
    </Pressable>
  );
};

export default ConversationCard;
