import { useQuery } from '../../../libs/query';

import { NobelPrizesFacade } from '../infrastructure';

export const useFetchLaureate = (facade = new NobelPrizesFacade()) => {
  const getLaureate = (id: string) => useQuery(
    `laureates/${id}`,
    () => facade.getLaureateById({ id }),
  );

  return { getLaureateById: getLaureate };
};
