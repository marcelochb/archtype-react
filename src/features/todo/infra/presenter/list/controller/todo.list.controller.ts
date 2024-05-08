import { useEffect, useState } from "react";
import { IControllerGetData } from "../../../../../../core/interfaces/controller.interface";
import { TodoDto } from "../../../../dtos/todo.dto";
import { ITodoGetListUsecase } from "../../../../usecases/todo.usecases.interfaces";
import { todoBinds } from "../../../binds/todo.binds";
import { InjectConstant } from "../../../../../../core";

export const useTodoListController:IControllerGetData<TodoDto[]> = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [todos, setTodos] = useState<TodoDto[]>([]);
    const useCase = todoBinds.get<ITodoGetListUsecase>(InjectConstant.ITodoGetListUsecase);

    useEffect(
        () => {
          setLoading(true);
          const fetchUser = async () => {
            try {
              const response = await useCase.exec();
              setTodos(response);
              setLoading(false);
            } catch (error) {
              setLoading(false);
              setError(true);
            }
          };
          fetchUser();
        }, [useCase]
      );


      return {loading, error, data:todos}

}