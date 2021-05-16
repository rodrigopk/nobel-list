import { PrizeDTO } from './prize.dto';
import { PrizeLaureate } from './prize_laureate';

export class Prize {
  constructor(
    public year: string,
    public category: string,
    public laureates: PrizeLaureate[],
  ) {}

  public static create(dto: PrizeDTO) {
    return new Prize(
      dto.year,
      dto.category,
      dto.laureates.map((laureate) => PrizeLaureate.create(laureate)),
    );
  }

  public capitalizedCategory() {
    if (!this.category) return '';

    return this.category.charAt(0).toUpperCase() + this.category.slice(1);
  }
}
