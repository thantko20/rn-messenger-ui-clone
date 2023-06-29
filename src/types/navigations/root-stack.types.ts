import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootBottomTabParamList } from './bottom-tabs.types';

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootBottomTabParamList>;
  Conversation: {
    username: string;
    avatar: string;
  };
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;
