import { prizeFixture } from './prize.fixture';
import { Prize } from './prize';

describe('create', () => {
  const dto = prizeFixture;

  it('returns a new instance', () => {
    expect(Prize.create(dto)).toEqual(
      expect.objectContaining({
        year: dto.year,
        category: dto.category,
        laureates: [
          expect.objectContaining({
            id: dto.laureates[0].id,
            firstName: dto.laureates[0].firstname,
            surName: dto.laureates[0].surname,
            motivation: dto.laureates[0].motivation,
            share: dto.laureates[0].share,
          }),
        ],
      }),
    );
  });
});

describe('capitalizedCategory', () => {
  it('returns the capitalized category for a prize instance', () => {
    const prize = Prize.create({ ...prizeFixture, category: 'chemistry' });

    expect(prize.capitalizedCategory()).toEqual('Chemistry');
  });

  describe('given category is not defined', () => {
    it('returns an empty string', () => {
      const prize = Prize.create({ ...prizeFixture, category: undefined } as any);

      expect(prize.capitalizedCategory()).toEqual('');
    });
  });
});
