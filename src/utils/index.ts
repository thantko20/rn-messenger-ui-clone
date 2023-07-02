import { loremIpsum } from 'lorem-ipsum';

const generateRandomWords = () =>
  loremIpsum({
    count: 1,
    units: 'sentences',
    sentenceUpperBound: 20,
  });

export { generateRandomWords };
