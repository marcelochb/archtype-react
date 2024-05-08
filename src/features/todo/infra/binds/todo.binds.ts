import "reflect-metadata";
import { Container } from "inversify";
import { AxiosApiClient } from "../../../../core/services/api/axios.api.client";
import { ITodoCreateUsecase, ITodoGetListUsecase } from "../../usecases/todo.usecases.interfaces";
import { TodoCreateUsecase } from "../../usecases/todo.create.usecase";
import { TodoGetListUsecase } from "../../usecases/todo.getlist.usecase";
import { IApiClient, InjectConstant } from "../../../../core";


const todoBinds = new Container();
todoBinds.bind<IApiClient>(InjectConstant.IApiClient).toConstantValue(new AxiosApiClient({baseUrl: 'http://localhost:3000', isMockResponse: true}));
todoBinds.bind<ITodoGetListUsecase>(InjectConstant.ITodoGetListUsecase).to(TodoGetListUsecase);
todoBinds.bind<ITodoCreateUsecase>(InjectConstant.ITodoCreateUsecase).to(TodoCreateUsecase);
// todoBinds.bind<IApiClient>(InjectConstant.IApiClient).to(AxiosApiClient);

export { todoBinds };