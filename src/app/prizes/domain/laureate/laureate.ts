import { LaureateDTO } from './laureate.dto';

export class Laureate {
  constructor(
    public id: string,
    public firstName: string,
    public surName: string,
    public motivation: string,
    public share: string,
  ) {}

  public static create(dto: LaureateDTO) {
    return new Laureate(
      dto.id,
      dto.firstname,
      dto.surname,
      dto.motivation,
      dto.share,
    );
  }
}
