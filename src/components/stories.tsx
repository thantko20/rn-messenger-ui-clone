import { FlatList } from 'react-native';
import { Box, Text } from '../atoms';
import { AntDesign } from '@expo/vector-icons';
import Story from './story';

const Stories = ({
  stories,
}: {
  stories: { name: string; avatar: string }[];
}) => {
  return (
    <Box flexDirection="row" gap="md" paddingVertical={'xl'} overflow="scroll">
      <Box gap="sm" alignItems="center">
        <Box
          width={52}
          height={52}
          alignItems="center"
          justifyContent="center"
          backgroundColor="$addStory"
          borderRadius="full"
        >
          <AntDesign name="plus" size={21} />
        </Box>
        <Text fontSize={12}>Your story</Text>
      </Box>
      <FlatList
        horizontal
        contentContainerStyle={{
          flexDirection: 'row',
          gap: 24,
        }}
        data={stories}
        renderItem={({ item }) => <Story {...item} />}
      />
    </Box>
  );
};

export default Stories;
