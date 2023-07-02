import { atom } from 'jotai';
import { generateRandomWords } from '../utils';

export const usersAtom = atom([
  {
    id: 1,
    name: 'Martin',
    avatar: require('../../assets/profile_pics/martin.jpg'),
    isOnline: true,
  },
  {
    id: 2,
    name: 'Stacy',
    avatar: require('../../assets/profile_pics/stacy.jpg'),
    isOnline: true,
  },
]);

export const conversationsAtom = atom((get) => {
  const users = get(usersAtom);
  return users.map((u) => ({ id: u.id, user: u }));
});

export const messagesAtom = atom((get) => {
  const users = get(usersAtom);

  return Array.from(Array(50)).map((_, idx) => {
    const randomUser = users[Math.floor(Math.random() * users.length)];
    return {
      id: idx + 1,
      text: generateRandomWords(),
      sentBy: randomUser,
      conversationId: randomUser.id,
    };
  });
});
