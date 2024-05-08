
export interface IPropsDefault {
    url: string;
    mockResponse: any;
}
export interface IGetProps extends IPropsDefault { }
export interface IPostProps extends IPropsDefault {
    body: any;
}

export interface IApiClientProps {
    baseUrl: string;
    isMockResponse: boolean;
}

export interface IApiClient {
    get({url, mockResponse}:IGetProps): Promise<any>;
    post({url,body, mockResponse}:IPostProps): Promise<void>;
}

