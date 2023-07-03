import { FlatList } from 'react-native';
import { Box } from '../atoms';
import { RootStackScreenProps } from '../types/navigations';
import { useEffect, useState } from 'react';
import { ConversationBottomBox } from '../components';
import MessageCard from '../components/message-card';
import { useAtom, useAtomValue } from 'jotai';
import { messagesAtom, userAtom } from '../store';

const Conversation = ({
  route,
  navigation,
}: RootStackScreenProps<'Conversation'>) => {
  const { user, id } = route.params;
  const [allMessages, setMessages] = useAtom(messagesAtom);
  const me = useAtomValue(userAtom);

  const messages = allMessages.filter((msg) => msg.conversationId === id);

  const sendMessage = (message: string) => {
    setMessages([
      {
        id: allMessages.length + 1,
        conversationId: id,
        sentBy: me,
        text: message,
      },
      ...allMessages,
    ]);
  };

  useEffect(() => {
    navigation.setOptions({ headerTitle: user.name });
  }, []);

  return (
    <Box flex={1} backgroundColor="white">
      <Box flex={1}>
        <FlatList
          contentContainerStyle={{
            gap: 12,
            padding: 8,
          }}
          style={{
            // this is used instead of `inverted` prop
            // due to horrible laggy performance
            // renderItem also needs to be applied this style
            // to accomodate FlatList parent
            transform: [{ scaleY: -1 }, { scaleX: -1 }],
          }}
          data={messages}
          renderItem={({ item, index }) => {
            return (
              <MessageCard
                message={item}
                prevMessage={messages[index - 1]}
                key={item.text}
              />
            );
          }}
          keyExtractor={({ id }) => id.toString()}
        />
      </Box>
      <ConversationBottomBox sendMessage={sendMessage} />
    </Box>
  );
};

export default Conversation;
