import { TodoDto } from "../dtos/todo.dto";

export interface ITodoCreateUsecase {
    exec(todo: TodoDto): Promise<void>;
}

export interface ITodoGetByIdUsecase {
    exec(id: number): Promise<TodoDto>;
}

export interface ITodoGetListUsecase {
    exec(): Promise<TodoDto[]>;
}