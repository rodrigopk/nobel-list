import { BasePrize } from './base_prize';
import { PrizeLaureateDTO } from './prize_laureate.dto';

export type PrizeDTO = BasePrize & {
  laureates: PrizeLaureateDTO[];
};
