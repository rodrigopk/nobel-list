import { BasePrize } from '../prize/base_prize';
import { LaureatePrizeDTO } from './laureate.dto';

export class LaureatePrize extends BasePrize {
  constructor(
    public year: string,
    public category: string,
    public share: string,
    public motivation: string,
  ) {
    super(year, category);
  }

  public static create(dto: LaureatePrizeDTO) {
    return new LaureatePrize(
      dto.year,
      dto.category,
      this.formatShare(dto.share),
      dto.motivation,
    );
  }

  private static formatShare(share: string) {
    if (share === '1') return share;

    return `1/${share}`;
  }
}
