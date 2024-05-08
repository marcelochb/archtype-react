import { inject, injectable } from "inversify";
import { ITodoCreateUsecase } from "./todo.usecases.interfaces";
import { TodoDto } from "../dtos/todo.dto";
import { InjectConstant, type IApiClient } from "../../../core";

@injectable()
export class TodoCreateUsecase implements ITodoCreateUsecase {
    constructor(
        @inject(InjectConstant.IApiClient)
        private apiClient: IApiClient
    ) {}

    async exec(todo: TodoDto): Promise<void> {
        await this.apiClient.post({body: todo, url: '/todos', mockResponse: true});
    }
}