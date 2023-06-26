import { useState } from 'react';
import { Box, Text } from '../atoms';
import SearchBox from '../components/search-box';
import Stories from '../components/stories';
import { FlatList, Image } from 'react-native';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../theme';

const stories = [
  { name: 'Emile', avatar: '../../assets/avatar.jpg' },
  { name: 'Emile', avatar: '../../assets/avatar.jpg' },
  { name: 'Emile', avatar: '../../assets/avatar.jpg' },
  { name: 'Emile', avatar: '../../assets/avatar.jpg' },
  { name: 'Emile', avatar: '../../assets/avatar.jpg' },
  { name: 'Emile', avatar: '../../assets/avatar.jpg' },
  { name: 'Emile', avatar: '../../assets/avatar.jpg' },
];

const conversations = [
  {
    name: 'Martin Randolph',
    avatar: '../../assets/avatar.jpg',
    sendByUser: true,
    lastMessage: "What's man!",
  },
  {
    name: 'Andrew Parker',
    avatar: '../../assets/avatar.jpg',
    sendByUser: true,
    lastMessage: 'Ok, thanks!',
  },
  {
    name: 'Karen Castillo',
    avatar: '../../assets/avatar.jpg',
    sendByUser: true,
    lastMessage: 'Ok, See you tomorrow!',
  },
  {
    name: 'Maisy Humphrey',
    avatar: '../../assets/avatar.jpg',
    sendByUser: false,
    lastMessage: 'Have a good day , Maisy!',
  },
  {
    name: 'Joshua Lawrence',
    avatar: '../../assets/avatar.jpg',
    sendByUser: false,
    lastMessage: 'The business plan loops over something.',
  },
];

const Chats = () => {
  const [search, setSearch] = useState('');

  const { borderRadii, spacing } = useTheme<Theme>();

  return (
    <Box flex={1}>
      <SearchBox value={search} onChangeText={setSearch} />
      <Stories stories={stories} />
      <FlatList
        contentContainerStyle={{ gap: spacing.lg, justifyContent: 'center' }}
        data={conversations}
        renderItem={({ item, index }) => {
          return (
            <Box flexDirection="row" gap="md" alignItems="center">
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
                  {item.name}
                </Text>
                <Text
                  fontSize={14}
                  fontWeight="700"
                  color="$textMuted"
                  style={{ maxWidth: 180 }}
                  numberOfLines={1}
                >
                  {item.sendByUser && 'You: '}
                  {item.lastMessage}
                </Text>
              </Box>
            </Box>
          );
        }}
      />
    </Box>
  );
};

export default Chats;
