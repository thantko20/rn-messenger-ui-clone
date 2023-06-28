import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { RootStackParamList, RootStackScreenProps } from './root-stack.types';
import { CompositeScreenProps } from '@react-navigation/native';

export type RootBottomTabParamList = {
  Chats: undefined;
  Calls: undefined;
  People: undefined;
};

export type RootBottomTabScreenProps<T extends keyof RootBottomTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootBottomTabParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;
