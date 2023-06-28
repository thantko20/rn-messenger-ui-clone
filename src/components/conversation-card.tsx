import { Image } from 'react-native';
import { Box, Pressable, Text } from '../atoms';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../theme';
import { Conversation } from '../types/conversation';
import { useNavigation } from '@react-navigation/native';

const ConversationCard = ({ conversation }: { conversation: Conversation }) => {
  const { borderRadii } = useTheme<Theme>();
  const navigation = useNavigation();

  return (
    <Pressable
      flexDirection="row"
      gap="sm"
      alignItems="center"
      onPress={() => {
        navigation.navigate('ChatDetail');
      }}
      paddingHorizontal="md"
      paddingVertical="sm"
    >
      <Image
        source={require('../../assets/avatar.jpg')}
        style={{
          width: 60,
          height: 60,
          borderRadius: borderRadii.full,
        }}
      />
      <Box gap={'xs'}>
        <Text fontSize={18} fontWeight="700">
          {conversation.name}
        </Text>
        <Text
          fontSize={14}
          fontWeight="700"
          color="$textMuted"
          style={{ maxWidth: 180 }}
          numberOfLines={1}
        >
          {conversation.sendByUser && 'You: '}
          {conversation.lastMessage}
        </Text>
      </Box>
    </Pressable>
  );
};

export default ConversationCard;
