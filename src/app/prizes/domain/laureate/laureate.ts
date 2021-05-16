import { LaureateDTO } from './laureate.dto';

export class Laureate {
  constructor(
    public id: string,
    public firstName: string,
    public surName: string | undefined,
    public motivation: string,
    public share?: string,
    public born?: string,
    public died?: string,
    public bornCountry?: string,
    public bornCountryCode?: string,
    public bornCity?: string,
    public gender?: string,
  ) {}

  public static create(dto: LaureateDTO) {
    return new Laureate(
      dto.id,
      dto.firstname,
      this.handleBrokenCharacters(dto.surname),
      dto.motivation,
      dto.share,
      dto.born,
      dto.died,
      dto.bornCountry,
      dto.bornCountryCode,
      dto.bornCity,
      dto.gender,
    );
  }

  private static handleBrokenCharacters(name?: string) {
    return name?.replace(/&#332;/i, 'Ō');
  }

  public fullName() {
    if (!this.surName) return this.firstName;

    return `${this.firstName} ${this.surName}`;
  }
}
