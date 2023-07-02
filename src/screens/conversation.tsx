import { FlatList } from 'react-native';
import { Box, Text } from '../atoms';
import { RootStackScreenProps } from '../types/navigations';
import { useEffect, useState } from 'react';
import { loremIpsum } from 'lorem-ipsum';
import { ConversationBottomBox } from '../components';

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
            gap: 4,
          }}
          data={messages}
          renderItem={({ item, index }) => (
            <Box
              key={index}
              backgroundColor={item.sentByMe ? '$primary' : '$lightestGray'}
            >
              <Text>{item.text}</Text>
            </Box>
          )}
        />
      </Box>
      <ConversationBottomBox />
    </Box>
  );
};

export default Conversation;
