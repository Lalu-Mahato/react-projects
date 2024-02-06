import React from "react";
import Link from "./components/Link";

function App() {
  console.log(React);
  return (
    <>
      <Link
        title="React"
        content="React is the library for web and native user interfaces."
        url="https://react.dev/"
      />
      <Link
        title="Tutorial: Tic-Tac-Toe"
        content="Describing the UI - Thinking in React - Memo - .."
        url="https://react.dev/learn/tutorial-tic-tac-toe"
      />
      <Link
        title="Installation"
        content="Installation · Start a new React project. If you want to build an ..."
        url="https://react.dev/learn/installation"
      />
      <Link
        title="Thinking in React"
        content="Thinking in React · Step 1: Break the UI into a component ..."
        url="https://react.dev/learn/thinking-in-react"
      />
    </>
  );
}

export default App;
