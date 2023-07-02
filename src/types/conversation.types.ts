import { User } from './users.types';

export type Conversation = {
  id: number;
  user: User;
};

export type Message = {
  id: number;
  text: string;
  sentBy: User;
  conversationId: number;
};
