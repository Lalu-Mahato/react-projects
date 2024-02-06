import { useReducer } from "react";
import TodoList from "./TodoList";

const initialStatus = [];
export const TODO_ACTIONS = {
    ADD_TASK: "add_task",
    DELETE_TASK: "delete_task",
    RESET_TODOS: "reset_todos",
}
function reducer(state, action) {
    switch (action.type) {
        case TODO_ACTIONS.ADD_TASK:
            return [
            ...state,
                {
                    id: state.length + 1,
                    name: action.payload,
                }
            ];
        case TODO_ACTIONS.DELETE_TASK: return state.filter(todo => todo.id !== action.payload);
        case TODO_ACTIONS.RESET_TODOS: return init(action.payload);
        default: return state;
    }

}

function init(initialStatus) {
    return initialStatus;
}

function Todo() {
    const [todos, dispatch] = useReducer(reducer, initialStatus, init);
    return (
        <div>
            <h1>useReducer hook in React hook</h1>
            <h2>Todo: {todos.length}</h2>
            Add New Task: 
            <input type="text" onBlur={(e) => dispatch({
                type: TODO_ACTIONS.ADD_TASK,
                payload: e.target.value
            })} />
            <button onClick={() => dispatch({
                type: TODO_ACTIONS.RESET_TODOS,
                payload: initialStatus,
            })}>Reset</button>
            <hr />
            <TodoList todos={todos} dispatch={dispatch} />
        </div>
    );
}
export default Todo;
