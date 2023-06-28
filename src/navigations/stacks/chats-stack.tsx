import { createStackNavigator } from '@react-navigation/stack';
import { Chats } from '../../screens';
import Conversation from '../../screens/conversation';
import { ChatStackParamsList } from '../../types/navigations/chats-stack.types';

const Stack = createStackNavigator<ChatStackParamsList>();

const ChatsStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Chats" component={Chats} />
      <Stack.Screen name="Conversation" component={Conversation} />
    </Stack.Navigator>
  );
};

export default ChatsStackScreen;
