import { useEffect, useState } from "react";

function Users() {
    const [users, setUsers] = useState([]);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        const url = "https://jsonplaceholder.typicode.com/users";
        fetch(url)
            .then(data => data.json())
            .then(data => setUsers(data))
    }, [refresh]);

    return (
        <div>
            <h1> Users Component</h1>
            <button onClick={() => setRefresh(refresh => !refresh)}>Refresh</button>
            <h3>Users:</h3>
            {users.map((user) => <li key={user.id}>{ user.name }</li>)}
        </div>
    );
}

export default Users;