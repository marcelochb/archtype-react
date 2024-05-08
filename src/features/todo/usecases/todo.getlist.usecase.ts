import { inject, injectable } from "inversify";
import 'reflect-metadata';
import { ITodoGetListUsecase } from "./todo.usecases.interfaces";
import { TodoDto } from "../dtos/todo.dto";
import { todoListMock } from "../mocks";
import { InjectConstant, type IApiClient } from "../../../core";
// interface IApiClient {
//     get({url, mockResponse}:IGetProps): Promise<any>;
//     post({url,body, mockResponse}:IPostProps): Promise<void>;
// }

@injectable()
class TodoGetListUsecase implements ITodoGetListUsecase {
    public constructor(
        @inject(InjectConstant.IApiClient) 
        private apiClient: IApiClient
    ) {
    }
    async exec(): Promise<TodoDto[]> {
        const response = await this.apiClient.get({url: '/todos', mockResponse: todoListMock});
        return TodoDto.fromJsonList(response.data);
    }
}

export { TodoGetListUsecase };