import { LaureateDTO } from './laureate.dto';

export class Laureate {
  constructor(
    public id: string,
    public firstName: string,
    public surName: string | undefined,
    public motivation: string,
    public share: string,
  ) {}

  public static create(dto: LaureateDTO) {
    return new Laureate(
      dto.id,
      (dto.firstname),
      this.handleBrokenCharacters(dto.surname),
      dto.motivation,
      dto.share,
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
