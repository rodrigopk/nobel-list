import { BasePrize } from './base_prize';
import { PrizeDTO } from './prize.dto';
import { PrizeLaureate } from './prize_laureate';

export class Prize extends BasePrize {
  constructor(
    public year: string,
    public category: string,
    public laureates: PrizeLaureate[],
  ) {
    super(year, category);
  }

  public static create(dto: PrizeDTO) {
    return new Prize(
      dto.year,
      dto.category,
      dto.laureates.map((laureate) => PrizeLaureate.create(laureate)),
    );
  }
}
