import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

export type HomeBottomTabsParamList = {
  Chats: undefined;
  Calls: undefined;
  People: undefined;
};

export type HomeBottomTabScreenProps<T extends keyof HomeBottomTabsParamList> =
  BottomTabScreenProps<HomeBottomTabsParamList, T>;
