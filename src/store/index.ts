import { atom } from 'jotai';
import { generateRandomWords } from '../utils';
import { User } from '../types/users.types';
import { Conversation } from '../types/conversation.types';

const users: User[] = [
  {
    id: 1,
    name: 'Martin',
    avatar: require('../../assets/profile_pics/1.jpg'),
    isOnline: true,
  },
  {
    id: 2,
    name: 'Stacy',
    avatar: require('../../assets/profile_pics/2.jpg'),
    isOnline: true,
  },
];

const conversations: Conversation[] = users.map((u) => ({ id: u.id, user: u }));

const me = {
  id: 99,
  name: 'John Doe',
  avatar: require('../../assets/avatar.jpg'),
  isOnline: true,
};

export const usersAtom = atom(users);

export const userAtom = atom(me);

export const conversationsAtom = atom(conversations);

export const messagesAtom = atom(
  Array.from(Array(50)).map((_, idx) => {
    const randomUser = users[Math.floor(Math.random() * users.length)];
    return {
      id: idx + 1,
      text: generateRandomWords(),
      sentBy: Math.random() > 0.5 ? randomUser : me,
      conversationId: randomUser.id,
    };
  }),
);
