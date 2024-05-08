/* istanbul ignore file */
import { injectable } from 'inversify';
import { IApiClient, IGetProps, IPostProps } from '../../interfaces';

@injectable()
export class FetchApiClient implements IApiClient {
  baseUrl: string;

  constructor() {
    this.baseUrl = 'http://localhost:3000'
  }
  async post({url,body,mockResponse}:IPostProps): Promise<void> {
    try {
      await fetch(this.baseUrl+url,{
        method: 'POST', 
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      })
    } catch (error) {
      throw error
    }
  }

  async get({url,mockResponse}:IGetProps): Promise<any> {
    try {
      var response = await fetch(this.baseUrl+url);
      return await response.json();
    } catch (error) {
      throw error
    }
  }

}