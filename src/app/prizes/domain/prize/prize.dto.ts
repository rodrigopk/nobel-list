import { PrizeLaureateDTO } from './prize_laureate.dto';

export type PrizeDTO = {
  year: string;
  category: string;
  laureates: PrizeLaureateDTO[];
};
