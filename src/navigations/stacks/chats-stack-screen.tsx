import { createStackNavigator } from '@react-navigation/stack';
import { Chats } from '../../screens';
import { ChatStackParamList } from './types';

const Stack = createStackNavigator<ChatStackParamList>();

const ChatsStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Chats" component={Chats} />
    </Stack.Navigator>
  );
};

export default ChatsStackScreen;
