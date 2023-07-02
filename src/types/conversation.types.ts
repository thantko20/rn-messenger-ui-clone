export type Conversation = {
  name: string;
  avatar: string;
  sendByUser: boolean;
  lastMessage: string;
};

export type Message = {
  text: string;
  sentByMe: boolean;
};
