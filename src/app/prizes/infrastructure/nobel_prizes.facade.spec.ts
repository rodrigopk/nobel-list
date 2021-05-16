import { Laureate, laureateFixture } from '../domain';
import { Prize, prizeFixture } from '../domain/prize';
import { LaureateNotFoundError } from './laureate_not_found.error';
import { NobelPrizesFacade } from './nobel_prizes.facade';

describe('NobelPrizesFacade', () => {
  const mockHttpService = {
    get: jest.fn(),
  };

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
          `https://api.nobelprize.org/v1/prize.json?year=${fromYear}&yearTo=${toYear}`,
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

  describe('getLaureateById', () => {
    const laureateId = laureateFixture.id;
    const apiResponse = {
      status: 200,
      statusText: '',
      headers: {},
      config: {},
      data: {
        laureates: [laureateFixture],
      },
    };

    const facade = new NobelPrizesFacade(mockHttpService);
    let result: Laureate;

    describe('happy path', () => {
      beforeEach(async () => {
        mockHttpService.get.mockReturnValueOnce(Promise.resolve(apiResponse));

        result = await facade.getLaureateById({ id: laureateId });
      });

      it('makes an http request to list prizes', () => {
        expect(mockHttpService.get).toHaveBeenCalledWith(
          `https://api.nobelprize.org/v1/laureate.json?id=${laureateId}`,
        );
      });

      it('returns the retrieved prizes as domain objects', () => {
        expect(result).toEqual(Laureate.create(laureateFixture));
      });
    });

    describe('given the laureate for the given id is not found', () => {
      it('rejects the promise', () => {
        mockHttpService.get.mockReturnValueOnce(Promise.resolve({
          ...apiResponse,
          data: { laureates: [] },
        }));

        return expect(
          facade.getLaureateById({ id: laureateId }),
        ).rejects.toBeInstanceOf(LaureateNotFoundError);
      });
    });

    describe('given there was an error while fetching the prizes', () => {
      it('rejects the promise', () => {
        const error = new Error('Connection error');

        mockHttpService.get.mockReturnValueOnce(Promise.reject(error));

        return expect(facade.getLaureateById({ id: laureateId })).rejects.toEqual(error);
      });
    });
  });
});
