import { BaseLaureate } from './base_laureate';
import { LaureateDTO } from './laureate.dto';
import { LaureatePrize } from './laureate_prize';

export class Laureate extends BaseLaureate {
  constructor(
    public id: string,
    public firstName: string | undefined,
    public surName: string | undefined,
    public born: string | undefined,
    public died: string | undefined,
    public bornCountry: string | undefined,
    public bornCountryCode: string | undefined,
    public bornCity: string | undefined,
    public gender: string,
    public prizes: LaureatePrize[],
  ) {
    super(id, firstName, surName);
  }

  public static create(dto: LaureateDTO) {
    return new Laureate(
      dto.id,
      dto.firstname,
      this.handleBrokenCharacters(dto.surname),
      dto.born && this.formatDateString(dto.born),
      dto.died && this.formatDateString(dto.died),
      dto.bornCountry,
      dto.bornCountryCode,
      dto.bornCity,
      dto.gender,
      dto.prizes.map((prize) => LaureatePrize.create(prize)),
    );
  }

  private static formatDateString(dateString: string) {
    const date = new Date(dateString);
    if (Number.isNaN(date.valueOf())) return undefined;

    return new Date(`${dateString} 10:00:00`).toLocaleString(
      'default', { month: 'short', day: 'numeric', year: 'numeric' },
    );
  }

  public birthPlace() {
    return `${this.bornCity}, ${this.bornCountry}`;
  }

  public initials() {
    if (!this.firstName) return '';
    if (!this.surName) return this.firstName[0];

    return `${this.firstName[0]}${this.surName[0]}`;
  }
}
