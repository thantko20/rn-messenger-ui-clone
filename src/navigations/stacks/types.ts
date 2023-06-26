import { StackScreenProps } from '@react-navigation/stack';

export type CallStackParamList = {
  Calls: undefined;
  Haha: undefined;
};

export type CallStackScreenProps<T extends keyof CallStackParamList> =
  StackScreenProps<CallStackParamList, T>;

export type ChatStackParamList = {
  Chats: undefined;
};

export type ChatStackScreenProps<T extends keyof ChatStackParamList> =
  StackScreenProps<ChatStackParamList, T>;

export type PeopleStackParamList = {
  People: undefined;
};

export type PeopleStackScreenProps<T extends keyof PeopleStackParamList> =
  StackScreenProps<PeopleStackParamList, T>;
