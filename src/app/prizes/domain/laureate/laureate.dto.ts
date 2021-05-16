import { BasePrizeDTO } from '../prize/base_prize.dto';
import { BaseLaureateDTO } from './base_laureate.dto';

export type LaureatePrizeDTO = BasePrizeDTO & {
    share: string,
    motivation: string,
    affiliations: [
        {
            name: string,
            city: string,
            country: string,
        }
    ]
}

export type LaureateDTO = BaseLaureateDTO & {
  born?: string,
  died: string,
  bornCountry?: string,
  bornCountryCode?: string,
  bornCity?: string,
  gender: string,
  prizes: LaureatePrizeDTO[],
};
