import { HttpService, IHttpService } from '../../../libs/http';
import {
  Laureate, LaureateDTO, Prize, PrizeDTO,
} from '../domain';
import { LaureateNotFoundError } from './laureate_not_found.error';

export class NobelPrizesFacade {
  private baseApiUrl = 'https://api.nobelprize.org/v1';

  constructor(private readonly httpService: IHttpService = new HttpService()) {}

  public async listPrizes({
    fromYear,
    toYear,
  }: {
    fromYear: string;
    toYear: string;
  }): Promise<Prize[]> {
    const result = await this.httpService.get<{ prizes: PrizeDTO[] }>(
      `${this.baseApiUrl}/prize.json?year=${fromYear}&yearTo=${toYear}`,
    );

    return result.data.prizes.map((dto) => Prize.create(dto));
  }

  public async getLaureateById({ id }: { id: string }): Promise<Laureate> {
    const result = await this.httpService.get<{ laureates: LaureateDTO[] }>(
      `${this.baseApiUrl}/laureate.json?id=${id}`,
    );

    if (!result.data.laureates[0]) {
      throw new LaureateNotFoundError(id);
    }

    return Laureate.create(result.data.laureates[0]);
  }
}
