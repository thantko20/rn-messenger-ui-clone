import { useAtomValue } from 'jotai';
import { Box, Text } from '../atoms';
import { Message } from '../types/conversation.types';
import { userAtom } from '../store';

const MessageCard = ({
  message,
  prevMessage,
}: {
  message: Message;
  prevMessage?: Message;
}) => {
  const me = useAtomValue(userAtom);
  const sentByMe = me.id === message.sentBy.id;

  return (
    <Box
      backgroundColor={sentByMe ? '$primary' : '$lightestGray'}
      maxWidth={'75%'}
      alignSelf={sentByMe ? 'flex-start' : 'flex-end'}
      padding={'sm'}
      borderRadius="sm"
      style={{
        transform: [{ scaleY: -1 }, { scaleX: -1 }],
        marginTop: message.sentBy.id === prevMessage?.sentBy.id ? -10 : 0,
      }}
    >
      <Text color={sentByMe ? 'white' : '$foreground'}>{message.text}</Text>
    </Box>
  );
};

export default MessageCard;
