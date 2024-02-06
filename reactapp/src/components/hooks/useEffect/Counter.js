import { useState } from "react";
// import User from "./User";
import Users from "./Users";

function Counter() {
    const [counter, setCounter] = useState(0);
    return (
        <div>
            <h1>useEffect hook in React hook</h1>
            <h2>Counter: {counter}</h2>
            <button onClick={() => setCounter(value => value + 1)}>+</button>
            {/* <User counter={counter} /> */}
            <Users />
        </div>
    );
}
export default Counter;