import { BaseLaureateDTO } from './base_laureate.dto';

export type LaureateDTO = BaseLaureateDTO & {
  share?: string;
  born?: string,
  died?: string,
  bornCountry?: string,
  bornCountryCode?: string,
  bornCity?: string,
  gender?: string,
};
