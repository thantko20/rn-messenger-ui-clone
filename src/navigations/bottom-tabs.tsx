import { useTheme } from '@shopify/restyle';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { useTheme as usePaperTheme } from 'react-native-paper';

import { Theme } from '../theme';
import {
  CallsStackScreen,
  ChatsStackScreen,
  PeopleStackScreen,
} from './stacks';

const Tab = createMaterialBottomTabNavigator();

const BottomTabs = () => {
  const theme = useTheme<Theme>();
  const { colors } = theme;

  const paperTheme = usePaperTheme();

  paperTheme.colors.secondaryContainer = 'transparent';

  return (
    <Tab.Navigator initialRouteName="Chats" activeColor={colors.blue}>
      <Tab.Screen
        name="Chats Tab"
        component={ChatsStackScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="ios-chatbubbles" color={color} size={28} />
          ),
          tabBarLabel: 'Chats',
        }}
      />
      <Tab.Screen
        name="Calls Tab"
        component={CallsStackScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="ios-videocam" color={color} size={28} />
          ),
          tabBarLabel: 'Calls',
        }}
      />
      <Tab.Screen
        name="People Tab"
        component={PeopleStackScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcon name="people" color={color} size={28} />
          ),
          tabBarLabel: 'People',
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
