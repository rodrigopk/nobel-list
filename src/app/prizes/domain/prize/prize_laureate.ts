import { BaseLaureate } from '../laureate/base_laureate';
import { PrizeLaureateDTO } from './prize_laureate.dto';

export class PrizeLaureate extends BaseLaureate {
  constructor(
    public id: string,
    public firstName: string,
    public surName: string | undefined,
    public motivation: string,
    public share?: string,
  ) {
    super(id, firstName, surName);
  }

  public static create(dto: PrizeLaureateDTO) {
    return new PrizeLaureate(
      dto.id,
      dto.firstname,
      this.handleBrokenCharacters(dto.surname),
      dto.motivation,
      dto.share,
    );
  }
}
