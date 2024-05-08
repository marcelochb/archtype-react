import 'reflect-metadata';
import { Container } from "inversify";
import {todoListMock} from '../../../../src/features/todo/mocks'
import { TodoGetListUsecase } from '../../../../src/features/todo/usecases/todo.getlist.usecase';
import { ITodoGetListUsecase } from '../../../../src/features/todo/usecases/todo.usecases.interfaces';
import { InjectConstant } from '../../../../src/core';

describe('TodoGetListUseCase', () => {
    it('When the request is successful, then it should return a list of todos', async () => {
        // Arrange
        class ApiMockClient {
            get = jest.fn().mockImplementation(async() => {
              return Promise.resolve({data: todoListMock});
            });
          };
        const mockBind = new Container();
        mockBind.bind(InjectConstant.IApiClient).toConstantValue(new ApiMockClient());
        mockBind.bind(InjectConstant.ITodoGetListUsecase).to(TodoGetListUsecase);
        const usecase = mockBind.get<ITodoGetListUsecase>(InjectConstant.ITodoGetListUsecase);
        // Act
        const result = await usecase.exec();
        // Assert
        expect(result).toEqual(todoListMock);
    })
});