import { NavigationContainer } from '@react-navigation/native';
import BottomTabs from './bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Box, Text } from '../atoms';

const Stack = createStackNavigator();

const Navigations = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Root"
          component={BottomTabs}
        />
        <Stack.Screen
          name="ChatDetail"
          component={() => (
            <Box>
              <Text>Chat Detail</Text>
            </Box>
          )}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigations;
