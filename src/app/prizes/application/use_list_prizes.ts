import { useQuery } from '../../../libs/query';

import { NobelPrizesFacade } from '../infrastructure';

export const useListPrizes = (facade = new NobelPrizesFacade()) => {
  const lastYear = new Date().getFullYear();
  const toYear = `${lastYear - 1}`;
  const fromYear = `${lastYear - 3}`;

  return useQuery('prizes', () => facade.listPrizes({ fromYear, toYear }));
};
