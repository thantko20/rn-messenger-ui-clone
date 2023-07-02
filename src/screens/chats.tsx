import { useState } from 'react';
import { Box } from '../atoms';
import SearchBox from '../components/search-box';
import Stories from '../components/stories';
import { FlatList } from 'react-native';
import ConversationCard from '../components/conversation-card';
import { useAtomValue } from 'jotai';
import { conversationsAtom } from '../store';

const Chats = () => {
  const [search, setSearch] = useState('');
  const conversations = useAtomValue(conversationsAtom);

  return (
    <Box flex={1}>
      <Box paddingHorizontal={'md'}>
        <SearchBox value={search} onChangeText={setSearch} />
        <Stories />
      </Box>
      <FlatList
        contentContainerStyle={{ justifyContent: 'center' }}
        data={conversations}
        renderItem={({ item }) => {
          return <ConversationCard key={item.id} conversation={item} />;
        }}
      />
    </Box>
  );
};

export default Chats;
