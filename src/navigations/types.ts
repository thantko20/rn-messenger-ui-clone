import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

export type HomeBottomTabsParamList = {
  ChatsTab: undefined;
  CallsTab: undefined;
  PeopleTab: undefined;
};

export type HomeBottomTabScreenProps<T extends keyof HomeBottomTabsParamList> =
  BottomTabScreenProps<HomeBottomTabsParamList, T>;
