import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { IApiService } from 'src/domain/interfaces/api.interface';

@Injectable()
export class ApiConfigService implements IApiService {
  constructor(private readonly httpService: HttpService) {}

  public async getValue<T>(url: string): Promise<AxiosResponse<T>> {
    const response = await this.httpService.axiosRef.get(url);

    // @ts-ignore
    return response;
  }
}
