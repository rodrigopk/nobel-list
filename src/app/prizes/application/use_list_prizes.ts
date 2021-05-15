import { useQuery } from '../../../libs/query';

import { NobelPrizesFacade } from '../infrastructure';

export const useListPrizes = (facade = new NobelPrizesFacade()) => {
  const fromYear = '2015';
  const toYear = '2017';

  return useQuery('prizes', () => facade.listPrizes({ fromYear, toYear }));
};
