import { AxiosResponse } from 'axios';

export interface IApiService {
  getValue<T>(url: string): Promise<AxiosResponse<T>>;
}
