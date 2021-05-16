import { LaureateDTO } from './laureate.dto';

export const laureateFixture: LaureateDTO = {
  id: '949',
  firstname: 'Richard H.',
  surname: 'Thaler',
  born: '1945-09-12',
  died: '0000-00-00',
  bornCountry: 'USA',
  bornCountryCode: 'US',
  bornCity: 'East Orange, NJ',
  gender: 'male',
  prizes: [
    {
      year: '2017',
      category: 'economics',
      share: '3',
      motivation: '"for his contributions to behavioural economics"',
      affiliations: [
        {
          name: 'University of Chicago',
          city: 'Chicago, IL',
          country: 'USA',
        },
      ],
    },
  ],
};
