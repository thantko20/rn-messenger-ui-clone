import { createStackNavigator } from '@react-navigation/stack';
import { Chats } from '../screens';

const Stack = createStackNavigator();

export const ChatsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Chats" component={Chats} />
    </Stack.Navigator>
  );
};
