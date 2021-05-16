import { PrizeLaureateDTO } from './prize_laureate.dto';

export const prizeLaureateFixture: PrizeLaureateDTO = {
  id: '949',
  firstname: 'Richard H.',
  surname: 'Thaler',
  motivation: '"for his contributions to behavioural economics"',
  share: '1',
};

export const prizeFixture = {
  year: '2017',
  category: 'economics',
  laureates: [prizeLaureateFixture],
};
