import { useState } from 'react';
import { Box } from '../atoms';
import SearchBox from '../components/search-box';
import Stories from '../components/stories';
import { FlatList } from 'react-native';
import { User } from '../types/users.types';
import { Conversation } from '../types/conversation';
import ConversationCard from '../components/conversation-card';
import { NavigationProp } from '@react-navigation/native';

const stories: User[] = [
  { name: 'Emile', avatar: '../../assets/avatar.jpg' },
  { name: 'Emile', avatar: '../../assets/avatar.jpg' },
  { name: 'Emile', avatar: '../../assets/avatar.jpg' },
  { name: 'Emile', avatar: '../../assets/avatar.jpg' },
  { name: 'Emile', avatar: '../../assets/avatar.jpg' },
  { name: 'Emile', avatar: '../../assets/avatar.jpg' },
  { name: 'Emile', avatar: '../../assets/avatar.jpg' },
];

const conversations: Conversation[] = [
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

  return (
    <Box flex={1}>
      <Box paddingHorizontal={'md'}>
        <SearchBox value={search} onChangeText={setSearch} />
        <Stories stories={stories} />
      </Box>
      <FlatList
        contentContainerStyle={{ justifyContent: 'center' }}
        data={conversations}
        renderItem={({ item }) => {
          return <ConversationCard key={item.name} conversation={item} />;
        }}
      />
    </Box>
  );
};

export default Chats;
