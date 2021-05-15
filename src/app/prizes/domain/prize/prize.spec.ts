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
