import { createStackNavigator } from '@react-navigation/stack';
import { Calls } from '../../screens';

const Stack = createStackNavigator();

const CallsStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Calls" component={Calls} />
    </Stack.Navigator>
  );
};

export default CallsStackScreen;
