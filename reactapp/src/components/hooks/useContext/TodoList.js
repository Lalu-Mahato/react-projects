import { useContext } from "react";
import { TODO_ACTIONS } from "./Todo";
import TodosContext from "../context/TodosContext";

function TodoList() {
    const { todos, dispatch } = useContext(TodosContext);
    return (
    <>
        {todos.map((todo) => <li key={todo.id}>{todo.name}
                <span>
                    <button onClick={() => dispatch({
                        type: TODO_ACTIONS.DELETE_TASK,
                        payload: todo.id,
                    })}>Delete</button>
                </span>
        </li>)}
    </>
    )
}
export default TodoList;