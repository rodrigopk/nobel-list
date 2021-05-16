import { HttpService, IHttpService } from '../../../libs/http';
import { Prize, PrizeDTO } from '../domain';

export class NobelPrizesFacade {
  constructor(private readonly httpService: IHttpService = new HttpService()) {}

  public async listPrizes({
    fromYear,
    toYear,
  }: {
    fromYear: string;
    toYear: string;
  }): Promise<Prize[]> {
    const result = await this.httpService.get<{ prizes: PrizeDTO[] }>(
      `https://api.nobelprize.org/v1/prize.json?year=${fromYear}&yearTo=${toYear}`,
    );

    return result.data.prizes.map((dto) => Prize.create(dto));
  }
}
