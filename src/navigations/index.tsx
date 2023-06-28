import { NavigationContainer } from '@react-navigation/native';
import BottomTabs from './bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Conversation } from '../screens';
import { RootStackParamList } from '../types/navigations';

const Stack = createStackNavigator<RootStackParamList>();

const Navigations = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Root">
        <Stack.Screen
          options={{ headerShown: false }}
          name="Root"
          component={BottomTabs}
        />
        <Stack.Screen name="Conversation" component={Conversation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigations;
