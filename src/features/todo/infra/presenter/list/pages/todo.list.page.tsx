import React from "react";
import { useTodoListController } from "../controller/todo.list.controller";

export const TodoListPage: React.FC = () => {
    const {data, loading, error} = useTodoListController();
    if (loading) return <p>Loading...</p>;
    return (
        <div>
            {error && <p>Tivemos um problema...</p>}
            {data && data.map(todo => (
                <div key={todo.id}>
                    <h3>{todo.title}</h3>
                    <p>{todo.description}</p>
                </div>
            ))}
        </div>
    );
}
 