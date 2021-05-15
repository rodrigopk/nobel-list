import { Laureate } from './laureate';
import { laureateFixture } from './laureate.fixture';

describe('create', () => {
  const dto = laureateFixture;

  it('returns a new instance', () => {
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
});
