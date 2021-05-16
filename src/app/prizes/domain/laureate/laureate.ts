import { BaseLaureate } from './base_laureate';
import { LaureateDTO } from './laureate.dto';

export class Laureate extends BaseLaureate {
  constructor(
    public id: string,
    public firstName: string,
    public surName: string | undefined,
    public share?: string,
    public born?: string,
    public died?: string,
    public bornCountry?: string,
    public bornCountryCode?: string,
    public bornCity?: string,
    public gender?: string,
  ) {
    super(id, firstName, surName);
  }

  public static create(dto: LaureateDTO) {
    return new Laureate(
      dto.id,
      dto.firstname,
      this.handleBrokenCharacters(dto.surname),
      dto.share,
      dto.born,
      dto.died,
      dto.bornCountry,
      dto.bornCountryCode,
      dto.bornCity,
      dto.gender,
    );
  }
}
