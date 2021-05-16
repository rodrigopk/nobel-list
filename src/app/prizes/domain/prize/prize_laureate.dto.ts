import { BaseLaureateDTO } from '../laureate/base_laureate.dto';

export type PrizeLaureateDTO = BaseLaureateDTO & {
  motivation: string;
  share?: string;
};
