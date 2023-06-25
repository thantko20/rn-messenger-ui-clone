import { createStackNavigator } from '@react-navigation/stack';
import { Chats } from '../../screens';

const Stack = createStackNavigator();

const ChatsStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Chats" component={Chats} />
    </Stack.Navigator>
  );
};

export default ChatsStackScreen;
