import { createStackNavigator } from '@react-navigation/stack';
import { People } from '../../screens';
import { PeopleStackParamList } from './types';

const Stack = createStackNavigator<PeopleStackParamList>();

const PeopleStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="People" component={People} />
    </Stack.Navigator>
  );
};

export default PeopleStackScreen;
