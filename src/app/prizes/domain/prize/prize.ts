import { Laureate } from '../laureate';
import { PrizeDTO } from './prize.dto';

export class Prize {
  constructor(
    public year: string,
    public category: string,
    public laureates: Laureate[],
  ) {}

  public static create(dto: PrizeDTO) {
    return new Prize(
      dto.year,
      dto.category,
      dto.laureates.map((laureate) => Laureate.create(laureate)),
    );
  }

  public capitalizedCategory() {
    if (!this.category) return '';

    return this.category.charAt(0).toUpperCase() + this.category.slice(1);
  }
}
