import { createStackNavigator } from '@react-navigation/stack';
import { Calls } from '../../screens';
import { CallStackParamList } from './types';

const Stack = createStackNavigator<CallStackParamList>();

const CallsStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Calls" component={Calls} />
    </Stack.Navigator>
  );
};

export default CallsStackScreen;
