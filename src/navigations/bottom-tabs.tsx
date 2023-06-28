import { useTheme } from '@shopify/restyle';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

import { Theme } from '../theme';
import { Chats, Calls, People } from '../screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootBottomTabsParamList } from './types';

const Tab = createBottomTabNavigator<RootBottomTabsParamList>();

const BottomTabs = () => {
  const theme = useTheme<Theme>();
  const { colors } = theme;

  return (
    <Tab.Navigator
      initialRouteName="Chats"
      screenOptions={{
        tabBarActiveTintColor: colors.blue,
        tabBarStyle: {
          backgroundColor: colors.white,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: -1,
          },
          shadowOpacity: 0.18,
          shadowRadius: 1,
          elevation: 1,
        },
      }}
      sceneContainerStyle={{
        backgroundColor: colors.white,
      }}
    >
      <Tab.Screen
        name="Chats"
        component={Chats}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-chatbubbles" color={color} size={28} />
          ),
          tabBarLabel: 'Chats',
        }}
      />
      <Tab.Screen
        name="Calls"
        component={Calls}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-videocam" color={color} size={28} />
          ),
          tabBarLabel: 'Calls',
        }}
      />
      <Tab.Screen
        name="People"
        component={People}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="people" color={color} size={28} />
          ),
          tabBarLabel: 'People',
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
