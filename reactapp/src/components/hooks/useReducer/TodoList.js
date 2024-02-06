import { TODO_ACTIONS } from "./Todo";

function TodoList({ todos, dispatch }) {
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