import { LaureateDTO } from '../laureate';

export type PrizeDTO = {
  year: string;
  category: string;
  laureates: LaureateDTO[];
};
