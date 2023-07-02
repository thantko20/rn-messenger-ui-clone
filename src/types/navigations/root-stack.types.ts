import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootBottomTabParamList } from './bottom-tabs.types';
import { User } from '../users.types';

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootBottomTabParamList>;
  Conversation: {
    user: User;
    id: number;
  };
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;
