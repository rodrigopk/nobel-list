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
        motivation: dto.motivation,
        share: dto.share,
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
        motivation: dto.motivation,
        share: dto.share,
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
