import { FlatList } from 'react-native';
import { Box } from '../atoms';
import { RootStackScreenProps } from '../types/navigations';
import { useEffect, useState } from 'react';
import { loremIpsum } from 'lorem-ipsum';
import { ConversationBottomBox } from '../components';
import MessageCard from '../components/message-card';

const generateRandomText = () =>
  loremIpsum({
    count: 1,
    sentenceUpperBound: 20,
    units: 'sentences',
  });

const Conversation = ({
  route,
  navigation,
}: RootStackScreenProps<'Conversation'>) => {
  const [messages] = useState(
    Array.from(Array(20)).map(() => ({
      text: generateRandomText(),
      sentByMe: Math.random() > 0.5,
    })),
  );
  const { username } = route.params;

  useEffect(() => {
    navigation.setOptions({ headerTitle: username });
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
        />
      </Box>
      <ConversationBottomBox />
    </Box>
  );
};

export default Conversation;
