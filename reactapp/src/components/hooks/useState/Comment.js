import { useState } from "react";

function Comment() {
  const [title, setTitle] = useState("Good Morning");
  return (
    <>
      <h1>Title: {title}</h1>
      <button onClick={() => setTitle("Good Evening")}>Change Title</button>
    </>
  );
}

export default Comment;
