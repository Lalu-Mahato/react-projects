import { useState } from "react";

function UserList() {
  const userList = [
    { id: 1, name: "dayal" },
    { id: 2, name: "arya" },
  ];
  const [users, setUsers] = useState(userList);
  const [name, setName] = useState("");

  const handleClick = () => {
    const user = {
      id: Math.round(Math.random() * 10),
      name: name,
    };
    setUsers((prevVale) => [...prevVale, user]);
  };
  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <h2>useState hook with array type </h2>
      <label>Name:</label>
      <input type="text" name="name" value={name} onChange={handleChange} />

      <br />
      <button onClick={handleClick}> Add User</button>
      <br />
      <br />
      <label>Users: {JSON.stringify(users)}</label>
    </>
  );
}

export default UserList;
