import { Button } from 'react-native';
import { Center } from '../atoms';
import { RootStackScreenProps } from '../types/navigations';

const Conversation = ({
  route,
  navigation,
}: RootStackScreenProps<'Conversation'>) => {
  const { username } = route.params;

  return (
    <Center>
      <Button
        title={username}
        onPress={() => navigation.navigate('Root', { screen: 'Chats' })}
      />
    </Center>
  );
};

export default Conversation;
