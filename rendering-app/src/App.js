import Login from "./components/Login";

function App() {
  const isLoggedIn = true;
  console.log(new Date().toISOString())
  return (
    <div className="container">
      {isLoggedIn ? <h1>Hello World</h1> : <Login />}
    </div>
  );
}

export default App;
