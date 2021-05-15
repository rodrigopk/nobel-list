import { Prize, prizeFixture } from '../domain/prize';
import { NobelPrizesFacade } from './nobel_prizes.facade';

describe('NobelPrizesFacade', () => {
  it('is defined', () => {
    expect(NobelPrizesFacade).toBeDefined();
  });

  describe('listPrizes', () => {
    const apiResponse = {
      status: 200,
      statusText: '',
      headers: {},
      config: {},
      data: {
        prizes: [prizeFixture],
      },
    };
    const mockHttpService = {
      get: jest.fn(),
    };

    const facade = new NobelPrizesFacade(mockHttpService);
    const fromYear = '2015';
    const toYear = '2017';
    let result: Prize[];

    describe('happy path', () => {
      beforeEach(async () => {
        mockHttpService.get.mockReturnValueOnce(Promise.resolve(apiResponse));

        result = await facade.listPrizes({ fromYear, toYear });
      });

      it('makes an http request to list prizes', () => {
        expect(mockHttpService.get).toHaveBeenCalledWith(
          `http://api.nobelprize.org/v1/prize.json?year=${fromYear}&yearTo=${toYear}`,
        );
      });

      it('returns the retrieved prizes as domain objects', () => {
        expect(result[0]).toBeInstanceOf(Prize);
      });
    });

    describe('given there was an error while fetching the prizes', () => {
      it('rejects the promise', () => {
        const error = new Error('Connection error');

        mockHttpService.get.mockReturnValueOnce(Promise.reject(error));

        expect(facade.listPrizes({ fromYear, toYear })).rejects.toEqual(error);
      });
    });
  });
});
