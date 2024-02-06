import { useContext } from "react";
import TodosContext from "../context/TodosContext";

function Header() {
    const { todos } = useContext(TodosContext);
    return <h2>Todo: {todos.length}</h2>
}

export default Header;
