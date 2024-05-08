
/* istanbul ignore file */
import axios, { AxiosInstance } from 'axios';
import * as apiInterface from '../../interfaces/api.interface';
import { inject, injectable } from 'inversify';

@injectable()
export class AxiosApiClient implements apiInterface.IApiClient {
  api: AxiosInstance;
    private _isMockResponse;
  constructor({
   baseUrl,
  isMockResponse
  }:apiInterface.IApiClientProps) {
    this.api = axios.create({
      baseURL: baseUrl,
    });
    this._isMockResponse = isMockResponse;
  }
  async post({url,body,mockResponse}:apiInterface.IPostProps): Promise<void> {
    try {
      if(this._isMockResponse) return mockResponse;
      await this.api.post(url,body);
    } catch (error) {
      throw error
    }
  }

  async get({url,mockResponse}:apiInterface.IGetProps): Promise<any> {
    try {
        if(this._isMockResponse) return {data: mockResponse};
        var response = await this.api.get(url);
        return response.data;
    } catch (error) {
    throw error
    }
  }

}
