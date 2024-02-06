import { useState } from "react";

function UserForm() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser((prevVal) => ({
      ...prevVal,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <>
      <p>{JSON.stringify(user)}</p>
      <form>
        <label>Username: </label>
        <input type="text" name="username" onChange={handleChange} />
        <br />
        <label>Password:</label>
        <input type="password" name="password" onChange={handleChange} />
      </form>
    </>
  );
}

export default UserForm;
