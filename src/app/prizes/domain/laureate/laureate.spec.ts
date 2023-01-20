import { Laureate } from './laureate';
import { laureateFixture } from './laureate.fixture';

describe('create', () => {
  it('returns a new instance', () => {
    const dto = laureateFixture;

    expect(Laureate.create(dto)).toEqual(
      expect.objectContaining({
        id: dto.id,
        firstName: dto.firstname,
        surName: dto.surname,
        born: 'Sep. 12, 1945',
        died: undefined,
        bornCountry: dto.bornCountry,
        bornCountryCode: dto.bornCountryCode,
        bornCity: dto.bornCity,
        gender: dto.gender,
        prizes: [
          {
            year: '2017',
            category: 'economics',
            share: '1/3',
            motivation: '"for his contributions to behavioural economics"',
          },
        ],
      }),
    );
  });

  it('handles dead laureates', () => {
    const dto = { ...laureateFixture, died: '2021-05-16' };

    expect(Laureate.create(dto)).toEqual(
      expect.objectContaining({
        id: dto.id,
        firstName: dto.firstname,
        surName: dto.surname,
        born: 'Sep. 12, 1945',
        died: 'May 16, 2021',
        bornCountry: dto.bornCountry,
        bornCountryCode: dto.bornCountryCode,
        bornCity: dto.bornCity,
        gender: dto.gender,
      }),
    );
  });

  it('handles organizational laureates', () => {
    const dto = {
      ...laureateFixture,
      born: undefined,
      bornCountry: undefined,
      bornCountryCode: undefined,
      bornCity: undefined,
    };

    expect(Laureate.create(dto)).toEqual(
      expect.objectContaining({
        id: dto.id,
        firstName: dto.firstname,
        surName: dto.surname,
        born: undefined,
        died: undefined,
        bornCountry: undefined,
        bornCountryCode: undefined,
        bornCity: undefined,
        gender: dto.gender,
      }),
    );
  });

  it('handles issue with broken Ō character', () => {
    const dto = {
      ...laureateFixture,
      firstname: 'Satoshi',
      surname: '&#332;mura',
    };

    expect(Laureate.create(dto)).toEqual(
      expect.objectContaining({
        id: dto.id,
        firstName: dto.firstname,
        surName: 'Ōmura',
      }),
    );
  });

  it('handles issue with invalid dates', () => {
    const dto = {
      ...laureateFixture,
      born: '2015-00-00',
      died: '2015-00-00',
    };

    expect(Laureate.create(dto)).toEqual(
      expect.objectContaining({
        id: dto.id,
        born: undefined,
        died: undefined,
      }),
    );
  });
});

describe('fullName', () => {
  it('returns the full name of a laureate', () => {
    const laureate = Laureate.create(laureateFixture);

    expect(laureate.fullName()).toEqual(
      `${laureate.firstName} ${laureate.surName}`,
    );
  });

  describe('given there is no surname', () => {
    it('returns only the first name', () => {
      const laureate = Laureate.create({
        ...laureateFixture, surname: undefined,
      });

      expect(laureate.fullName()).toEqual(
        `${laureate.firstName}`,
      );
    });
  });
});

describe('birthPlace', () => {
  it('returns the birth place of a laureate', () => {
    const laureate = Laureate.create(laureateFixture);

    expect(laureate.birthPlace()).toEqual(
      `${laureate.bornCity}, ${laureate.bornCountry}`,
    );
  });
});

describe('initials', () => {
  it('returns the initials of a laureate', () => {
    const laureate = Laureate.create(laureateFixture);

    expect(laureate.initials()).toEqual(
      `${laureate.firstName[0]}${laureate.surName && laureate.surName[0]}`,
    );
  });

  describe('given there is no surname', () => {
    it('returns only the first name initial', () => {
      const laureate = Laureate.create({
        ...laureateFixture, surname: undefined,
      });

      expect(laureate.initials()).toEqual(
        `${laureate.firstName[0]}`,
      );
    });
  });
});
