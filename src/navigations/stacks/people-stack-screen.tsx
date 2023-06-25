import { createStackNavigator } from '@react-navigation/stack';
import { People } from '../../screens';

const Stack = createStackNavigator();

const PeopleStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="People" component={People} />
    </Stack.Navigator>
  );
};

export default PeopleStackScreen;
