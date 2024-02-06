import { useMemo, useState } from "react";
import User from "./User";

function Users() {
    const usersList = [
        { id: 1, name: "John Doe" },
        { id: 2, name: "Peter Parker" },
        { id: 3, name: "John Connor" },
        { id: 4, name: "Iron Man" },
        { id: 5, name: "Captain America" },
    ];
    const [users, setUsers] = useState(usersList);
    const [counter, setCounter] = useState(0);

    const diplayList = useMemo(() => users.map((user) => {
        console.log("calling user")
        return <User key={user.id} data={user} />
    }), [users])

    const setName = (value) => {
        setUsers([
            ...users,
            {
                id: users.length + 1,
                name: value,
            }
        ]);
    }

    return (
        <>
            <h1>useMemo hook in React hook</h1>
            <h3>Counter: {counter}</h3>
            <button onClick={() => setCounter(value => value + 1)}>+</button>
            Add Name: <input type="text" onBlur={(e) => setName(e.target.value)} />
            {diplayList}
            
        </>
    );
}

export default Users;
