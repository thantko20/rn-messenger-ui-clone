import { atom } from 'jotai';
import { generateRandomWords } from '../utils';
import { User } from '../types/users.types';

export const usersAtom = atom([
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
]);

export const userAtom = atom({
  id: 99,
  name: 'John Doe',
  avatar: require('../../assets/avatar.jpg'),
  isOnline: true,
});

export const conversationsAtom = atom((get) => {
  const users = get(usersAtom);
  return users.map((u) => ({ id: u.id, user: u }));
});

export const messagesAtom = atom((get) => {
  const users = get(usersAtom);
  const me = get(userAtom);

  return Array.from(Array(50)).map((_, idx) => {
    const randomUser = users[Math.floor(Math.random() * users.length)];
    return {
      id: idx + 1,
      text: generateRandomWords(),
      sentBy: Math.random() > 0.5 ? randomUser : me,
      conversationId: randomUser.id,
    };
  });
});
