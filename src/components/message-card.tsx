import { Box, Text } from '../atoms';
import { Message } from '../types/conversation.types';

const MessageCard = ({
  message,
  prevMessage,
}: {
  message: Message;
  prevMessage?: Message;
}) => {
  return (
    <Box
      backgroundColor={message.sentByMe ? '$primary' : '$lightestGray'}
      maxWidth={'75%'}
      alignSelf={message.sentByMe ? 'flex-start' : 'flex-end'}
      padding={'sm'}
      borderRadius="sm"
      style={{
        transform: [{ scaleY: -1 }, { scaleX: -1 }],
        marginTop: message.sentByMe === prevMessage?.sentByMe ? -10 : 0,
      }}
    >
      <Text color={message.sentByMe ? 'white' : '$foreground'}>
        {message.text}
      </Text>
    </Box>
  );
};

export default MessageCard;
