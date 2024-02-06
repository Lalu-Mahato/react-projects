import { useContext } from "react";
import Detail from "./Details";
import UserContext from "../context/UserContext";

function Users() {
    const { userName } = useContext(UserContext);
    
    return (
        <>
            <h2>Users: { userName }</h2>
            <Detail />
        </>
    );
}

export default Users;
